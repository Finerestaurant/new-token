---
title: "Hibiki: High-Fidelity Simultaneous Speech-To-Speech Translation"
description: "This paper introduces Hibiki, a decoder-only model for simultaneous speech-to-speech and speech-to-text translation."
---

[High-Fidelity Simultaneous Speech-To-Speech Translation](https://arxiv.org/html/2502.03382v2)

## Overview

The paper introduces Hibiki, a decoder-only model for high-fidelity simultaneous speech-to-speech (S2ST) and speech-to-text (S2TT) translation. Hibiki uses a multistream language model to process source and target speech synchronously, generating both text and audio tokens. A key innovation is a weakly-supervised method called "contextual alignment" that uses the perplexity of an off-the-shelf text translation system to determine optimal delays for real-time, chunk-by-chunk translation, addressing the challenge of simultaneous interpretation.

The model also incorporates voice transfer capabilities, improving speaker similarity in translated speech by labeling training examples with voice transfer scores and using classifier-free guidance during inference. Experiments on a French-English simultaneous speech translation task show that Hibiki achieves state-of-the-art performance in translation quality, speaker fidelity, and naturalness. Its simple inference process allows for batched translation and real-time on-device deployment. The authors provide examples, models, and inference code.
