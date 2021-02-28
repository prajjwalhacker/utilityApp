

let encoderbtn = document.querySelector(".btn");
let resetbtn = document.querySelector(".reset");
    encoderbtn.addEventListener('click', () => {
        let text = document.querySelector(".input").value;
        ////console.log(text);
        let decodedText = decodeURIComponent(String(text));
     
        document.querySelector(".output").value = decodedText;
     
    });


resetbtn.addEventListener('click', () => {
    document.querySelector(".input").value = "";
    document.querySelector(".output").value = "";
})