# Joe Huang's Portfolio Website

個人作品集網站，展示專業經驗、技能和專案成果。

**主人：Joe Huang** | 資深工程師，專注於軟體開發與技術創新，現職於華邦電子 (Winbond Electronics Corporation)

## 🎯 個人簡介

- **現職**：Senior Engineer at Winbond Electronics Corporation (華邦電子) | 台中
- **學歷**：
  - 國立交通大學 (NCTU) 多媒體工程研究所 碩士 (2015-2017)
  - 元智大學 (YZU) 資訊工程學系 學士 (2011-2015)
- **經驗**：
  - 台灣微軟 (Microsoft Taiwan) RD 實習 (2014-2015)
  - 高雄市政府教育局 替代役教育役 (2018)

## 🌟 功能介紹

### 📄 個人作品集 (index.html)
一個現代化的個人品牌網站，包含：
- **個人介紹**：工作經驗、教育背景一目了然
- **工作經驗**：詳細的職涯發展時間軸
- **教育背景**：學位和教育機構信息
- **技能專長**：核心技術能力展示
- **專案展示**：各類開發專案詳細介紹
- **聯絡方式**：LinkedIn 和 Email 聯繫方式
- **多語言支持**：中文 (繁體) 和英文切換
- **深色模式**：提供亮色和深色主題選擇
- **響應式設計**：完美適配桌面、平板和手機裝置

### 📊 股票損益管理系統 (stock.html)
專業的股票投資管理工具，內含：
- **投資組合管理**：記錄股票和 ETF 買賣交易
- **損益計算**：自動計算手續費、稅金和淨損益
- **數據可視化**：
  - 長條圖展示各持股損益
  - 圓餅圖展示投資組合分配
  - 趨勢圖分析價格變化
- **智慧篩選**：按股票代碼、名稱或類別搜尋
- **數據管理**：
  - 新增、編輯、刪除交易記錄
  - 匯出/匯入 JSON 格式數據
  - 本地存儲（LocalStorage）

**支援商品**：
- 台灣上市股票（台積電、聯發科、鴻海等）
- 台灣 ETF（0050、0056、00878、00919 等）

### 🗂️ 雲端檔案管理系統分析文檔 (file_system.html)
系統設計與架構分析文檔，包含：
- **系統架構說明**：核心設計規範和業務規則
- **領域模型 (UML)**：使用 Mermaid 圖表展示物件導向設計
- **資料庫設計 (ERD)**：正規化資料庫架構
- **互動式 Demo**：模擬檔案系統操作界面
- **代碼範例**：SQL、Python、Java 實作展示

### 📺 YouTube 播放清單 (playlist.html)
整合個人推薦與技術相關的 YouTube 影片清單，打造個性化的影音學習庫。

## 🛠️ 技術棧

### 前端技術
- **HTML5** - 語義化標籤
- **CSS3 + Tailwind CSS** - 現代化樣式設計
- **JavaScript (ES6+)** - 互動功能實現
- **React 18** - 股票系統 UI 元件化
- **Babel** - JSX 轉譯
- **Mermaid Diagram** - UML 和 ERD 繪製

### 數據可視化
- **Recharts** - 專業圖表庫（股票系統）
- **Mermaid** - 流程圖、UML、ERD 繪製

### 後端/存儲
- **Firebase (可選)** - 雲端認證和數據庫
- **LocalStorage** - 瀏覽器本地存儲

### 字體和國際化
- **Google Fonts** - Inter 和 Noto Sans TC 字體
- **多語言支持** - 中英文切換機制

## 📁 項目結構

```
spyderhua.github.io/
├── index.html              # 個人作品集主頁（含工作經驗、教育、技能、專案）
├── stock.html              # 股票損益管理系統
├── file_system.html        # 雲端檔案管理系統 - 需求分析與設計
├── playlist.html           # YouTube 播放清單（可能存在）
├── profile.jpg             # 頭像圖片（可選）
└── README.md               # 本文件
```

## 🚀 使用方式

### 本地查看
1. 克隆或下載本倉庫
   ```bash
   git clone https://github.com/spyderhua/spyderhua.github.io.git
   cd spyderhua.github.io
   ```

2. 用瀏覽器打開對應的 HTML 文件
   - 個人作品集：在瀏覽器中打開 `index.html`
   - 股票系統：在瀏覽器中打開 `stock.html`
   - 檔案管理系統：在瀏覽器中打開 `file_system.html`

### 在線訪問
訪問 [Joe Huang's Portfolio](https://spyderhua.github.io)

## 📋 股票系統使用指南

### 新增交易記錄
1. 點擊「新增交易」按鈕
2. 選擇日期和股票名稱
3. 輸入股數和買入價格
4. 選擇投資類別（一般/存股/短套/定期定額）
5. 點擊確認

### 查看損益分析
- **個股損益**：長條圖展示各個股票的淨損益
- **投資組合**：圓餅圖展示各類別的投資比例
- **趨勢分析**：追蹤投資總值的時間變化

### 數據管理
- **匯出**：將交易記錄匯出為 JSON 文件
- **匯入**：從 JSON 文件導入歷史記錄
- **刪除**：移除不需要的交易記錄

## 🎯 核心功能亮點

### 個人作品集
✨ 現代化設計，展現專業形象  
🌙 深色/亮色主題自動切換  
🌍 多語言支持，國際化展示  
📱 完全響應式，各設備完美適配  

### 股票管理系統
💼 專業投資組合管理  
📊 實時損益計算和視覺化  
💾 本地數據存儲，支援匯入/匯出  
🎯 智慧篩選和搜尋功能  

### 檔案管理系統
📐 完整系統設計文檔  
🔗 詳細 UML 和 ERD 圖表  
💻 多語言代碼實作示例  
🧪 互動式系統演示

## 🔧 自定義修改

### 修改個人信息
編輯 `index.html` 中的以下部分：
```html
<h1 class="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Joe Huang</h1>
<img src="profile.jpg" alt="Joe Huang">
```

### 修改股票初始數據
編輯 `stock.html` 中的 `INITIAL_DATA` 陣列：
```javascript
const INITIAL_DATA = [
    { id: 'init-1', date: '2026-01-28', name: '台積電', ... },
    // 添加更多交易記錄
];
```

### 添加新的股票
在 `STOCK_REGISTRY` 對象中添加新股票：
```javascript
const STOCK_REGISTRY = {
    '新股票': { code: 'XXXX', type: 'LISTED' },
};
```

## � 技能專長詳細

### 開發工具和語言
- **AI 輔助開發** - 以 Copilot、Claude Code 協作寫程式與 Code Review，並撰寫自訂 Skill 把重複流程自動化
- **前端框架** - Angular
- **後端語言** - C#、Java
- **系統編程** - C / C++
- **數據庫** - SQL
- **作業系統** - Linux

## 📧 聯絡方式

歡迎透過以下方式與我聯繫，期待與您的交流！
- **LinkedIn** - [Joe Huang](https://www.linkedin.com/in/spyderhua)
- **Email** - spyderhua@gmail.com
- **GitHub** - https://github.com/spyderhua

---

**Last Updated**: 2026年1月31日  
**Built with**: HTML5 + Tailwind CSS + React + Recharts + Mermaid
