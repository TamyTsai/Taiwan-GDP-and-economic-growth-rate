## 簡介
- 本專案以資料視覺化方式呈現臺灣2014～2023年之GDP及經濟成長率
- 以HTML及JavaScript撰寫，為一頁式靜態網頁
- 以Chart.js製作資料視覺化效果
  - 混合類型圖（mixed chart types）
  - 直方圖及折線圖（bar and line chart）
  - 雙縱軸
- 使用ES6撰寫JavaScript語法
  - 以const宣告GDP及經濟成長率資料，避免資料內容被意外修改
  - 採箭頭函數使語法簡潔
  - 使用map方法對物件陣列中需要的值做提取，形成新陣列，方便資料呈現

## 功能
- 進入頁面會有動畫
- 透過點擊上方「GDP成長率」、「名目GDP（百萬元）」標籤，可篩選過濾欲觀看之資料

## 畫面
![截圖 2024-05-17 專案畫面](https://github.com/TamyTsai/Taiwan-GDP-and-economic-growth-rate/assets/97825677/35045179-4618-4bff-bfad-065f527e4d07)

## 安裝
### 取得專案
```bash
git clone https://github.com/TamyTsai/Taiwan-GDP-and-economic-growth-rate.git
```
### 移動到專案內
```bash
cd Taiwan-GDP-and-economic-growth-rate
```

### 安裝套件

```bash
yarn install
```

### 運行專案

```bash
yarn dev
```

### 開啟專案

在瀏覽器網址列輸入以下網址即可看到畫面

```bash
http://localhost:1234/
```

## 專案技術
- HTML
- JavaScript
  - ES6
  - Chart.js v4.4.1
