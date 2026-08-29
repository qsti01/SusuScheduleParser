<div align="center">

# 📅 SusuScheduleParser

**Парсер расписания ЮУрГУ → автоматическая синхронизация с Google Calendar**

![Node.js](https://img.shields.io/badge/Node.js-ESM-339933?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![dotenv](https://img.shields.io/badge/dotenv-config-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black)
![Google Calendar](https://img.shields.io/badge/Google%20Calendar-planned-4285F4?style=for-the-badge&logo=googlecalendar&logoColor=white)
![Status](https://img.shields.io/badge/status-in%20development-orange?style=for-the-badge)

</div>

---

## 🚀 О проекте

[online.susu.ru](https://online.susu.ru/schedule) — личный кабинет ЮУрГУ, из которого этот скрипт достаёт расписание занятий и (в перспективе) сам раскладывает его по Google Calendar, чтобы не проверять сайт руками каждую неделю.

## ⚙️ Как это работает

| Шаг | Что происходит |
|:---:|---|
| 1️⃣ | Логин в личный кабинет (`POST /microgateway/api/auth/login`) → получаем JWT |
| 2️⃣ | Запрос расписания по токену (`POST /microgateway/api/Schedule/SearchScheduleById`) |
| 3️⃣ | Фильтрация: оставляем только остаток текущей недели + всю следующую |
| 4️⃣ | 🚧 Заливка отфильтрованных пар в Google Calendar |

## 🛠 Стек

- **Node.js** (ESM, `"type": "module"`)
- встроенный **`fetch`** — без axios/got
- **dotenv** — креды не в коде

## 📦 Установка

```bash
npm install
cp .env.example .env   # и вписать туда LOGIN / PASSWORD от личного кабинета ЮУрГУ
node index.js
```

## 🗺 Roadmap

- [x] Логин и получение JWT
- [x] Запрос расписания
- [x] Фильтрация по датам (текущая + следующая неделя)
- [ ] Синхронизация с Google Calendar API
- [ ] Автозапуск по расписанию (cron)

---

<div align="center">

Учебный pet-проект — не аффилирован с ЮУрГУ.

</div>
