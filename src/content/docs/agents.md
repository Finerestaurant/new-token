---
title: Starlight Markdown 문법 가이드
description: Starlight 프로젝트에서 .md 파일을 작성할 때 지켜야 할 주요 문법 및 Frontmatter 가이드입니다.
---

# Starlight Markdown 문법 가이드

이 문서는 Starlight 기반 프로젝트에서 `.md` 파일을 작성할 때 필요한 기본적인 문법 및 `Frontmatter` 작성법을 안내합니다.

## 1. Frontmatter (프론트매터)

모든 Starlight `.md` 파일은 문서 상단에 YAML 형식의 Frontmatter 블록을 포함해야 합니다. Frontmatter는 문서의 메타데이터를 정의하며, `---` 세 개의 대시로 시작하고 끝납니다.

### 필수 필드: `title`

`title` 필드는 문서의 제목을 정의하며 **필수적**입니다. 이 제목은 웹사이트의 내비게이션, 페이지 제목, 검색 결과 등에 사용됩니다. `title: Required` 에러가 발생했다면, 이 필드가 누락되었거나 올바르게 작성되지 않았을 가능성이 높습니다.

**예시:**

```yaml
---
title: 문서 제목
description: 이 문서는 ... 에 대한 설명을 포함합니다.
---
```

### 권장 필드

-   `description`: 문서의 간략한 설명을 제공합니다. 검색 엔진 최적화(SEO) 및 미리보기 텍스트에 사용될 수 있습니다.
-   `slug`: 문서의 URL 경로를 명시적으로 설정합니다. `slug: /my-custom-path` 와 같이 작성할 수 있습니다. 설정하지 않으면 파일 경로를 기반으로 자동으로 생성됩니다.
-   `sidebar`: 사이드바 내비게이션에서의 표시 순서나 그룹화 등을 제어합니다.

**전체 Frontmatter 예시:**

```yaml
---
title: Starlight에서 LLM 토큰 학습 실험 설계
description: LLM이 새로운 토큰을 학습하는 능력을 갖추도록 하는 실험 설계에 대한 문서입니다.
slug: /experimental-design/llm-token-learning
sidebar:
    label: LLM 토큰 학습 실험
    order: 1
---
```

## 2. Markdown 본문 작성

Frontmatter 아래에는 표준 Markdown 문법을 사용하여 문서의 내용을 작성합니다.

### 헤딩 (Headings)

`#` 기호를 사용하여 제목을 만듭니다. `h1` 제목(`#`)은 보통 문서의 `title` 필드와 중복되므로, 본문에서는 `h2` (`##`)부터 시작하는 것이 일반적입니다.

```markdown
# 최상위 제목 (Frontmatter의 title과 유사)

## 주요 섹션 제목
### 하위 섹션 제목
#### 더 작은 제목
```

### 단락 (Paragraphs)

텍스트는 한 줄 이상 비어 있으면 새로운 단락으로 간주됩니다.

```markdown
이것은 첫 번째 단락입니다.

이것은 두 번째 단락입니다. 두 단락 사이에 빈 줄이 있습니다.
```

### 목록 (Lists)

-   순서 없는 목록: `-`, `*`, 또는 `+` 사용
-   순서 있는 목록: `1.`, `2.`, `3.` 등 숫자 사용

```markdown
- 첫 번째 항목
- 두 번째 항목
    - 하위 항목

1. 첫 번째 순서 있는 항목
2. 두 번째 순서 있는 항목
```

### 코드 블록 (Code Blocks)

세 개의 백틱(```` ``` ````)으로 코드 블록을 시작하고 끝냅니다. 언어를 지정하여 신택스 하이라이팅을 적용할 수 있습니다.

````markdown
```javascript
// JavaScript 코드 예시
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet('World');
```
````

### 인라인 코드 (Inline Code)

단일 백틱(`` ` ``)으로 인라인 코드를 감쌉니다.

```markdown
`console.log()` 함수를 사용합니다.
```

### 링크 (Links)

`[링크 텍스트](URL)` 형식으로 작성합니다.

```markdown
[Gemini 웹사이트](https://gemini.google.com)
```

### 이미지 (Images)

`![대체 텍스트](이미지_URL)` 형식으로 작성합니다.

```markdown
![설명 이미지](https://example.com/image.png)
```

이 가이드를 참고하여 Starlight 문서를 올바르게 작성하고 `title: Required` 에러를 해결하시기 바랍니다.