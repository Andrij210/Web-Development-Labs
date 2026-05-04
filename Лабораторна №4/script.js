document.addEventListener('DOMContentLoaded', () => {
    // 1. Вибираємо кнопки та КАРТКИ (у вас вони мають клас .card)
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card');

    console.log('Кількість знайдених карток:', cards.length); // Перевірка в консолі

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Зміна активної кнопки
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.getAttribute('data-category');
            console.log('Обрана категорія:', category);

            // 2. Логіка фільтрації
            cards.forEach(card => {
                const cardCategory = card.getAttribute('data-cat');
                
                // Якщо "Всі" або категорія збігається — показуємо
                if (category === 'all' || cardCategory === category) {
                    card.classList.remove('hidden');
                } else {
                    // Інакше додаємо клас .hidden
                    card.classList.add('hidden');
                }
            });
        });
    });
});