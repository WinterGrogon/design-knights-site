const slidesImages = document.querySelectorAll('.projects__slide img');
const slidesRadio = document.querySelectorAll('.projects__switchers input');


// Функция обновления кликабельности изображения
// срабатывает только на активных слайдах
function updateActiveSlide() {
    slidesImages.forEach(el => {
        el.style.pointerEvents = 'none';
    });

    const checked = document.querySelector('.projects__switchers input:checked');

    if (checked) {
        const index = Array.from(slidesRadio).indexOf(checked);
        const activeImg = slidesImages[index];
        if (activeImg) activeImg.style.pointerEvents = 'auto';
    }
}


// Обновляем при смене слайда
slidesRadio.forEach(radio => {
    radio.addEventListener('change', updateActiveSlide);
});


// Вызываем инициализации
updateActiveSlide();


// Вешаем событие клика на изображения внутри слайдера
slidesImages.forEach((img, i) => {
    img.addEventListener('click', (e) => {
        e.stopPropagation();

        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal__content">
                <img src="${img.src}" alt="${img.alt}">
            </div>
        `;
        document.body.prepend(modal);

        // Добавляем класс после создания элемента
        requestAnimationFrame(() => {
            modal.classList.add('active');
        });
        
        // Закрытие
        modal.addEventListener('click', () => {
            modal.classList.remove('active');
            modal.style.zIndex = 1000;
            setTimeout(() => {
                modal.remove();
            }, 500);
        });
    });
});