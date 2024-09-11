function getLunarDate() {
    const today = new Date();
    console.log(today,"today");

    const lunar = Lunar.fromDate(today);
    
    // 取得農曆年份、月份、日期
    const lunarYear = lunar.getYear() + '年';
    const lunarMonth = lunar.getMonth() + '月';
    const lunarDay = lunar.getDay() + '日';
    
    
    const lunarHour = lunar.getTimeInGanZhi()

    return `${lunarYear} ${lunarMonth} ${lunarDay} ${lunarHour}`;
}

function updateLunarDate() {
    const lunarDateElement = document.getElementById('lunar-date');
    lunarDateElement.textContent = getLunarDate();
}

// 觸發彈框輸入三個數字並進行運算
function calculateNumbers() {
    // 彈框讓用戶輸入三個數字
    var num1 = parseFloat(prompt("請輸入第一個數字："));
    if (isNaN(num1)) {
        alert("請輸入有效的數字！");
        return;
    }
    var num2 = parseFloat(prompt("請輸入第二個數字："));
    if (isNaN(num2)) {
        alert("請輸入有效的數字！");
        return;
    }
    var num3 = parseFloat(prompt("請輸入第三個數字："));

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("請輸入有效的數字！");
        return;
    }

    // 進行運算
    const myList=['大安', '留連', '速喜', '赤口', '小吉', '空亡' ];

    num1=(num1-1)%6;
    num2=(num1+num2-1)%6;
    num3=(num2+num3-1)%6;
    const result1= myList[num1];
    const result2= myList[num2];
    const result3= myList[num3];
    console.log(result1,result2,result3);
    const resultsElement = document.getElementById('calc-results');
    resultsElement.textContent = `${result1} ${result2} ${result3}`;
}

// 觸發彈框輸入三個數字並進行運算
function normCalculateNumbers() {
    // 彈框讓用戶輸入三個數字
    var num1 = parseFloat(prompt("請輸入第一個數字："));
    if (isNaN(num1)) {
        alert("請輸入有效的數字！");
        return;
    }
    var num2 = parseFloat(prompt("請輸入第二個數字："));
    if (isNaN(num2)) {
        alert("請輸入有效的數字！");
        return;
    }
    var num3 = parseFloat(prompt("請輸入第三個數字："));

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("請輸入有效的數字！");
        return;
    }

    // 進行運算
    const myList=['大安', '留連', '速喜', '赤口', '小吉', '空亡' , '病符', '桃花', '天德'];

    num1=(num1-1)%9;
    num2=(num1+num2-1)%9;
    num3=(num2+num3-1)%9;
    const result1= myList[num1];
    const result2= myList[num2];
    const result3= myList[num3];
    console.log(result1,result2,result3);
    const resultsElement = document.getElementById('calc-results');
    resultsElement.textContent = `${result1} ${result2} ${result3}`;
}

const explanations = {
    '大安': '長期，緩慢，穩定。木，正東。求安穩，大安最吉。求變化，大安不吉。(三清)',
    '留連': '停止，反復，複雜。木·西南。想挽留，留連是吉。否則都很惡心(文昌)',
    '速喜': '驚喜 快速 突然。火·正南。意想不到的好事(雷祖)',
    '赤口': '爭鬥 兇惡 傷害。金·正西。吵架、打架、鬥爭、訴訟是非，肉體受傷（尤其赤口多現）(將帥)',
    '小吉': '起步 不多 尚可。水·正北 成中有缺。適合起步。(真武)',
    '空亡': '失去 虛伪 空想。土·內 先得再失。尤忌金錢事。可多接觸玄學、哲學、心理學。虛幻之事遇空亡好(玉皇) ',
    '病符': '病態 異常 治療。金·西南 先有病，才需要“治” (后土)',
    '桃花': '欲望 牽絆 異性 。土·東北 人際關係，牽絆此事。 (城隍)',
    '天德': '貴人 上司 高遠。金·西北 求人辦事，靠人成事。 (紫微)'
};
// 顯示每個結果的解釋
function explainResults() {
    const explanationElement = document.getElementById('explanation-results');
    explanationElement.innerHTML = '';  // 清空之前的解釋內容
    if(showExplain==0){
        // 遍歷 myList，顯示對應的解釋
        const myList=['大安', '留連', '速喜', '赤口', '小吉', '空亡' , '病符', '桃花', '天德'];
        myList.forEach(item => {
            const explanation = explanations[item];
            const explanationDiv = document.createElement('div');
            explanationDiv.classList.add('explanation-item');
            explanationDiv.innerHTML = `<strong>${item}</strong>: ${explanation}`;
            explanationElement.appendChild(explanationDiv);
        });
        showExplain=1;
    }
    else{
        showExplain=0;
    }
    
}
var showExplain=0;
window.onload = function() {
    // 初始化顯示農曆日期
    updateLunarDate();
    showExplain=0;

    // 設定按鈕點擊事件，點擊按鈕後更新農曆日期
    const updateButton = document.getElementById('update-button');
    updateButton.addEventListener('click', updateLunarDate);

     // 設定計算按鈕點擊事件
     const calcButton = document.getElementById('calc-button');
     calcButton.addEventListener('click', calculateNumbers);

     // 設定計算按鈕點擊事件
     const normCalcButton = document.getElementById('norm-calc-button');
     normCalcButton.addEventListener('click', normCalculateNumbers);

     const explainButton = document.getElementById('explain-button');
    explainButton.addEventListener('click', explainResults);
};