// Получаем кнопку
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Функция для показа/скрытия кнопки
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block"; // Показываем кнопку
    } else {
        scrollToTopBtn.style.display = "none"; // Скрываем кнопку
    }
};

// Функция для прокрутки наверх
scrollToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Плавная прокрутка
    });
};
