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

fetch('/getBook')
.then(res=>res.json())
.then(data=>{
    const wrapper = document.querySelector('.wrapper');
    const box = document.querySelector('.box');
    const row = document.querySelector('.row2');
    const info = document.querySelector('.info')
data.forEach(e=>{
    const title = document.createElement('h3');
    title.className='titel';
    title.textContent=e.name;
    box.appendChild(title);
    const authorName = document.createElement('div');
    authorName.className='author';
    authorName.textContent=e.author;
    info.appendChild(authorName);
    const bookPrice = document.createElement('div');
    bookPrice.className='price';
    bookPrice.textContent=e.price ,'$';
    info.appendChild(bookPrice);
    const btn = document.createElement('button');
    btn.className='Delete';
    btn.textContent='Delete';
    row.appendChild(btn);

    wrapper.appendChild(box);
    box.appendChild(row);
})
})