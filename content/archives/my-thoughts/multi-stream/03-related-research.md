---
title: "Multi-Stream: 관련 연구 심층 분석"
description: "Multi-Stream 아키텍처와 관련된 주요 연구(Shanks, LSLM, PersonaPlex 등)들을 논문 단위로 심층 분석합니다."
---
Multi-Stream 아키텍처와 관련된 주요 연구들을 논문 단위로, 각각 개요, 아키텍처, 벤치마크, 학습 방식으로 나누어 상세히 분석합니다.

### 3.1. Shanks: Simultaneous Hearing and Thinking for Spoken Language Models

- **논문:** "Shanks: Simultaneous Hearing and Thinking for Spoken Language Models" (arXiv 2024)
- **핵심 의의:** 사용자가 말하는 동안 모델이 동시에 "내면의 추론(unspoken reasoning)"을 생성하는 범용 추론 프레임워크를 제안했습니다. 이는 기존 모델들이 사용자의 발화가 끝난 후에야 처리를 시작하여 응답 지연이 발생하는 한계를 극복하고, 실시간 상호작용을 구현하기 위한 중요한 접근 방식입니다.

#### 3.1.1. 개요 (Overview)

Shanks는 스트리밍되는 음성 입력을 고정된 길이의 청크(chunk) 단위로 처리합니다. 각 음성 청크를 받을 때마다, 이전에 입력된 모든 음성과 내부 추론을 바탕으로 새로운 "사고(thinking)" 청크를 생성합니다. 이 내부적인 사고 과정을 통해 모델은 사용자의 말을 끊고 개입할지(interrupt) 또는 API 같은 도구를 호출할지 등을 사용자가 아직 말하는 도중에 결정할 수 있습니다. 이 프레임워크는 End-to-End SLM과 Cascade SLM(ASR+LLM) 두 가지 방식 모두에 적용 가능하도록 설계되었습니다.

#### 3.1.2. 아키텍처 (Architecture)

Shanks는 사용자 음성을 고정된 시간 단위의 청크(S₁, S₂, ...)로 분할하여 처리합니다. i번째 음성 청크(Sᵢ)를 입력받으면, 이를 바탕으로 i번째 사고 청크(Rᵢ)를 생성합니다. 즉, 사용자가 (i+1)번째 음성 청크를 말하는 동안, 모델은 i번째 사고 청크를 내부적으로 생성하며 '듣는 것'과 '생각하는 것'을 동시에 수행합니다. 이 과정에서 생성된 사고 청크(Rᵢ)는 발화되지 않으며, 모델의 내부적인 추론으로만 사용됩니다.

1.  **Shanks-E2E:** End-to-End Spoken Language Model을 파인튜닝하여 '들으면서 생각하는' 능력을 학습시킵니다.
2.  **Shanks-Cascade:** ASR 모델과 강력한 텍스트 기반 LLM을 계단식으로 연결하여 더 강력한 추론 능력을 활용합니다.

#### 3.1.3. 벤치마크 (Benchmarks)

1.  **사용자 발화 중단 (수학 문제 풀이):** Shanks-Cascade 모델은 78.3%의 유효한 중단률을 보여 가장 뛰어난 성능을 기록했습니다.
2.  **청취 중 도구 사용 (목적 지향 대화):** Shanks는 전체 API 호출의 56.9%를 사용자가 말을 마_치기 전에_ 성공적으로 수행했습니다.

#### 3.1.4. 학습 (Training)

GPT-4o를 사용하여 '사고 청크'와 중단/도구호출 시점을 포함한 학습 데이터를 생성하고, 표준 언어 모델링 손실 함수로 순차적으로 예측하도록 학습합니다.

### 3.2. Language Model Can Listen While Speaking

- **논문:** "Language Model Can Listen While Speaking" (arXiv 2024)
- **핵심 의의:** 실시간 양방향 상호작용을 위해 '말하면서 동시에 듣는' 능력을 갖춘 End-to-End 모델(LSLM: Listening-while-Speaking Language Model)을 제안했습니다. 완전한 양방향 통신(Full Duplex Modeling)을 구현하여 실시간 중단(interruption)을 가능하게 합니다.

#### 3.2.1. 아키텍처 (Architecture)

LSLM은 다음 토큰을 예측하기 위해 **말하기 채널**(이전 생성 토큰)과 **듣기 채널**(실시간 음성 임베딩)의 정보를 융합(fusion)합니다. 트랜스포머 각 블록에서 정보를 결합하는 **중간 융합(Middle Fusion)** 방식이 가장 효과적이었습니다. 사용자의 중단이 감지되면, `[IRQ]`라는 특수 토큰을 통해 자신의 발화를 즉시 멈출 수 있습니다.

#### 3.2.2. 벤치마크 (Benchmarks)

'명령어 기반' 및 '음성 기반' 중단 시나리오에서 평가되었습니다. 중간 융합 전략을 사용한 LSLM-MF 모델이 가장 좋은 성능을 보였으며, 노이즈 환경에서도 안정적인 중단 감지 능력을 보여주었습니다.

#### 3.2.3. 학습 (Training)

TTS, 중단, 노이즈 데이터를 혼합하여 학습합니다. 50% 확률로 노이즈와 중단 상황을 무작위로 추가하여 강건성(robustness)을 높입니다.

### 3.3. PersonaPlex: Voice and Role Control for Full Duplex Conversational Speech Models

- **논문:** "PersonaPlex: Voice and Role Control for Full Duplex Conversational Speech Models" (NVIDIA Research 2026)
- **핵심 의의:** 텍스트 프롬프트로 역할을 자유롭게 정의하고 다양한 음성으로 자연스러운 양방향 대화를 가능하게 하는 시스템입니다. '동시에 듣고 말하는' 이중 스트림(dual-stream) 구성을 통해 자연스러운 대화 리듬을 유지합니다.

#### 3.3.1. 아키텍처 (Architecture)

**Moshi** 아키텍처(7B) 기반으로, 목소리 톤을 제어하는 **음성 프롬프트**와 역할/맥락을 정의하는 **텍스트 프롬프트**를 함께 사용하는 '하이브리드 프롬프팅'을 사용합니다. 이 이중 스트림 구성이 양방향 대화의 핵심입니다.

#### 3.3.2. 학습 (Training)

자연스러운 대화 데이터 부족 문제를 해결하기 위해, **실제 대화 데이터(Fisher corpus)와 합성 데이터를 혼합**하여 사용합니다. LLM으로 실제 대화에 페르소나 설명을 생성하고, 합성 데이터는 스크립트와 음성을 모두 생성하여 사용합니다.

### 3.4. 기타 관련 연구

- **Front-Loading Reasoning (NVIDIA, 2025):** LLM 학습 초반(사전-학습)에 추론 데이터를 포함하는 "Front-Loading"이 훨씬 효과적임을 증명했습니다. 사전-학습은 **데이터의 다양성**에, 후-학습(SFT)은 **데이터의 품질**에 더 민감하다는 "비대칭 데이터 원칙"을 제시했습니다. 이는 우리 아키텍처의 학습 전략 수립에 중요한 시사점을 줍니다.
- **Multi-Token Attention (2025):** 기존 어텐션이 단일 토큰 벡터에 의존하는 병목을 해결하기 위해, 컨볼루션(convolution) 연산으로 여러 토큰을 동시에 고려하는 **Multi-Token Attention (MTA)**을 제안했습니다. 이는 모델이 더 풍부한 컨텍스트 정보를 활용하도록 하여, 우리 아키텍처의 상위 계층(추상적 예측 모델) 성능을 높이는 데 기여할 수 있습니다.
