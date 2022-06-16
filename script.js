/* DOM */
const desiredDateLabel = document.getElementById("desiredDate");
const submitBtn = document.getElementById("submit");
const dateLabel = document.querySelector(".date");
const daysLeftLabel = document.querySelector(".days_left");
const hoursLeftLabel = document.querySelector(".hours_left");
const minutesLeftLabel = document.querySelector(".minutes_left");
const secondsLeftLabel = document.querySelector(".seconds_left");

/* Functions */
const localizeDate = (date) => {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};

const timeConvertor = () => {
  const seconds = (new Date(desiredDateLabel.value) - new Date()) / 1000;
  daysLeftLabel.textContent = Math.floor(seconds / (24 * 60 * 60));
  hoursLeftLabel.textContent = String(
    Math.floor(seconds / (60 * 60)) % 24
  ).padStart(2, "0");
  minutesLeftLabel.textContent = String(Math.floor(seconds / 60) % 60).padStart(
    2,
    "0"
  );
  secondsLeftLabel.textContent = String(Math.floor(seconds) % 60).padStart(
    2,
    "0"
  );
};

// Default Date
dateLabel.textContent = localizeDate(new Date());

/* Event Handlers */
submitBtn.addEventListener("click", function () {
  const date = localizeDate(new Date(desiredDateLabel.value));
  dateLabel.textContent = date;
  setInterval(timeConvertor, 1000);
});
