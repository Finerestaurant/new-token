---
title: 동적 시스템 구현을 위한 연구 로드맵
---

인간 지능은 **유한한 계산 자원**이라는 제약 속에서 **방대한 정보량**을 효과적으로 처리하여 **정확하고 장기적인 예측**을 수행하도록 진화해왔습니다. 이러한 능력을 달성하기 위해 인간 지능은 다음과 같은 핵심 역량들을 발달시켰습니다.

### 핵심 능력

1.  **압축 (Compression)**: 유한한 자원 제약 하에서 정보의 본질을 추출하고 효율적으로 표현하는 능력입니다.
2.  **계층 (Hierarchy)**: 정보를 여러 수준으로 구조화하고 조직화하여 복잡성을 관리하는 능력입니다.
3.  **능동성 (Proactivity)**: 정보를 받아들이는 것에 그치지 않고, 능동적으로 정보를 탐색하고 처리하며, 다음 단계를 선제적으로 결정하는 능력입니다.
4.  **유연성 (Flexibility)**: 상황 변화에 따라 기존의 처리 방식이나 필터를 조정하고 새로운 방식으로 적응하는 능력입니다.
5.  **창조성 (Creativity)**: 새로운 필터, 지식, 또는 해결책을 생성하는 능력입니다.

### Episodic Prediction 및 dynamic chunking

이러한 인간 지능의 능력들은 **Episodic prediction** 및 **dynamic chunking**과 같은 개념들과 깊이 연관됩니다.

-   **Dynamic Chunking**: 정보 처리 시, 어디까지를 하나의 묶음(chunk)으로 볼지 능동적으로 선택하고 조절하는 능력입니다. 이는 선제적인 정보 처리 방식과 연결됩니다.
-   **h-net 및 계층**: Goomba Lab 등에서 중요하게 다루는 h-net과 같은 모델은 dynamic chunking뿐만 아니라 계층적 구조를 강조하며, 이는 정보량의 압축 달성과도 직결됩니다.
-   **인간의 선입견 (Preconceptions)**: 인간이 정보를 처리할 때 사용하는 '선입견' 또는 '필터'는 dynamic chunking과 유사한 역할을 합니다. 우리는 이러한 필터의 작동 방식에 주목할 필요가 있습니다.
    -   새로운 필터 생성 (창조/새로운 학습)
    -   필터 교체 (유연성)
    -   선제적 필터 선택 및 입력 수용 (능동성)
    -   압축된 정보량에 따른 필터 간 계층적 관계 (계층)

이러한 측면들은 동적 시스템이 단순히 기존 정보를 조합하는 것을 넘어, 능동적으로 새로운 개념을 학습하고 이를 유연하게 적용하며, 궁극적으로 창조적인 결과물을 만들어내는 능력으로 이어질 수 있습니다.

---

### 참고 문헌

-   [What I cannot create, I do not understand](https://journals.biologists.com/jcs/article/130/18/2941/56386/What-I-cannot-create-I-do-not-understand)
-   [cnn](https://pmc.ncbi.nlm.nih.gov/articles/PMC2718241/)
-   [attention](https://x.com/karpathy/status/1864023344435380613?lang=en)
-   [Does AI Have to Mimic the Human Brain?](https://www.2ndorderthinkers.com/p/does-ai-have-to-mimic-the-human-brain)
