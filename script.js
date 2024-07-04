// JavaScript for displaying current time and day
document.addEventListener('DOMContentLoaded', function() {
    updateTime();
});

function updateTime() {
    const currentTimeUTC = new Date().toUTCString();
    document.querySelector('[data-testid="currentTimeUTC"]').textContent = currentTimeUTC;
    
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[new Date().getDay()];
    document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
}
