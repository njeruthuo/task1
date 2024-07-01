function updateUTCTime() {
  const now = new Date();
  const utcYear = now.getUTCFullYear();
  const utcMonth = now.getUTCMonth() + 1;
  const utcDate = now.getUTCDate();
  const utcHours = now.getUTCHours();
  const utcMinutes = now.getUTCMinutes();
  const utcSeconds = now.getUTCSeconds();

  let dayName;

  switch (utcDate) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    default:
      dayName = "Invalid day number";
  }

  const currentUTCTime = `${String(utcHours).padStart(2, "0")}:${String(
    utcMinutes
  ).padStart(2, "0")}:${String(utcSeconds).padStart(2, "0")}`;

  document.getElementById("UTCTime").innerText = currentUTCTime;
  document.getElementById("weekDay").innerText = dayName;
  document.getElementById("year").innerText = `${utcYear}.`;
}

updateUTCTime();
setInterval(updateUTCTime, 1000);
