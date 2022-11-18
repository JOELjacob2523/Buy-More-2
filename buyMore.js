function generateTable(){
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
    <td><button id="dlt" value="Delete" onclick="deleteRow(this)">Remove</button></td>
  </tr>`
  }
  document.getElementById('TB').innerHTML = HTML;
}

generateTable();

function buyStock(index){
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

function showAddCompanyForm(){
  document.getElementById('addCompanyForm').style.display = 'block';
}

function submitForm(){
  let formElement = document.getElementById('addCompanyForm');
  let fd = new FormData(formElement);
  let company = {};
  company.ticker = fd.get('ticker');
  company.price = fd.get('price');
  company.amount =+ fd.get('amount');
  companies.push(company);
  generateTable();
  formElement.reset();
}


function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("TR").deleteRow(i);
}