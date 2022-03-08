fetch('/author')
.then(res=> res.json())
.then(author =>{
    console.log(author);
    const select = document.querySelector('#country');
    author.forEach(e => {
        console.log(e)
        const autOption = document.createElement("option");
        autOption.value=e.name;
        autOption.textContent=e.name;
        select.appendChild(autOption);       
    });
})
