let firstNumberEl = document.getElementById("firstNumber");
let secondNumberEl = document.getElementById("secondNumber");
let totalNumberEl = document.getElementById("totalNumber");
let alertMessageEl = document.getElementById("alertMessage");

let successMessage = "Congratulation! You got it right";
let tryAgainMessage = "Please Try Again!";

function resetNumber() {
  let randomNumber1 = Math.ceil(Math.random() * 100);
  let randomNumber2 = Math.ceil(Math.random() * 100);

  firstNumberEl.textContent = randomNumber1;
  secondNumberEl.textContent = randomNumber2;
  alertMessageEl.textContent = "";
  totalNumberEl.value = "";
}
resetNumber();

function checkNumber(){
  let firstRandomInteger = parseInt(firstNumberEl.textContent);
  let secondRandomInteger = parseInt(secondNumberEl.textContent);
  let userTotalInput = parseInt(totalNumberEl.value)

  let someRandomNumber = firstRandomInteger + secondRandomInteger;
  
  if(someRandomNumber === userTotalInput){
    alertMessageEl.textContent = successMessage;
    alertMessageEl.style.backgroundColor = "#028a0f"
  }else{
    alertMessageEl.textContent = tryAgainMessage;
    alertMessageEl.style.backgroundColor = "#1e217c"
  }
}
checkNumber();