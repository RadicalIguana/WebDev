/*

    Создания веб-приложения NodeJS 
    Сайт отложенного чтения


Структура веб-приложения Node:
    - package.json - файл со списком зависимостей и командой запуска приложения
    - public/ - папка статических активов(CSS, клиентский код JavaScript)
    - node_modules/ - место для установки зависимостей проекта 
    - app.js или index.js - код подготовки приложения
    - models/ - модели баз данных
    - views/ - шаблоны, используемые для генерирования страниц приложения
    - controllers/ или routes/ - обработчик запросов HTTP
    - middleware/ - промежуточные компоненты
--------------

npm init - создание проекта Node
npm install --save - установка зависимостей
require() - вызов зависимостей

--------------
Простой сервер
Express орентируется на построении модели приложения в контексте запросов и ответов
HTTP и строится на базе встроенного модуля Node http.
Чтобы создать простейшее приложение, следует создать экземпляр приложения 
вызовой express(), добавить обработчик маршрута, а затем связать приложение с портом 
TCP.

------------
Сценарии npm
Сохраняет команду запуска сервера (node index.js) как сценарий npm
"scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
}
node index.js === npm start

Сценарии npm используются для построения пакетов на стороне клиента, 
запуска тестов и генерирования документации.
В них можно разместить все, что угодно; по сути это механизм запуска
мини-сценариев

-------------------

Построение REST-совместимой веб-службы

При проектировании REST-совместимой службы необходимо подумать над тем, 
какие ооперации потребуются, и связать их с маршрутами в Express.

В данном случае (приложение отложенного чтения) необходимо иметь возможность
сохранять статьи, организовывать их выборку для чтения, получать список 
всех статей и удалять те статьи, которые уже не нужны. Эти операции
соответствуют следующим маршрутам: 
 - POST /articles - создание новой статьи
 - GET /articles/:id - получение одной статьи
 - GET /articles - получение всех статей
 - DELETE /articles/:id - удаление статей

Создание REST-совместимых ресурсов в Express.
Реализуем маршруты с испольщзованием массива JS для храниния статей.













*/