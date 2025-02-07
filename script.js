let chocolateGifs = [
    "https://pin.it/6184YdzQS",
    "https://pin.it/WuCLPUWN2",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOW9xbDJ1bXNoODRvbWE1Znp1cmRyMzg0YTNjaWsyMmU4cHJvN3A5NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PimVZF3PFYdx746miI/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHNtYjNmdHU0YTJ4Z2Joamt3NDVvZGh1MzkzN3A0ODUwMjZuN21tciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UO5elnTqo4vSg/giphy.gif"
];

let currentGif = 0;

function changeGif() {
    currentGif = (currentGif + 1) % chocolateGifs.length;
    document.getElementById("chocoGif").src = chocolateGifs[currentGif];
    startChocolates();
}

function startChocolates() {
    for (let i = 0; i < 10; i++) {
        let chocolate = document.createElement('div');
        chocolate.classList.add('chocolate');
        chocolate.innerHTML = "🍫";
        chocolate.style.left = Math.random() * 100 + "vw";
        chocolate.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.getElementById("chocolates-container").appendChild(chocolate);

        setTimeout(() => {
            chocolate.remove();
        }, 5000);
    }
}
