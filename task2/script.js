const  conso = document.querySelector('#consoleLog');
conso.addEventListener('click', function() {
    // тело обработчика
    console.log('Метод для выполнения в веб консоль');
    // конец тела обработчика
})

const  aler = document.querySelector('#alert');
aler.addEventListener('click', function() {
    // тело обработчика
    alert('Метод для выполнения в модальное окно');
    // конец тела обработчика
})

const  promp = document.querySelector('#prompt');
promp.addEventListener('click', function() {
    // тело обработчика
    prompt('Метод для выполнения в модальное окно с вводом ответа');
    // конец тела обработчика
})