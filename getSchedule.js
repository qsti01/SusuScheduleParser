import { randomInt } from 'crypto';


function createIdentity() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const identityLength = 32;
    let identity = '';
    for (let i = 0; i < identityLength; i++) {
        const randomIndex = randomInt(0, alphabet.length);
        identity += alphabet[randomIndex];
    }
    return identity;
}

const loginResponse = async (login, password) => fetch('https://online.susu.ru/microgateway/api/auth/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Origin': 'https://online.susu.ru',
        'Referer': 'https://online.susu.ru/login'
    },
    body: new URLSearchParams({
        'LoginForm[login]': login,
        'LoginForm[password]': password,
        'identity': createIdentity()
    })
});

async function getJwtandScheduleId(login, password) {
    try {
        const response = await loginResponse(login, password);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json()
        const jwt = data.accessToken;
        const scheduleId = data.student[0].groupId;
        return { scheduleId, jwt };
    } catch (error) {
        return error;
    }

}

const schduleResponse = async (jwt, scheduleId) => fetch('https://online.susu.ru/microgateway/api/Schedule/SearchScheduleById', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Origin': 'https://online.susu.ru',
        'Referer': 'https://online.susu.ru/schedule',
        'Authorization': `Bearer ${jwt}`
    },
    body: new URLSearchParams({
        'scheduleId': scheduleId,
        'isLecturer': 'false'
    })
});

async function getSchedules(login, password) {
    const { scheduleId, jwt } = await getJwtandScheduleId(login, password);
    const data = (await schduleResponse(jwt, scheduleId)).json();
    return data;

}

export default getSchedules;