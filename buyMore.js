window.onload = function () {
  generateTable();
  writeMarketStatus();
}

function generateTable() {
  let HTML = ``
  for (let i = 0; i < companies.length; i++) {
    let company = companies[i];
    HTML +=
      `<tr>
    <td>${company.ticker}</td>
    <td>$${company.price}</td>
    <td>${company.amount}</td>
    <td>$${company.amount * company.price}</td>
    <td><button id="bm" onclick="buyStock(${i})">Buy More</button></td>
    <td><button id="dlt" value="Delete" onclick="deleteRow(${i})">Remove</button></td>
  </tr>`
  }
  document.getElementById('TB').innerHTML = HTML;
}

generateTable();

function buyStock(index) {
  let amount = Number(
    prompt(`How many ${companies[index].ticker} stocks Whuld you like to buy?`)
  )
  if (isNaN(amount)) {
    alert(`Please enter a right input!`)
  }
  else {
    companies[index].amount += amount;
  }
  generateTable();
}

function showAddCompanyForm() {
  document.getElementById('addCompanyForm').style.display = 'block';
}

function submitForm() {
  let formElement = document.getElementById('addCompanyForm');
  let fd = new FormData(formElement);
  let company = {};
  company.ticker = fd.get('ticker');
  company.price = fd.get('price');
  company.amount = + fd.get('amount');
  companies.push(company);
  generateTable();
  formElement.reset();
}


function deleteRow(index) {
  companies.splice(index, 1);
  generateTable();
}

function upperCase() {
  const x = document.getElementById("UC");
  x.value = x.value.toUpperCase();
}

function isMarketOpen() {
  let now = new Date();
  let hour = now.getHours();
  let min = now.getMinutes();
  hour += min / 60;
  return hour >= 9.5 && hour <= 16;
}

function writeMarketStatus() {
  let marketStatus = isMarketOpen() ? 'Markets Are Now Open' : 'Markets Are Closed';
  document.getElementById('market-status').innerHTML = marketStatus;
  changeBodyColor();
  changeFontColor();
}

setInterval(function () {
  let now = new Date().toLocaleString();
  document.getElementById('date').innerHTML = now;
}, 1000);

function changeBodyColor() {
  return isMarketOpen() ? document.body.style.backgroundColor = "wheat" : document.body.style.backgroundColor = "#a93308";
}

function changeFontColor() {
  return isMarketOpen() ? document.getElementById('wlcm', 'market-status').style.color = "#934df0" : document.getElementById('wlcm', 'market-status').style.color = "#7ec6ed";
}

function relativeTime() {
  const rtf1 = new Intl.RelativeTimeFormat('en', { style: 'narrow' });
  const relativeTime = rtf1.format(-5, `hours`);
  console.log(relativeTime);
}

relativeTime();