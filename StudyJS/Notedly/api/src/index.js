/* jshint esversion:6 */

/* */



// index.js
// This is the main entry point of our application

require('dotenv').config();
const db = require('./db');
// Сохраняем значение DB_HOST в виде переменной
const DB_HOST = process.env.DB_HOST;
const models = require('./models');

const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const app = express();
// Запускаем сервер на хосте, указанном в .env, или на порте 4000
const port = process.env.PORT || 4000;

// Массив данных, предоставляемых API.
let notes = [
    { id: '1', content: 'This is a note', author: 'Adam Scott'},
    { id: '2', content: 'This is another note', author: 'Harlow Everly'},
    { id: '3', content: 'Oh hey look, another note!', author: 'Riley Harrison' }
];

// Построение схемы с использованием языка схем GraphQL
// Схема, описывающая Query(запрос) под названием hello
const typeDefs = require('./schema');

// Предоставляем функцию разрешения для полей схемы
// Распознаватель, возвращаяющий значение пользователю
const resolvers = require('./resolvers');

// Подключаем БД
db.connect(DB_HOST);

// Настройка Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => {
        // Добавление моделей БД в context
        return { models };
    }
});

// Применяем промежуточное ПО Apollo GraphQL и указываем путь к /api
server.applyMiddleware({ app, path: '/api' });

app.listen({port},() => 
    console.log(
        `GraphQL Server running at http://localhost:${port}${server.graphqlPath}`
    )
);








