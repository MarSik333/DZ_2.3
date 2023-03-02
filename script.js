function calculateAge() {
  var ageInput = document.getElementById("ageInput").value;
  var age = parseInt(ageInput);
  if (isNaN(age)) {
    document.getElementById("result1").innerHTML = "Будь ласка, введіть числове значення для віку.";
  }
   else if (age < 0) {
    document.getElementById("result1").innerHTML = "Вік не може бути від'ємним.";
  } 
  else if (age < 12) {
    document.getElementById("result1").innerHTML = "Ви є дитиною.";
  } 
  else if (age < 18) {
    document.getElementById("result1").innerHTML = "Ви є підлітком.";
  } 
  else if (age < 60) {
    document.getElementById("result1").innerHTML = "Ви є дорослим.";
  } 
  else if (age > 110) {
    document.getElementById("result1").innerHTML = "Ви привид?";
  } 
 
  else {
    document.getElementById("result1").innerHTML = "Ви є пенсіонером.";
  }
  
}

function calculateSymbol() {
  var numberInput = document.getElementById("numberInput").value;
  var number = parseInt(numberInput);
  var symbols = [")", "!", "@", "#", "$", "%", "^", "&", "*", "("];

  if (isNaN(number)) {
    document.getElementById("result2").innerHTML = "Будь ласка, введіть числове значення для числа.";
  } else if (number < 0 || number > 9) {
    document.getElementById("result2").innerHTML = "Введіть число від 0 до 9.";
  } else {
    var symbol = symbols[number];
    document.getElementById("result2").innerHTML = "Спецсимвол для числа " + number + " - " + symbol;
  }
}



function calculateSum() {
  var startInput = document.getElementById("startInput").value;
  var endInput = document.getElementById("endInput").value;
  var start = parseInt(startInput);
  var end = parseInt(endInput);
  var sum = 0;

  if (isNaN(start) || isNaN(end)) {
    document.getElementById("result3").innerHTML = "Будь ласка, введіть числові значення для початкового та кінцевого чисел.";
  } else if (start > end) {
    document.getElementById("result3").innerHTML = "Початкове число має бути менше за кінцеве число.";
  } else {
    for (var i = start; i <= end; i++) {
      sum += i;
    }
    document.getElementById("result3").innerHTML = "Сума чисел в діапазоні від " + start + " до " + end + " дорівнює " + sum;
  }
}

function findGCD() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var gcd = 1;

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result4").innerHTML = "Будь ласка, введіть числові значення для двох чисел.";
  } else {
    for (var i = 1; i <= num1 && i <= num2; i++) {
      if (num1 % i == 0 && num2 % i == 0) {
        gcd = i;
      }
    }
    document.getElementById("result4").innerHTML = "Найбільший спільний дільник чисел " + num1 + " і " + num2 + " дорівнює " + gcd;
  }
}

function findDivisors() {
  var number = parseInt(document.getElementById("number").value);
  var divisors = [];

  if (isNaN(number)) {
    document.getElementById("result5").innerHTML = "Будь ласка, введіть числове значення.";
  } else {
    for (var i = 1; i <= number; i++) {
      if (number % i == 0) {
        divisors.push(i);
      }
    }
    document.getElementById("result5").innerHTML = "Всі дільники числа " + number + ": " + divisors.join(", ");
  }
}



function checkPalindrome() {
  var number = document.getElementById("number5").value;

  if (number.length != 5) {
    document.getElementById("result6").innerHTML = "Будь ласка, введіть п'ятирозрядне число.";
  } else {
    if (number == number.split("").reverse().join("")) {
      document.getElementById("result6").innerHTML = "Число " + number + " є паліндромом.";
    } else {
      document.getElementById("result6").innerHTML = "Число " + number + " не є паліндромом.";
    }
  }
}




function calculateDiscount() {
  const purchaseAmount = document.getElementById("purchaseAmount").value;
  let discount = 0;

  if (purchaseAmount >= 200 && purchaseAmount < 300) {
    discount = 0.03;
  } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
    discount = 0.05;
  } else if (purchaseAmount >= 500) {
    discount = 0.07;
  }

  const discountAmount = purchaseAmount * discount;
  const totalAmount = purchaseAmount - discountAmount;

  const resultElement = document.getElementById("result7");
  resultElement.innerHTML = `Сума до оплати зі знижкою: ${totalAmount} грн. (знижка ${discount * 100}%)`;
}



function calculateStats() {
  const numbersString = document.getElementById("numbers").value;
  const numbers = numbersString.split(",").map(Number);
  
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number > 0) {
      positiveCount++;
    } else if (number < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
    if (number % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  const resultElement = document.getElementById("result8");
  resultElement.innerHTML = `Кількість додатніх чисел: ${positiveCount}<br>
                              Кількість від’ємних чисел: ${negativeCount}<br>
                              Кількість нулів: ${zeroCount}<br>
                              Кількість парних чисел: ${evenCount}<br>
                              Кількість непарних чисел: ${oddCount}`;
}


let day = 1; // починаємо з понеділка

while (true) {
  let confirmResult = confirm(`День тижня: ${getDayOfWeek(day)}. Хочеш побачити наступний день?`);

  if (confirmResult) {
    day = (day % 7) + 1; // збільшуємо день на 1, якщо не вийшли за межі тижня
  } else {
    break; // виходимо з циклу, якщо користувач натиснув Cancel
  }
}

function getDayOfWeek(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Понеділок";
    case 2:
      return "Вівторок";
    case 3:
      return "Середа";
    case 4:
      return "Четвер";
    case 5:
      return "П'ятниця";
    case 6:
      return "Субота";
    case 7:
      return "Неділя";
  }
}



function guessNumber() {
  let min = 0;
  let max = 100;
  let guess = Math.floor((min + max) / 2);
  let answer = '';
  let isGuessed = false;
  while (!isGuessed) {
    answer = prompt('число  > ' + guess + ', < ' + guess + ' або = ' + guess + '?');
    if (answer === '>') {
      min = guess + 1;
    } else if (answer === '<') {
      max = guess - 1;
    } else if (answer === '=') {
      alert('Ти загадав ' + guess);
      isGuessed = true;
    }   
    else {
      alert('Invalid input!');
    }
    
    guess = Math.floor((min + max) / 2);
  }
}