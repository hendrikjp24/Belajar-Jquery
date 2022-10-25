for(let i=1; i <= 4; i++){
    const div = document.createElement("div");
    div.classList.add("boxes");
    const textDiv = document.createTextNode("Baris Ke- " + i);
    div.appendChild(textDiv);

    document.body.appendChild(div);
}

