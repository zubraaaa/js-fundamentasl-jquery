// Знайдіть теги <div>, які стоять безпосередньо після <h3> 
// і перемістіть кожен <div>-елемент так, щоб він став безпосередньо над <h3>.

// Завдання виділене вставкою Task3
// Знаходимо всі <h3> теги
$('h3').each(function() {
    var nextElement = $(this).next();
    if (nextElement.is('div')) {
        $(this).before(nextElement);
    }
});
