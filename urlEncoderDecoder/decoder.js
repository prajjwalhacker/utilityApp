

let encoderbtn = document.querySelector(".decoder");
let resetbtn = document.querySelector(".reset");
    encoderbtn.addEventListener('click', () => {
        let text = document.querySelector(".input").value;
        ////console.log(text);
        let decodedText = encodeURIComponent(String(text));
     
        document.querySelector(".output").value = decodedText;
     
    });


resetbtn.addEventListener('click', () => {
    document.querySelector(".input").value = "";
    document.querySelector(".output").value = "";
})