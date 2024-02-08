let get_week_number = Number(prompt("Введите порядковый номер дня недели"))

switch(get_week_number) {
    case 1:
        console.log("Понедельник");
        break;
    case 2:
        console.log("Вторник")
        console.log("План на день: Поправить верстку в проекте")
        break;
    case 3:
        console.log("Среда")
        console.log("План на день: Написать тесты")
        break;
    case 4:
        console.log("Четверг")
        console.log("План на день: Отправить код на ревью")
        break;
    case 5:
        console.log("Пятница")
        console.log("План на день: Исправить баги")
        break;
    case 6:
        console.log("Суббота")
        console.log("План на день: Отдых")
        break;
    case 7:
        console.log("Воскресенье")
        console.log("План на день: Созвон с командой")
        break;
    default:
        console.log("Введите корректное значение!")
        break;
}