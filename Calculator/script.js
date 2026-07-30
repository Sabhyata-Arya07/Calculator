let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        if (value === "AC") {
            string = "";
            input.value = "";
        }

        else if (value === "DEL") {
            string = string.slice(0, -1);
            input.value = string;
        }
        else if(e.target.innerHTML == "="){
            try {
                string = eval(string).toString();
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        }
        else{
            string += e.target.innerHTML;
            input.value = string ;
        }
    })
})

document.addEventListener("keydown", (e) => {

    // Allow numbers, operators and decimal
    if (
        (e.key >= "0" && e.key <= "9") ||
        e.key === "+" ||
        e.key === "-" ||
        e.key === "*" ||
        e.key === "/" ||
        e.key === "%" ||
        e.key === "."
    ) {
        string += e.key;
        input.value = string;
    }

    // Enter key (=)
    else if (e.key === "Enter") {
        try {
            string = eval(string).toString();
            input.value = string;
        } catch {
            input.value = "Error";
            string = "";
        }
    }

    // Backspace (DEL)
    else if (e.key === "Backspace") {
        string = string.slice(0, -1);
        input.value = string;
    }

    // Escape (AC)
    else if (e.key === "Escape") {
        string = "";
        input.value = "";
    }
});