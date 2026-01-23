---
title: 가설설정
---
## 사용자 질문

인간의 예측은 토큰 하나가 아니고, 이런 식인거 같아. 

1. 인간의 예측은 계층 관계를 이루는 상황을 단위로 삼아. 눈앞에 바로 있는 일은 굉장히 구체적으로 예측하고, 저 멀리 있는 일은 어렴풋이 예측하는거 같아. 하지만, 구체적으로 예측하는 만큼, 더 변화무쌍하는 것을 허락하고, 멀리있는 일일수록 더 강고해. 

2. 조금 더 예시를 들어보자면 이런것이야. 난 지금 카페에서 커피를 마시면서 lm과 대화를 하고 있는 지금 이 사건을 스트레스 없이 받아들이고 있는 이유는, 이미 선입견 - 선제적으로 입력되있는 관점이 있는거야. 그 관점들은 계층적으로 이루어져있어. 상위계층으로 가면, 한국사회에 대한 월드모델 시뮬레이션, 그것보다 하위로 가면 서울시의 분위기 시뮬레이션, 그 아래로 가면, 이 카페의 시뮬레이션, 이 카페에서 일어날수 있는 시나리오를 머릿속으로 이미 그리고 있는 거지. 그 관점이 위로가면 위로갈수록 더 무겁고, 바뀌기 어려운 것들이야. 왜냐하면 이 계층관계는 상위가 하위를 품고 있고, 이 관계에 의해 상위로 가면 갈수록 정보량이 많아지기 때문이야. 

3. 이러한 작동방식을 lm에 구현하고 싶어. 그리고 이러한 방식은 lm 월드모델 이라는 생각이 들어. 선제적으로 예측하고, 이 예측은 상위의 상황모델일수록 더 broad한 예측을 수행하고, 하위의 모델일수록 narrow한 예측을 수행하는거지. 그리고 상황 모델들은 모두 계층관계를 맺고 있어야해. 그리고 loss function이 어떻게 되어야 할지도 필요하고. 

---

## claude 답변

## **핵심 키워드**

1. **계층적 예측 (Hierarchical Prediction)**
   - 시간적/추상적 거리에 따른 예측 granularity 차이
   - Near future = 구체적/세밀, Far future = 추상적/광범위

2. **비대칭적 강건성 (Asymmetric Robustness)**
   - 단기 예측 = 높은 가변성 허용
   - 장기 예측 = 높은 안정성/강건성

3. **정보 밀도의 역설**
   - 상위 계층 = 더 많은 정보량, 더 무거움, 변경 어려움
   - 하위 계층 = 적은 정보량, 가벼움, 변경 쉬움
   - "상위가 하위를 품는다" = 상위는 하위의 가능성 공간을 제약함

4. **선제적 시뮬레이션 (Proactive Simulation)**
   - 실제 입력 전에 이미 상황 모델들이 준비됨
   - "선입견"이 아니라 "준비된 맥락"으로서의 사전 활성화

5. **월드 모델로서의 계층 구조**
   - 한국사회 → 서울시 → 카페 → 현재 상황
   - 각 계층이 독립된 시뮬레이터이면서 동시에 연결됨

## **구현을 위해 필요한 것들**

### **1. 아키텍처 설계**

**다중 시간 스케일 표현:**
- 여러 층위의 latent space가 필요해
- 각 층이 다른 시간 해상도를 담당
- 예: Level 0 (다음 토큰), Level 1 (다음 문장), Level 2 (다음 문단), Level 3 (전체 담론)

**계층 간 정보 흐름:**
- 상위 → 하위: conditioning/constraint
- 하위 → 상위: aggregation/update
- Bidirectional하되, 상위가 하위를 "품는" 비대칭성 구현

**고려할 기존 연구:**
- Hierarchical VAEs
- Predictive Coding Networks
- World Models (Ha & Schmidhuber)
- Hierarchical Reinforcement Learning의 temporal abstraction

### **2. 손실 함수 설계**

**계층별 차별화된 손실:**
```
Total Loss = Σ (w_i × L_i)
여기서:
- L_0 = 토큰 레벨 prediction loss (높은 가중치, 정확도 요구)
- L_1 = 문장 레벨 prediction loss (중간 가중치)
- L_2 = 문단 레벨 prediction loss (낮은 가중치, broad match)
- L_3 = 담론 레벨 prediction loss (매우 낮은 가중치)
```

**구체적 손실 성분들:**
- **Consistency Loss**: 상위 예측과 하위 예측 간의 일관성
- **Reconstruction Loss**: 각 계층에서의 예측 정확도
- **Stability Loss**: 상위 계층일수록 시간에 따른 변화를 패널티
- **Flexibility Loss**: 하위 계층일수록 다양한 가능성 유지를 보상
- **Information Bottleneck**: 상위로 갈수록 정보 압축, 하지만 하위를 설명 가능해야 함

### **3. 학습 전략**

**Curriculum Learning:**
- 처음엔 단일 레벨만 학습
- 점진적으로 계층 추가
- 상위 계층이 안정화된 후 하위 계층 fine-tune

**Multi-Scale Training:**
- 같은 데이터를 여러 시간 스케일로 동시 학습
- 짧은 context window와 긴 context window 동시 사용

**Contrastive Learning:**
- 같은 상위 맥락에서 나온 하위 상황들은 가깝게
- 다른 상위 맥락의 하위 상황들은 멀게

### **4. 평가 방법**

**계층별 평가 지표:**
- Level 0: Token-level perplexity (기존 방식)
- Level 1: Sentence coherence score
- Level 2: Topic consistency
- Level 3: Discourse-level coherence

**계층 간 관계 평가:**
- 상위 예측이 얼마나 하위 가능성들을 잘 제약하는가?
- 하위의 변화가 상위에 적절히 반영되는가?
- 예상치 못한 입력에 대한 계층별 회복 속도

**"무게" 측정:**
- 상위 계층의 표현을 바꾸는데 필요한 evidence 양
- 하위 계층의 표현을 바꾸는데 필요한 evidence 양
- 비율이 상위로 갈수록 기하급수적으로 증가해야 함

### **5. 구현 실험**

**Phase 1: Proof of Concept**
- 2-level 시스템부터 시작 (문장 레벨 + 토큰 레벨)
- 간단한 도메인 (예: 뉴스 기사)
- 상위 레벨이 문장 임베딩을 예측, 하위 레벨이 토큰 예측

**Phase 2: 계층 확장**
- 3-4 level로 확장
- 각 레벨의 시간 스케일 자동 학습 vs 사전 정의 비교

**Phase 3: 동적 계층**
- 상황에 따라 계층 깊이가 조절되는 시스템
- "이 맥락에서는 3단계면 충분" vs "여기는 5단계 필요"

### **6. 기술적 도전과제**

**메모리/계산 효율:**
- 모든 계층을 동시에 유지하면 매우 무거움
- Sparse activation? Hierarchical caching?

**학습 불안정성:**
- 계층 간 gradient flow 관리
- 상위 계층이 너무 빨리 고착되는 것 방지
- 하위 계층이 상위를 무시하는 것 방지

**평가의 어려움:**
- "좋은" 계층적 표현이 뭔지 정의하기 어려움
- 사람도 자신의 계층적 예측을 명시적으로 표현 못 함

## **관련 연구 영역**

찾아볼 만한 것들:
- **Predictive Coding** in neuroscience
- **Hierarchical Temporal Memory** (HTM)
- **Event Segmentation Theory** (심리학)
- **Diffusion models의 multi-scale generation**
- **Coarse-to-fine decoding** in vision
- **Temporal abstraction in RL**

이 접근이 특히 흥미로운 이유는 단순히 "여러 토큰을 한번에 예측"이 아니라, **서로 다른 추상화 레벨에서 동시에 작동하는 예측**이라는 점이야. 이건 인간의 인지와 훨씬 더 가까운 것 같아.