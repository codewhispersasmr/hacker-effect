const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;
const h1 = document.querySelector('h1');
h1.dataset.value = h1.innerText;

h1.onmouseover = event => {  
    let iteration = 0;
  
    clearInterval(interval);
  
    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
            if( index < iteration ) {
                return event.target.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");

        if( iteration >= event.target.dataset.value.length ){ 
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 30);
}
