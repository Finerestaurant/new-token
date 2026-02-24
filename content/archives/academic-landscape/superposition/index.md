---
title: "Superposition: 신경망의 중첩과 지식의 조작"
description: "Anthropic의 'Toy Models of Superposition' 연구를 바탕으로, 신경망의 내부 표현 중첩 현상을 분석하고 Multi-Stream 아키텍처에서의 Unlearning 및 지식 조작 가능성을 탐구합니다."
---

최근 Mechanistic Interpretability(기계적 해석학) 분야, 특히 Anthropic의 연구 결과들은 신경망이 정보를 처리하고 저장하는 방식에 대한 근본적인 통찰을 제공합니다. 이 문서는 **Superposition(중첩)** 현상을 이해하고, 이를 통해 지식을 **가속 학습**, **해체**, **조작(Unlearning)**하는 공학적 가능성을 기록합니다.

## 1. 핵심 연구: Toy Models of Superposition

- **연구 출처:** [Anthropic, "Toy Models of Superposition" (2022)](https://transformer-circuits.pub/2022/toy_model/index.html)
- **현상:** 신경망은 제한된 수의 뉴런(차원)에 그보다 훨씬 많은 수의 특징(Feature)을 구겨 넣는 **압축(Compression)**을 수행합니다.
- **원인:** 학습 과정에서 **Loss(손실)**를 낮추기 위해, 모델은 희소성(Sparsity)을 이용해 서로 관련 없는 개념들을 하나의 뉴런에 겹쳐서 저장합니다.
- **결과 - 다의성(Polysemanticity):** 이로 인해 하나의 뉴런이 여러 의미를 동시에 가지는 '다의적 뉴런'이 탄생하며, 이는 버그가 아니라 최적화의 산물입니다.

## 2. Superposition의 4가지 주요 특성과 조작 가능성

### 2.1. 중첩의 계층성 (Hierarchical Structure)
- **질문:** 중첩은 계층적으로 이루어지는가?
- **분석:** **가능성 매우 높음.** Circuit Analysis 연구들에 따르면, 하위 레이어의 단순한 중첩된 특징들이 상위 레이어에서 더 복잡한 중첩된 특징들로 합성됩니다. 지식은 평면적으로 흩뿌려진 것이 아니라, **중첩된 상태로 쌓여 올라가는 구조**를 가집니다.

### 2.2. 중첩의 가속화 (Acceleration)
- **질문:** 중첩을 더 빠르게 일으킬 수 있는가?
- **분석:** **가능성 있음 (Sparsity 조절).**
- **방법:** 학습 시 **L1 Regularization**을 추가하거나 희소성을 강조하는 활성화 함수(예: Top-K activation)를 사용하여 모델에게 "뉴런을 최대한 적게 쓰라"는 제약을 가하면, 모델은 더 적극적으로 Superposition을 형성하여 압축 효율을 높입니다.

### 2.3. 중첩의 해체 (Untangling)
- **질문:** 중첩을 인위적으로 풀 수 있는가?
- **분석:** **가능성 있음 (Sparse Autoencoders).**
- **방법:** 이미 학습된 신경망(중첩된 상태)에 훨씬 더 큰 차원을 가진 **Sparse Autoencoder(SAE)**를 부착하여(Expansion), 뭉쳐져 있던 다의적 뉴런을 단일 의미를 가진 깨끗한 특징(Feature)들로 분리해낼 수 있습니다.
    - *예시:* 512차원(모델) → 16,000차원(SAE)으로 확장하여 개념 분리.

### 2.4. 지식의 조작 (Cut & Paste / Unlearning)
- **질문:** 지식을 자르고 붙이는 것이 가능한가?
- **분석:** **증명됨 (Feature Clamping / Steering).**
- **사례:** Anthropic의 **"Golden Gate Claude"** (2024). SAE로 특정 특징(금문교)을 찾아 값을 고정(Clamping)하자 모델의 모든 반응이 해당 특징에 종속됨.
- **적용:** 반대로, 특정 지식(편향, 오류, 틀린 가설)에 해당하는 특징 벡터를 찾아 값을 0으로 만들거나 음수 방향으로 조절(Steering)하면 해당 지식을 **실시간으로 제거(Unlearn)**하는 효과를 낼 수 있습니다.

## 3. Multi-Stream 아키텍처에의 적용 제언

이러한 Superposition의 원리는 Multi-Stream 아키텍처가 지향하는 **"눈치 빠른(Quick-witted) 지능"**과 **"유연한 Unlearning"**을 구현하는 구체적인 수단이 될 수 있습니다.

1.  **하위 스트림 (Part / Token Stream):**
    - **가속화:** 강한 Sparsity Penalty를 적용하여 작은 모델 안에 방대한 세상의 패턴을 빠르게 중첩시켜 압축하도록 유도합니다.
2.  **상위 스트림 (Whole / Situation Stream):**
    - **해체 및 조작:** 상위 스트림은 하위 스트림에 대한 **SAE(Sparse Autoencoder)** 역할을 수행하거나 제어권을 가져야 합니다.
    - **실시간 개입 (Real-time Intervention):** 상위 스트림이 상황 변화를 감지하면, 하위 스트림의 특정 Feature Vector를 활성화(Paste)하거나 억제(Cut)하는 방식으로 **동적 Unlearning**과 **Context Switching**을 수행합니다.
