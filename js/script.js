function welcome() {
    console.log("Witam wszystkich przyszłych programistów, właśnie uczę się dodawać funkcje");
}

welcome();

let przycisk = document.querySelector(".przycisk");
let zdj = document.querySelector(".zdj")
przycisk.addEventListener ("click", ()=>{

zdj.remove();
});
console.log=(przycisk);