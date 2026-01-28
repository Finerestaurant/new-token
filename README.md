# new-token
개인 연구 정리 페이지 — Astro + Starlight 기반 개인 노트/문서 사이트

[사이트 바로가기](https://finerestaurant.github.io/new-token/)
[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

간단 소개
- 이 레포지토리는 Astro와 Starlight 테마를 사용한 개인 연구 기록(노트, 문서)을 위한 정적 사이트입니다.
- 콘텐츠는 Markdown/MDX 파일로 작성하여 `src/content/docs/` 폴더에 두면 자동으로 라우트가 생성됩니다.

기술 스택
- Astro (package.json: ^5.6.1)
- @astrojs/starlight (package.json: ^0.37.3)
- sharp (이미지 최적화, package.json: ^0.34.2)
- 배포: GitHub Pages (사이트 호스팅 URL 위 링크 참조)

권장 환경
- Node.js 18 이상 권장 (Astro 5.x와 호환되는 LTS 버전 권장)
- npm 또는 pnpm 사용 가능

빠른 시작
1. 레포지토리 클론:
   npm:
   ```
   git clone https://github.com/Finerestaurant/new-token.git
   cd new-token
   npm install
   ```
2. 개발 서버 실행:
   ```
   npm run dev
   ```
   (기본 로컬 서버에서 사이트 확인)
3. 빌드 및 로컬 미리보기:
   ```
   npm run build
   npm run preview
   ```

스크립트
- npm run dev / start — 개발 서버 실행
- npm run build — 프로덕션 빌드 (./dist)
- npm run preview — 빌드 결과 미리보기
- npm run astro — Astro CLI 호출

프로젝트 구조 (주요 폴더)
- public/ — 정적 파일(파비콘, robots 등)
- src/
  - assets/ — 이미지나 기타 에셋
  - content/
    - docs/ — Markdown/MDX 문서(사이트 콘텐츠)
  - (기타 컴포넌트 및 레이아웃 파일)
- astro.config.mjs — Astro 설정
- package.json, tsconfig.json 등

콘텐츠 작성 가이드
- 문서 파일 위치: src/content/docs/
- 파일 확장자: .md 또는 .mdx
- 기본 frontmatter 예시:
  ```
  ---
  title: "연구 주제 제목"
  description: "간단한 요약"
  pubDate: 2026-01-28
  tags: ["ML", "notes"]
  ---
  ```
- 파일명 기반으로 라우트가 생성됩니다. (예: src/content/docs/example.md → /docs/example)

이미지와 에셋
- src/assets/에 이미지를 추가한 뒤 Markdown에서 상대 경로로 사용하세요:
  ```
  ![설명](/src/assets/이미지.png)
  ```
- 빌드시 sharp로 최적화가 필요하므로 sharp가 설치되어 있습니다.

커스터마이즈 포인트
- 레이아웃, 색상, 네비게이션 등은 Starlight 관련 컴포넌트 및 스타일을 편집하여 변경할 수 있습니다.
- site 설정(메타데이터, 베이스 경로 등)은 astro.config.mjs에서 확인하세요.

배포 (GitHub Pages)
- 현재 GitHub Pages용으로 호스팅되어 있습니다: https://finerestaurant.github.io/new-token/
- GitHub Actions 등 CI를 사용해 자동 배포하도록 설정할 수 있습니다(원하면 안내 드릴게요).

유의사항 / 다음 단계 제안
- README에 원하시면 개인 소개(저자), 추가 설명(카테고리 구조, 태그 사용법), 검색/태그 인덱스 사용법 등을 추가하겠습니다.
- 자동으로 README를 커밋/푸시하려면 권한(어떤 브랜치에 반영할지)과 커밋 메시지를 알려주세요.

기여 및 라이선스
- 개인용 저장소이므로 기본적으로 개인 관리용입니다. 공개 기여를 받으려면 CONTRIBUTING.md와 LICENSE 파일을 추가하세요.

문의
- README 수정, 추가 기능(검색, 태그, 자동 배포 workflow) 구현을 원하시면 어떤 변경을 원하는지 알려주세요.

---
