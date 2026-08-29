import 'dotenv/config';
import getSchedules from './getSchedule.js';
import ParseSchedule from './parseSchedule.js';

const login = process.env.LOGIN;
const password = process.env.PASSWORD;

const schedules = await getSchedules(login, password);
const FiltredSchedule = ParseSchedule(schedules);

console.log(FiltredSchedule);