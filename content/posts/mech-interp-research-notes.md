---
title: "기계적 해석학 연구 노트"
date: 2026-02-24
draft: true # 초안 상태로 설정하여 빌드 시 기본적으로 제외됩니다.
tags: ["Mechanistic Interpretability", "Research Notes", "Draft"]
categories: ["Research Log"]
---

이 문서는 기계적 해석학(Mechanistic Interpretability) 관련 논문을 읽으면서 얻은 생각, 깨달음, 질문, 아이디어 등을 자유롭게 기록하는 개인 연구 노트입니다.

향후 이 노트의 내용을 바탕으로 정식 글을 작성할 예정입니다.

---

## 1. 일반적인 생각 및 질문

*   (여기에 자유롭게 생각을 기록하세요)

---

## 2. 주요 연구 흐름 및 논문별 통찰

### Distill & Transformer Circuits 연구 흐름 (시간순)

*   **2020: "Zoom In: An Introduction to Circuits"** (Olah et al., Distill)
    *   **기여:** 신경망을 이해 가능한 '회로(Circuit)'의 집합으로 보는 관점을 제시. 뉴런 및 회로 수준 분석의 토대를 마련.

*   **2021: "A Mathematical Framework for Transformer Circuits"** (Elhage et al., Anthropic)
    *   **기여:** 트랜스포머 아키텍처 분석을 위한 수학적 프레임워크를 제공. 2-레이어 모델에서 **인덕션 헤드(Induction Heads)**를 처음으로 발견하고 정의.

*   **2022 (March): "Toy Models of Superposition"** (Elhage et al., Anthropic)
    *   **기여:** 모델이 뉴런보다 더 많은 특징(Feature)을 표현하기 위해 사용하는 '중첩(Superposition)' 현상을 탐구. 다중의미성(Polysemanticity)과 상전이(Phase Change) 개념을 소개.

*   **2022 (December): "In-context Learning and Induction Heads"** (Olsson et al., Anthropic)
    *   **기여:** 인덕션 헤드를 체계적으로 연구하여, 이것이 모델 규모에 관계없이 인컨텍스트 학습(In-context Learning)을 가능하게 하는 핵심 메커니즘이라는 강력한 증거를 제시.

*   **2023: "Towards Monosemanticity: Decomposing Language Models With Dictionary Learning"** (Brunefors et al., Anthropic)
    *   **기여:** 희소 오토인코더(Sparse Autoencoders, SAEs)를 사용하여 다중의미적 뉴런을 단일 의미(Monosemantic)의 특징으로 분해하는 방법을 제안. 해석 가능성을 크게 향상시킴.

*   **2024: "Scaling Monosemanticity"** (Anthropic)
    *   **기여:** 희소 오토인코더 접근법이 대규모 모델에도 확장 가능함을 보여주었으며, 실제 상용 모델에서 수백만 개의 해석 가능한 특징을 추출함.

---

### 논문별 개인 노트

#### Toy Models of Superposition (Anthropic, 2022)

*   [읽은 내용 요약 또는 핵심 통찰]
*   [궁금한 점 또는 연결되는 아이디어]

#### Grokking 논문

*   [읽은 내용 요약 또는 핵심 통찰]
*   [궁금한 점 또는 연결되는 아이디어]

#### In-context Learning and Induction Heads (Olsson et al., 2022)

*   [Argument 3까지의 주요 내용]
*   [인덕션 헤드와 ICL의 관계에 대한 생각]

---

## 3. 지식/개념의 흔적 찾기 아이디어 (다음 탐구 주제)

*   모델 내부에서 특정 지식이나 개념이 어떻게 인코딩되고 표현되는지 탐색하는 방법론에 대한 초기 아이디어
*   관련 연구 분야: Feature probing, Sparse Autoencoders (SAE), Representation Engineering 등
*   [구체적인 질문 또는 실험 아이디어]

---

## 4. 기타 메모
*   (자유롭게 추가)
