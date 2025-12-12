# GitHub Pages 배포 가이드

## 1단계: GitHub 저장소 생성

1. GitHub에 로그인: https://github.com
2. 우측 상단의 **+** 버튼 클릭 → **New repository**
3. 저장소 설정:
   - Repository name: `nexus-copy-trading-website` (또는 원하는 이름)
   - Description: "Nexus Copy Trading Bot - Landing Page"
   - Public 선택 (GitHub Pages는 Public 저장소에서만 무료)
   - **Initialize this repository with a README** 체크 해제
   - **Add .gitignore** 선택 안 함
   - **Choose a license** 선택 안 함
4. **Create repository** 클릭

## 2단계: 로컬 저장소를 GitHub에 연결

터미널에서 다음 명령어를 실행하세요:

```bash
cd /Users/kim/Desktop/github/텔레봇_카피트레이딩/smart-kr-bot/website

# GitHub 저장소 URL을 YOUR_USERNAME과 REPO_NAME으로 변경하세요
git remote add origin https://github.com/YOUR_USERNAME/nexus-copy-trading-website.git

# 메인 브랜치로 설정
git branch -M main

# GitHub에 푸시
git push -u origin main
```

**예시:**
만약 GitHub 사용자명이 `kim123`이고 저장소 이름이 `nexus-copy-trading-website`라면:
```bash
git remote add origin https://github.com/kim123/nexus-copy-trading-website.git
git branch -M main
git push -u origin main
```

## 3단계: GitHub Pages 활성화

1. GitHub 저장소 페이지로 이동
2. 상단 메뉴에서 **Settings** 클릭
3. 왼쪽 사이드바에서 **Pages** 클릭
4. **Source** 섹션에서:
   - Branch: `main` 선택
   - Folder: `/ (root)` 선택
5. **Save** 클릭

## 4단계: 사이트 확인

몇 분 후 다음 URL에서 사이트를 확인할 수 있습니다:
- `https://YOUR_USERNAME.github.io/nexus-copy-trading-website/`

**예시:**
- `https://kim123.github.io/nexus-copy-trading-website/`

## 업데이트 방법

웹사이트를 수정한 후:

```bash
cd /Users/kim/Desktop/github/텔레봇_카피트레이딩/smart-kr-bot/website

git add .
git commit -m "Update website content"
git push
```

GitHub Pages는 자동으로 업데이트됩니다 (몇 분 소요).

## 문제 해결

### 푸시 권한 오류
- GitHub 인증이 필요할 수 있습니다
- Personal Access Token 사용 또는 SSH 키 설정 필요

### 사이트가 보이지 않음
- GitHub Pages 활성화 후 5-10분 정도 기다려주세요
- Settings → Pages에서 배포 상태 확인

### 커스텀 도메인 추가
1. Settings → Pages → Custom domain
2. 도메인 입력 (예: `nexus-copytrading.com`)
3. DNS 설정 안내를 따르세요

