GitHub Pages 檔案總管 — GitHub API 版

這個版本不再使用 files.json。

Repository 設定：
- Owner: jumolamahome
- Repository: webdemo
- Branch: main

功能：
1. 即時列出 Repository 根目錄。
2. 所有子目錄都可以進入。
3. 可回上一層、回根目錄、重新整理。
4. HTML / HTM 會直接用 GitHub Pages 網址開啟。
5. CSS / JS / JSON / TXT / MD / PHP 等文字檔可預覽原始碼。
6. PNG / JPG / GIF / WEBP / SVG 可預覽。
7. PDF 可預覽。
8. 不需要 files.json。
9. 不需要 GitHub Actions 自動產生目錄索引。

注意：
GitHub API 對未登入請求有速率限制，但一般個人教學網站瀏覽目錄通常足夠。
如果 Repository 的預設分支不是 main，請修改 index.html：
const GITHUB_BRANCH = "main";
