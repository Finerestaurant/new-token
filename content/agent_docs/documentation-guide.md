---
title: "문서 작성법 가이드"
date: 2026-02-24
tags: ["문서 가이드", "작성법"]
---

## 1. 문서 구조 (Document Structure)

각 문서는 명확하고 일관된 구조를 가져야 합니다.

-   **제목 (Title):** 명확하고 설명적인 제목.
-   **프런트매터 (Frontmatter):** 문서의 메타데이터 (아래 참조).
-   **서론 (Introduction):** 문서의 목적과 내용을 요약하는 간략한 소개.
-   **본문 (Body):** 명확한 제목으로 구성된 주요 내용.
-   **결론 (Conclusion):** 핵심 요약.

## 2. 프런트매터 (Frontmatter)

각 마크다운 파일의 시작 부분에 YAML 형식의 프런트매터를 사용합니다.

```yaml
---
title: "문서 제목"
date: YYYY-MM-DD
description: "문서에 대한 간략한 설명."
tags: ["관련", "태그"]
---
```

-   `title`: 문서의 제목.
-   `date`: 발행일.
-   `description`: SEO 및 미리보기용 짧은 요약.
-   `tags`: 콘텐츠를 분류하는 관련 키워드.

## 3. 코드 블록 (Code Blocks)

-   문법 강조를 위해 코드 블록에는 항상 언어를 명시해야 합니다.
-   필요한 경우 설명적인 파일 이름이나 주석을 사용합니다.

```javascript
// 명확한 코드 블록 예시
function helloWorld() {
  console.log("Hello, World!");
}
```

## 4. 링크 (Linking)

-   **내부 링크:** 사이트 내 다른 문서로 연결할 때는 상대 경로를 사용합니다. 예: `[글쓰기 스타일](./writing-style-guide/)`.
-   **외부 링크:** 외부 링크에는 전체 URL을 사용합니다. 예: `[Hugo 공식 사이트](https://gohugo.io/)`.
