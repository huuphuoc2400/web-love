const firstDate = new Date("2023-07-18T00:00:00");

function formatNumber(num) {
  return num < 10 ? `0${num}` : num;
}

document.addEventListener("DOMContentLoaded", function () {
  setInterval(function () {
    const date = new Date();
    const diff = date.getTime() - firstDate.getTime();

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("date").textContent =
    `${days} DAYS`
    document.getElementById("time").textContent =
      `${hours}:${minutes}:${formatNumber(seconds)}`;
  }, 1000);
});