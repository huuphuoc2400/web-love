const yourDate = new Date("2023-07-18T00:00:00")
document.addEventListener('DOMContentLoaded', function () {
    const today = new Date()
    setInterval(function () {
        document.querySelector("date").textContent = Math.floor(Math.floor((today - yourDate) / 1000) / 60 / 60 / 24) + " DAYS"
    }, 1000)
})



























