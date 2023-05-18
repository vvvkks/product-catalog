// Кнопка возврата

document.addEventListener('DOMContentLoaded', function() {
  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      document.querySelector(".back-to-top").style.display = "block";
    } else {
      document.querySelector(".back-to-top").style.display = "none";
    }
  }

  document.querySelector('.back-to-top').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('sticky', window.scrollY > 0);
});

// Форматирование даты
function getDayInfo(dateStr) {
  const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

  const dateParts = dateStr.split('.');
  const day = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10) - 1;
  const year = parseInt(dateParts[2], 10);

  const date = new Date(year, month, day);
  const dayOfWeek = daysOfWeek[date.getDay()];
  const weekNumber = Math.ceil((day - date.getDay()) / 7);
  const monthName = months[month];

  return `${dayOfWeek}, ${weekNumber} неделя ${monthName} ${year} года`;
}

const dateAddedElements = document.querySelectorAll('.date-added');

dateAddedElements.forEach(element => {
  const dateStr = element.textContent;
  const formattedDate = getDayInfo(dateStr);
  element.textContent = `Добавлено: ${formattedDate}`;
});


// Форма покупки
function showBuyForm(productName) {
  document.getElementById("buyFormOverlay").style.display = "block";
  document.getElementById("productName").textContent = productName;
  document.body.style.overflow = "hidden";
}

function hideBuyForm() {

  document.getElementById("buyFormOverlay").style.display = "none";

  document.body.style.overflow = "auto";
}

document.getElementById("buyForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let quantity = document.getElementById("quantity").value;
  let color = document.querySelector('input[name="color"]:checked').value;
  let comment = document.getElementById("comment").value;

  alert("Спасибо за покупку!\nКоличество: " + quantity + "\nЦвет: " + color + "\nКомментарий: " + comment);
  function resetBuyForm() {
    document.getElementById("buyForm").reset();
  }
  resetBuyForm();
  hideBuyForm();
});

// Смена темы

document.querySelector('.theme-switcher').addEventListener('click', (event)=> {
  event.preventDefault();
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  }
  else {
    localStorage.setItem('theme', 'dark')
  }
  addDarkClassToHTML();
});
function addDarkClassToHTML() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('html').classList.add('dark');
      document.querySelector('.theme-switcher span').textContent = 'dark_mode';
    }
    else {
      document.querySelector('html').classList.remove('dark');
      document.querySelector('.theme-switcher span').textContent = 'wb_sunny';
    }
  } catch (err) {}
}

addDarkClassToHTML();

// Переход по категориям в футоре

const categoryLinks = document.querySelectorAll("#categoryMenu a");
categoryLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();

    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});











