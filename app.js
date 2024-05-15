// const URl = "https://cat-fact.herokuapp.com/facts";
// let factpara = document.querySelector("#fact");
// let btn = document.querySelector("#btn");

// const getFacts= async ()=>{
//     console.log("getting data......");
//     let response = await fetch(URl);
//     console.log(response); // JSON Format
//     let data = await response.json();
//     factpara.innerText= data[2].text;
// };
// function getFacts(){
//     fetch(URl).then((respose)=>{
//         return respose.json()
//      }).then((data)=>{
//         console.log(data);
//         factpara.innerText= data[1].text;
//      })

// }
// btn.addEventListener("click",getFacts);

let Base_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";  //this Api LInk is not working 
let dropdowns = document.querySelectorAll(".dropdowns select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;

    if (select.name === from && currCode === USD) {
      newOption.selected = "selected";
    } else if (select.name === to && currCode === INR) {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (event) => {
    updateFlag(event.target);
  });
}

const updateFlag = (element) => {
  console.log(element);
};

btn.addEventListener("click", async (event) => {
  event.preventDefault();
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  // console.log(fromCurr,toCurr);
  const URl = `${Base_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response = await fetch(URl);
  console.log(response);
  let data = await response.json();
  let rate = data[toCurr.value.toLowerCase()];
  //  console.log(data);
  let finalAmount = amtVal * rate;
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
});
