// Приложение для отложенного чтения
// Создание простого сервера

const express = require('express');
const app = express();
const articles = [{ title: 'Example' }];

app.set('port', process.env.PORT || 3000);

app.get('/articles', (req, res, next) => {  // Получает все статьи
    res.send(articles);
});

app.post('/articles', (req, res, next) => {  // Создает статью
    res.send('OK');
})

app.get('/articles/:id', (req, res, next) => {  // Получает одну статью
    const id = req.params.id;
    console.log('Fetching:', id);
    res.send(articles[id]);
} )

app.delete('/articles/:id', (req, res, next) => {  // Удаляет статью
    const id = req.params.id;
    console.log('Deleting:', id);
    delete articles[id];
    res.send({message: 'Deleted'});
} )

app.listen(app.get('port'), () => {
    console.log('App started on port', app.get('port'));
});

module.exports = app;
