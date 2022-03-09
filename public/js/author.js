//get author
fetch('/author')
.then(res=> res.json())
.then(author =>{
    const select = document.querySelector('#country');
    author.forEach(e => {
        const autOption = document.createElement("option");
        autOption.value=e.id;
        autOption.textContent=e.name;
        select.appendChild(autOption);       
    });
});