# SusuScheduleParser

Парсер расписания занятий с сайта ЮУрГУ ([online.susu.ru](https://online.susu.ru/schedule)) с последующей синхронизацией в Google Calendar.

## Как это работает

1. Логин в личный кабинет ЮУрГУ (`/microgateway/api/auth/login`) и получение JWT.
2. Запрос расписания по этому токену (`/microgateway/api/Schedule/SearchScheduleById`).
3. Фильтрация расписания: остаток текущей недели + вся следующая неделя.
4. *(в разработке)* Перенос отфильтрованных занятий в Google Calendar.

## Стек

- Node.js (ESM)
- встроенный `fetch`
- `dotenv`

## Установка

1. `npm install`
2. Скопировать `.env.example` в `.env` и заполнить `LOGIN`/`PASSWORD` от личного кабинета ЮУрГУ.
3. `node index.js`

## Статус

- [x] Логин и получение JWT
- [x] Запрос расписания
- [x] Фильтрация по датам (текущая + следующая неделя)
- [ ] Синхронизация с Google Calendar
