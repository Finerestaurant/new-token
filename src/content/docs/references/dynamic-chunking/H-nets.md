---
title: H-Net
description: dynamic chunking을 활용하는 계층적 순환 모델 H-Net을 소개하는 논문입니다.
authors:
  - name: Sukjun Hwang
    affiliation: Carnegie Mellon University
  - name: Brandon Wang
    affiliation: Cartesia AI
  - name: Albert Gu
    affiliation: Carnegie Mellon University, Cartesia AI
---

이 논문은 dynamic chunking을 활용하는 혁신적인 H-Net 아키텍처를 소개합니다. H-Net은 종래의 토큰화(tokenization)의 한계를 극복하고, 단일 모델을 통해 시퀀스의 분할(segmentation)과 순환 모델링을 종단간(end-to-end)으로 수행하는 것을 목표로 합니다.

## 주요 개념:
*   **dynamic chunking (Dynamic Chunking):** 시퀀스의 내용과 문맥에 따라 동적으로 분할하는 메커니즘입니다.
*   **H-Net 아키텍처:** 인코더, 메인, 디코더 네트워크로 구성된 U-Net과 유사한 계층적 네트워크로, 다층적 계층 구조를 가능하게 합니다.
*   **종단간 학습 (End-to-End Learning):** 별도의 토큰화 및 역토큰화(detokenization) 단계 없이 모델이 전체 프로세스를 한 번에 학습할 수 있도록 합니다.

**출처:** [Dynamic Chunking for End-to-End Hierarchical Sequence Modeling](https://arxiv.org/html/2507.07955v2)