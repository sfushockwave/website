const toggle = document.querySelector(".toggle")
const showcase = document.querySelector(".showcase")

toggle.addEventListener("click", function () {
    toggle.classList.toggle("active")
    showcase.classList.toggle("active")
})
