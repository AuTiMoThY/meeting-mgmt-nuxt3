# 會議管理系統

## 📝 專案簡介
使用 Nuxt 3 + pinia + scss 開發的一個會議管理平台之前端頁面，提供使用者管理會議及會議室，並能將會議資訊傳送至設備。


## 🔗 相關連結
- [前台網站](https://demo.auozzy.com/meeting-mgmt/)

## ✨ 功能說明
### 前台功能
- 會議管理
    - 可查看所有會議列表、會議資訊
    - 可新增、修改、刪除會議
- 會議室管理
    - 可查看所有會議室列表、會議室資訊
    - 可新增、修改、刪除會議室
- 設備管理
    - 可查看所有設備列表、設備資訊
    - 可新增、修改、刪除設備
- 內容管理
    - 可查看所有內容列表、預覽內容資訊
    - 可新增、修改、刪除內容
    - 將內容發送至設備
- 人員管理
    - 可查看所有人員列表、人員資訊
    - 可新增、修改、刪除人員

## 🛠 技術
### 前端
- Nuxt 3 框架
- Pinia 狀態管理
- SCSS 樣式處理

### 開發特色
- RWD響應式設計，支援電腦、手機瀏覽
- 優化的使用者互動效果
- 組件化開發，提高代碼復用性
- 自定義資料表格元件，可依狀態做不同呈現
- 自定義提示訊息元件，根據操作結果呈現不同訊息

## 💻 環境要求
- Node.js v22.11.0
- npm v10.9.0

## 🔧 安裝說明
1. 下載專案
```bash
git clone https://github.com/AuTiMoThY/meeting-mgmt-nuxt3.git
cd meeting-mgmt-nuxt3
``` 

2. 安裝依賴
```bash
npm install
```

3. 啟動開發伺服器
```bash
npm run dev
```

4. 訪問網站
```bash
http://localhost:8090
```

5. 輸出靜態檔案
```bash
npm run generate
```

## 📸 系統展示
![首頁](https://demo.auozzy.com/picture/meeting-index.jpg)
![編輯頁](https://demo.auozzy.com/picture/meeting-edit.jpg)
![提示訊息](https://demo.auozzy.com/picture/meeting-modal.jpg)
