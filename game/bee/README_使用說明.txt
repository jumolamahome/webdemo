SPACE BEE｜經典小蜜蜂網頁遊戲 UI 與完整遊戲
==========================================

本專案依序完成四個項目：

01_space_bee_wireframe.png
  (1) Wireframe：首頁、遊戲主畫面與狀態視窗線框圖。

02_space_bee_static_ui.html
  (2) HTML + CSS 靜態 UI：可切換首頁、遊戲、暫停、結束、過關等頁面。
  此檔只有畫面預覽，沒有真正的遊戲碰撞或計分。

03_space_bee_playable.html
  (3) 可實際遊玩的小蜜蜂：直接雙擊 HTML 開啟即可遊玩。
      遊戲玩法：擊落小蜜蜂編隊、閃避敵方子彈、闖過關卡。
      桌機操作：
        左右方向鍵 或 A / D：移動
        空白鍵：射擊（按住連發）
        P：暫停或繼續
        Esc：返回首頁
      手機：畫面下方左右移動鍵與 FIRE 按鈕。
      最高分會儲存在瀏覽器本機的 localStorage。
      音效由 Web Audio API 即時產生，不依賴外部聲音檔案。

04_space_bee_home_to_game_prototype.html
  (4) 首頁 → 主畫面 → 遊戲狀態的互動原型。
  在首頁按「開始遊戲」進入主遊戲 UI，右側可示範暫停、過關、
  Game Over、返回首頁等操作流程；此檔非完整遊戲。

附加圖片：02、03、04 畫面預覽。

技術：HTML5 / CSS3 / 原生 JavaScript；未使用外部 CDN、套件或資料庫。
可直接以桌機瀏覽器開啟，亦能使用手機瀏覽器。
