function ParseSchedule(schedule) {
    const today = new Date();
    const dayOfWeek = today.getDay() === 0 ? 7 : today.getDay();
    const needDays = 7 + (7 - dayOfWeek);

    const endDate = new Date(today);
    endDate.setDate(endDate.getDate() + needDays);

    const toDateString = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const todayStr = toDateString(today);
    const endDateStr = toDateString(endDate);

    const filteredEvents = [];
    let i = 0;
    while (i < schedule.schedule.length) {
        const event = schedule.schedule[i];
        if (event.eventDate >= todayStr && event.eventDate <= endDateStr) {
            filteredEvents.push(event);
        }
        i++;
    }

    return JSON.stringify(filteredEvents);

}

export default ParseSchedule;