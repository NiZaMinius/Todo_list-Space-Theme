// Звёзды
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let stars = [];

for (let i = 0; i < 100; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2,
    speed: Math.random() * 0.5 + 0.1,
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  stars.forEach((star) => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  });
}

function moveStars() {
  stars.forEach((star) => {
    star.y += star.speed;
    if (star.y > canvas.height) star.y = 0;
  });
}

function animateStars() {
  drawStars();
  moveStars();
  requestAnimationFrame(animateStars);
}

animateStars();

// Переключение фона

document.getElementById("toggleAnimation").addEventListener("click", () => {
  planetContainer.style.display =
    planetContainer.style.display === "block" ? "none" : "block";
});

// Добавление и удаление задач
document.getElementById("addTaskBtn").addEventListener("click", addTask);
document.getElementById("taskInput").addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskInput = document.getElementById("taskInput");
  if (taskInput.value.trim() === "") return;

  const li = document.createElement("li");
  li.innerHTML = `${taskInput.value} <button class="delete-btn">x</button>`;

  li.querySelector(".delete-btn").addEventListener("click", () => li.remove());

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}

// Курсоры
const cursor = document.querySelector(".cursor");
const cursorMenu = document.getElementById("cursorMenu");
const cursorMenuBtn = document.getElementById("cursorMenuBtn");
const effect1Btn = document.getElementById("effect1");
const effect2Btn = document.getElementById("effect2");
const effect3Btn = document.getElementById("effect3");
const overlay = document.getElementById("overlay");

let currentEffect = 1;

let mouseX = 0,
  mouseY = 0;
let cursorX = 0,
  cursorY = 0;

function moveCursor() {
  const distX = mouseX - cursorX;
  const distY = mouseY - cursorY;

  cursorX += distX * 0.1;
  cursorY += distY * 0.1;

  cursor.style.left = `${cursorX - cursor.offsetWidth / 2}px`;
  cursor.style.top = `${cursorY - cursor.offsetHeight / 2}px`;

  requestAnimationFrame(moveCursor);
}

document.addEventListener("mousemove", (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

moveCursor();

cursorMenuBtn.addEventListener("click", () => {
  cursorMenuBtn.classList.toggle("active");
  cursorMenu.classList.toggle("active");
  overlay.classList.toggle("active");
});

effect1Btn.addEventListener("click", () => {
  currentEffect = 1;
  updateCursorEffect();
});

effect2Btn.addEventListener("click", () => {
  currentEffect = 2;
  updateCursorEffect();
});

effect3Btn.addEventListener("click", () => {
  currentEffect = 3;
  updateCursorEffect();
});

function updateCursorEffect() {
  cursor.innerHTML = ""; // Очищаем содержимое курсора

  switch (currentEffect) {
    case 1:
      cursor.style.background =
        "radial-gradient(circle, rgba(255, 255, 255, 0.8), rgba(0, 255, 255, 0))";
      cursor.style.boxShadow =
        "0 0 15px 5px rgba(0, 255, 255, 0.7), 0 0 25px 10px rgba(0, 0, 255, 0.5), 0 0 35px 15px rgba(255, 0, 255, 0.5)";
      break;
    case 2:
      cursor.style.background = "transparent";
      cursor.style.boxShadow = "none";

      // Добавляем планету и спутник для эффекта 2
      const planet = document.createElement("div");
      planet.classList.add("planet");
      cursor.appendChild(planet);

      const satellite = document.createElement("div");
      satellite.classList.add("satellite");
      planet.appendChild(satellite);
      break;
    case 3:
      cursor.style.background = "transparent";
      cursor.style.boxShadow = "none";

      // Добавляем кольцо для эффекта 3
      const ring = document.createElement("div");
      ring.classList.add("cursor-ring");
      cursor.appendChild(ring);
      break;
  }
}

for (let i = 0; i < 100; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2,
    speed: Math.random() * 0.5 + 0.1,
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  stars.forEach((star) => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  });
}

function moveStars() {
  stars.forEach((star) => {
    star.y += star.speed;
    if (star.y > canvas.height) star.y = 0;
  });
}

function animateStars() {
  drawStars();
  moveStars();
  requestAnimationFrame(animateStars);
}

animateStars();

// Переключение фона
const planetContainer = document.querySelector(".planet-container");
const background = document.querySelector(".background");
const starsLayer = document.getElementById("stars");

// Флаги для отслеживания состояния фона
let isPlanetBackground = true;

// Функция для плавного изменения фона
function changeBackground() {
  if (isPlanetBackground) {
    // Переход на фон с планетой
    background.style.transition = "background-color 1s ease, filter 1s ease";
    background.style.backgroundColor = "#1a1a1a"; // Темный фон для планеты
    starsLayer.style.opacity = "0"; // Звезды исчезают
    planetContainer.style.display = "block"; // Показываем планету
  } else {
    // Переход на фон с звездами
    background.style.transition = "background-color 1s ease, filter 1s ease";
    background.style.backgroundColor = "#0d0d1a"; // Темный фон для звезд
    starsLayer.style.opacity = "1"; // Звезды появляются
    planetContainer.style.display = "none"; // Скрываем планету
  }

  // Переключаем состояние
  isPlanetBackground = !isPlanetBackground;
}

document.getElementById("toggleAnimation").addEventListener("click", () => {
  changeBackground();
});

// Смена Языка
const langData = {
  ru: {
    headerText: "Мой Todo-лист",
    placeholder: "Добавить задачу...",
    addButtonText: "+",
    changeBackgroundText: "🌌 Сменить фон",
    cursorEffectsText: "⚙️ Эффекты курсора",
    HeaderOfMenuEffect: "Выберите эффект курсора",
    effect1: "Эффект 1 (Светящийся курсор)",
    effect2: "Эффект 2 (Планета с орбитой)",
    effect3: "Эффект 3 (Космическое кольцо)",
  },
  en: {
    headerText: "My Todo List",
    placeholder: "Add a task...",
    addButtonText: "+",
    changeBackgroundText: "🌌 Change Background",
    cursorEffectsText: "⚙️ Cursor Effects",
    HeaderOfMenuEffect: "Select cursor effect",
    effect1: "Effect 1 (Glowing Cursor)",
    effect2: "Effect 2 (Planet with Orbit)",
    effect3: "Effect 3 (Cosmic Ring)",
  },
};

let currentLang = "ru"; // Начальный язык (русский)

// Функция для смены языка
function changeLanguage(lang) {
  currentLang = lang;
  document.getElementById("header_text").innerText = langData[lang].headerText;
  document.getElementById("taskInput").placeholder = langData[lang].placeholder;
  document.getElementById("addTaskBtn").innerText =
    langData[lang].addButtonText;
  document.getElementById("toggleAnimation").innerText =
    langData[lang].changeBackgroundText;
  document.getElementById("cursorMenuBtn").innerText =
    langData[lang].cursorEffectsText;
  document.getElementById("HeaderOfMenuEffect").innerText =
    langData[lang].HeaderOfMenuEffect;
  document.getElementById("effect1").innerText = langData[lang].effect1;
  document.getElementById("effect2").innerText = langData[lang].effect2;
  document.getElementById("effect3").innerText = langData[lang].effect3;

  // Меняем флаг на кнопке
  const lngIcon = document.getElementById("lng-icon");
  if (lang === "ru") {
    lngIcon.innerText = "RU"; // Русский флаг
  } else {
    lngIcon.innerText = "US"; // Американский флаг
  }
}

// Слушатель на кнопку смены языка
document.getElementById("lng-switcher").addEventListener("click", () => {
  if (currentLang === "ru") {
    changeLanguage("en");
  } else {
    changeLanguage("ru");
  }
});

// Музыка на заднем плане
const audio = document.getElementById("backgroundMusic");
const tracks = [
  "./assets/Sound/ambient-soundscapes-001-space-atmosphere.mp3",
  "./assets/Sound/space-sound.mp3",
]; // Укажи правильные пути
let currentTrack = 0;

function playMusic() {
  audio.volume = 0; // Начинаем с нуля
  audio.src = tracks[currentTrack];
  audio
    .play()
    .then(() => {
      // Плавное увеличение громкости
      let volume = 0;
      const fadeIn = setInterval(() => {
        if (volume < 1) {
          volume += 0.05;
          audio.volume = volume;
        } else {
          clearInterval(fadeIn);
        }
      }, 200);
    })
    .catch((err) => {
      console.error("Не удалось воспроизвести музыку:", err);
    });
}

function switchTrack() {
  // Плавное уменьшение громкости перед сменой трека
  let volume = 1;
  const fadeOut = setInterval(() => {
    if (volume > 0) {
      volume -= 0.09;
      audio.volume = volume;
    } else {
      clearInterval(fadeOut);
      currentTrack = (currentTrack + 1) % tracks.length; // Переключаемся на следующий трек
      playMusic();
    }
  }, 200);
}

// Логика загрузки сайта
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const siteContent = document.getElementById("site-content");

  // Плавное исчезновение загрузки и появление сайта
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
      siteContent.style.opacity = "1";
    }, 1000); // Ждём, пока исчезнет загрузка
  }, 3000); // Время загрузки

  // Изначально устанавливаем mute
  audio.muted = true; // Музыка будет молчать
  audio.src = tracks[currentTrack];

  // Добавим обработчик клика для запуска музыки
  document.body.addEventListener("click", () => {
    if (!audio.paused) return; // Если музыка уже играет, ничего не делать

    // Запускаем музыку и плавно увеличиваем громкость
    audio
      .play()
      .then(() => {
        // Снимаем mute через небольшую задержку
        setTimeout(() => {
          audio.muted = false; // Снимаем mute
          let volume = 0;
          const fadeIn = setInterval(() => {
            if (volume < 1) {
              volume += 0.05;
              audio.volume = volume;
            } else {
              clearInterval(fadeIn);
            }
          }, 200);
        }, 1000); // Начинаем увеличение громкости через 1 секунду
      })
      .catch((err) => {
        console.error("Ошибка воспроизведения:", err);
      });
  });
});

// При смене фона — смена трека
document
  .getElementById("toggleAnimation")
  .addEventListener("click", switchTrack);
