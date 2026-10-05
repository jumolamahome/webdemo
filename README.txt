GitHub Pages 檔案總管版

使用方式
========
1. 把整個資料夾內容放到 GitHub Repository 根目錄。
2. 到 Settings > Pages 開啟 GitHub Pages。
3. GitHub Actions 每次 push 時會執行 tools/generate-files.js。
4. 它會掃描 Repository 內的檔案與資料夾，產生 files.json。
5. index.html 會讀取 files.json 並顯示成檔案總管。

功能
====
- 可以進入子目錄
- 可以回上一層與根目錄
- HTML / HTM：直接當成網址開啟
- TXT / CSS / JS / JSON / MD 等：右側直接顯示文字內容
- PNG / JPG / GIF / WEBP / SVG：直接預覽圖片
- PDF：右側 iframe 預覽
- 其他檔案：直接開啟或交由瀏覽器下載

重要限制
========
GitHub Pages 是靜態託管，瀏覽器本身無法直接取得「伺服器目錄清單」。
因此必須透過 files.json 提供目錄資訊。
本專案用 GitHub Actions 自動維護 files.json。
