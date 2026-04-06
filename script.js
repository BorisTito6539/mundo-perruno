const dog = document.getElementById("dog");
const bone = document.getElementById("bone");
const intro = document.getElementById("intro");
const main = document.getElementById("main");
const bark = document.getElementById("bark");

// ⏱️ TIEMPO BASE (IMPORTANTE)
const tiempoMovimiento = 2000;

bone.addEventListener("click", () => {

    // sonido
    bark.currentTime = 0;
    bark.play().catch(()=>{});

    // 🐕 perro corre
    dog.style.left = "45%";

setTimeout(() => {

    bone.style.left = dog.style.left;

}, tiempoMovimiento);

    // 🏃 se van juntos
    setTimeout(() => {
        dog.style.left = "120%";
        bone.style.left = "120%";
    }, tiempoMovimiento + 200); // pequeño delay natural

    // 👻 desaparecer
    setTimeout(() => {
        intro.style.opacity = "0";

        setTimeout(() => {
            intro.style.display = "none";
            main.classList.remove("hidden");
            document.body.style.overflow = "auto";
        }, 800);

    }, tiempoMovimiento + 2200);
});