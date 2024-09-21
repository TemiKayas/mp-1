function displayResult(final) {
  let output = document.getElementById("output");
  if (final < 0) {
    output.innerHTML = `<p style="color:red;">${final}</p>`;
  } else {
    output.innerHTML = `<p>${final}</p>`;
  }
}

function addition(){
  let num1 = document.getElementById("input1").value;
  num1 = Number(num1);
  let num2 = document.getElementById("input2").value;
  num2 = Number(num2);

  let final = num1 + num2;
  displayResult(final);
}

function minus(){
  let num1 = document.getElementById("input1").value;
  num1 = Number(num1);
  let num2 = document.getElementById("input2").value;
  num2 = Number(num2);

  let final = num1 - num2;
  displayResult(final);
}

function multiplication(){
  let num1 = document.getElementById("input1").value;
  num1 = Number(num1);
  let num2 = document.getElementById("input2").value;
  num2 = Number(num2);

  let final = num1 * num2;
  displayResult(final);
}

function division(){
  let num1 = document.getElementById("input1").value;
  num1 = Number(num1);
  let num2 = document.getElementById("input2").value;
  num2 = Number(num2);

  let final = num1 / num2;
  displayResult(final);
}

function power(){
  let num1 = document.getElementById("input1").value;
  num1 = Number(num1);
  let num2 = document.getElementById("input2").value;
  num2 = Number(num2);

  let final = 1;
  for (let i = 0; i < num2; i++){
    final = num1 * final;
  }
  displayResult(final);
}

function clr(){
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";

  output.innerHTML = `<p></p>`;
}
