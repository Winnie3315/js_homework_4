let num = +prompt("Назовите число от 1 до 30");

if (num >= 1 && num <= 30) {
  if (num >= 1 && num <= 10) {
    alert('1-я декада');
  }    else if (num >= 11 && num <= 20) {
    alert('2-я декада');
  }    else if (num >= 21 && num <= 30) {
    alert('3-я декада');
  }
  
  let season = +prompt('Назовите номер месяца');

   if (season === 1  || season === 2 || season === 12) {
    alert("Зима");
  }    else if (season === 3 || season === 4 || season === 5) {
    alert("Весна");
  }    else if (season === 6 || season === 7 || season === 8) {
    alert('Лето');
  }    else if (season === 9 || season === 10 || season === 11) {
    alert('Осень');
  } else {
    alert("В году 12 месяцев");
  }
} else {
  alert('Я сказал от 1 до 30');
}