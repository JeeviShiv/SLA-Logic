var date = require('date-and-time');
const now = new Date();
let status ='';

module.exports = {
    formatDate(){
       return date.format(now, 'YYYY/MM/DD')
    },
    formatTime(){
        return date.format(now, 'HH:mm:ss');
    },
    availableDays(bugCreated){
        const currentDate = new Date();   
        const bugCreatedString = new Date(bugCreated);   
        const deadLine = date.addDays(bugCreatedString, +3);
        leftOver = date.subtract(deadLine, currentDate).toMinutes();
        result = this.slaRemaining(leftOver);
        return result;
    },
    slaRemaining (mins) {
        if (!mins) {
          // This check is wrong. What happens if the query happens at the exact moment that 0 minutes are left to SLA?
          return 'N/A';
        }
        const due = (mins < 0);
        const absMins = Math.abs(mins);
        const days = Math.floor(absMins / 1400);
        const hours = Math.floor(absMins / 60);
        const mint = absMins % 60;
        minutes = mint.toFixed();
        const label = days
          ? `${days} day${days > 1 ? 's' : ''}`
          : `${hours}hr${hours > 1 ? 's' : ''} ${minutes}min${minutes > 1 ? 's' : ''}`;
        return { due, label };
    }
};
