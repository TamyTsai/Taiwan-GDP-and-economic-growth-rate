import Chart from 'chart.js/auto'
// 我們從特殊的 Chart.js/auto 路徑匯入 Chart，即主要的 Chart.js 類別。 它會載入所有可用的 Chart.js 元件（這非常方便），但不允許進行 tree-shaking。

(async function() {
  const yearGrowRate = [
    { year: 2014, growRate: 4.72 },
    { year: 2015, growRate: 1.47 },
    { year: 2016, growRate: 2.17 },
    { year: 2017, growRate: 3.31 },
    { year: 2018, growRate: 2.79 },
    { year: 2019, growRate: 3.06 },
    { year: 2020, growRate: 3.39 },
    { year: 2021, growRate: 6.62 },
    { year: 2022, growRate: 2.59 },
    { year: 2023, growRate: 1.31 },
  ]; //裝有年份及經濟成長率的物件陣列
  //以ES6中const宣告，避免資料內容被意外修改

  const yearGDP = [
    { year: 2014, GDP: 16258047 },
    { year: 2015, GDP: 17055080 },
    { year: 2016, GDP: 17555268 },
    { year: 2017, GDP: 17983347 },
    { year: 2018, GDP: 18375022 },
    { year: 2019, GDP: 18908632 },
    { year: 2020, GDP: 19914806 },
    { year: 2021, GDP: 21663231 },
    { year: 2022, GDP: 22679843 },
    { year: 2023, GDP: 23550853 },
  ]; //裝有年份及GDP的物件陣列


new Chart( //我們實例化一個新的 Chart 實例並提供兩個參數：將呈現圖表的畫布元素和選項物件。
    document.getElementById('acquisitions'),
    {
    //   type: 'line', //我們只需要提供一個圖表類型（長條圖）並提供由標籤（通常是資料點的數字或文字描述）和資料集數組組成的資料（Chart.js 支援大多數圖表類型的多個資料集）。 每個資料集都指定有一個標籤並包含一組資料點。
      data: {
        labels: yearGrowRate.map(row => row.year), //底下橫軸標示 //使用ES6方法及箭頭函式寫法，抓出yearGrowRate物件陣列中 物件中year屬性對應的值，形成新陣列
        datasets: [ //資料組 物件陣列
          {
            type: 'line', //圖表類型：折線圖
            label: 'GDP成長率', //上方圖表標示
            data: yearGrowRate.map(row => row.growRate), //資料來源
            yAxisID: 'growRate', //此資料之y軸ID（可在options設定此軸）
            backgroundColor: '#FF8000', //點顏色
            borderColor: '#FF7575', //線顏色
          },
          {
            type: 'bar', //圖表類型：直方圖
            label: '名目GDP（百萬元）',
            data: yearGDP.map(row => row.GDP),
            yAxisID: 'GDP',
            backgroundColor: '#7AFEC6', //長條顏色
          }
        ]
      },
      options:{
        scales: {
            GDP: {
                position: 'right', //指定id為GDP的軸位置在右邊
            },
        },
        plugins: {
            title: { //標題
                display: true, //是否顯示標題
                text: ['臺灣GDP與經濟成長率','2014~2023年'], //標題內容 陣列中不同元素 會在不同行
                padding: { //上下邊界
                    top: 10,
                    bottom: 30
                }
            }
        }
    }
   }
  );
})();