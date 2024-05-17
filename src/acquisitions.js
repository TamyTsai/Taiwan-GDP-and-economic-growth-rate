import Chart from 'chart.js/auto'
// 我們從特殊的 Chart.js/auto 路徑匯入 Chart，即主要的 Chart.js 類別。 它會載入所有可用的 Chart.js 元件（這非常方便），但不允許進行 tree-shaking。 我們稍後會解決這個問題。

(async function() {
  const data = [
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
  ];


  new Chart( //我們實例化一個新的 Chart 實例並提供兩個參數：將呈現圖表的畫布元素和選項物件。
    document.getElementById('acquisitions'),
    {
      type: 'line', //我們只需要提供一個圖表類型（長條圖）並提供由標籤（通常是資料點的數字或文字描述）和資料集數組組成的資料（Chart.js 支援大多數圖表類型的多個資料集）。 每個資料集都指定有一個標籤並包含一組資料點。
      data: {
        labels: data.map(row => row.year), //目前，我們只有一些虛擬資料條目。 因此，我們提取年份和計數屬性以在唯一資料集中產生標籤和資料點數組。
        datasets: [
          {
            label: 'GDP成長率',
            data: data.map(row => row.growRate)
          }
        ]
      }
    }
  );
})();