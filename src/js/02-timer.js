// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      Notiflix.Notify.failure("Please choose a date in the future");
    } else {
      startButton.disabled = false;
    }
  },
};

const startButton = document.querySelector('[data-start]')
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');

let intervalId = null;

flatpickr('#datetime-picker', options);

startButton.addEventListener('click', () => {
  const selectedDate = new Date(document.querySelector('#datetime-picker').value);
  const currentDate = new Date();

  if (selectedDate <= currentDate) {
    Notiflix.Notify.failure("Please choose a date in the future");
  } else {
    startButton.disabled = true;
    intervalId = setInterval(() => {
      const timeLeft = selectedDate - new Date();
      if (timeLeft <= 0) {
        clearInterval(intervalId);
        updateTimer(0);
        Notiflix.Notify.success('Timer has ended!');
        startButton.disabled = false;
      } else {
        updateTimer(timeLeft);
      }
    }, 1000);
  }
});

function updateTimer(ms) {
  const { days, hours, minutes, seconds } = convertMs(ms);
  daysValue.textContent = addLeadingZero(days);
  hoursValue.textContent = addLeadingZero(hours);
  minutesValue.textContent = addLeadingZero(minutes);
  secondsValue.textContent = addLeadingZero(seconds);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor((ms % hour) / minute);
  const seconds = Math.floor((ms % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
