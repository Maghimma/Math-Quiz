function send() {
  number_1 = document.getElementById("number_1").innerHTML = number_1 + " : ";
  number_2 = document.getElementById("number_2").innerHTML = number_2 + " : ";
  actual_answer = parseInt(number_1) * parseInt(number_2);
  
  question_number = "<h4>" + number_1 + "x" + number_2 +"</h4>";
  input_box = "<br>Answer : <input type='number' id='input_check_box'>";
  check_button = "<br> <br><button onclick=check()>Check</button>";
  row = question_number + input_box + check_button;
  document.getElementById("output").innerHTML = row;
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
}
