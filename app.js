const express = require('express');
const app = express();
const port = 3000;

// Middleware для парсинга данных из формы
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Отправляем HTML-страницу с формой
});

app.post('/process', (req, res) => {
    const nume = req.body.nume;
    const prenume = req.body.prenume;
    const data = req.body.data;
    const alege = req.body.alege;

    // Выполните необходимую обработку данных здесь

    // Отправьте ответ пользователю
    res.send(`Регистрация успешно завершена. Добро пожаловать, ${nume} ${prenume}!`);
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
