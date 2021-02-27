

let encoderbtn = document.querySelector(".encoder");
let resetbtn = document.querySelector(".reset");
    encoderbtn.addEventListener('click', () => {
        let text = document.querySelector(".input").value;
        ////console.log(text);
        let encodedText = encodeURIComponent(String(text));
     
        document.querySelector(".output").value = encodedText;
     
    });


resetbtn.addEventListener('click', () => {
    document.querySelector(".input").value = "";
    document.querySelector(".output").value = "";
})