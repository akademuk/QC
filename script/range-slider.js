const valueMoney = document.getElementById("valueMoney");
const innerMoney = document.getElementById("innerMoney");
const valueDate = document.getElementById("valueDate");
const innerDate = document.getElementById("innerDate");
let sum = document.getElementById("resultPercent");
let resultSum = document.getElementById("resultSum");
const valuePercent = 0.0001;

function rangeMoney(){
    rangePercent = (valueMoney.value / valueMoney.max)*100;
    valueMoney.style.background = `linear-gradient(to right, #D9552A ${rangePercent}%, #DDDDDD ${rangePercent}%)`;
    innerMoney.textContent = valueMoney.value + " грн.";

    rangeDate = (valueDate.value / valueDate.max)*100;
    valueDate.style.background = `linear-gradient(to right, #D9552A ${rangeDate}%, #DDDDDD ${rangeDate}%)`;
    innerDate.textContent = valueDate.value + " днів";

    letDate = (Number(valueDate.value) * Number(valuePercent));
    valPer = (Number(valueMoney.value) * Number(letDate));
    let summ = (Number(valueMoney.value) + Number(valPer))
    let res = (summ - Number(valueMoney.value))
    sum.textContent = res.toFixed(2) + " грн.";

    resultSum.textContent = (Number(valueMoney.value) + Number(res)).toFixed(2) + " грн.";

    let sumDate = document.getElementById("resultDate");
    var days = valueDate.value;
    
    var newDate = new Date(Date.now()+days*24*60*60*1000)
    sumDate.textContent = newDate.toLocaleDateString('de-DE');
}
rangeMoney();
