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

const delBook = (id) => fetch(`/delete/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
  })
  
  fetch('/getBook')
  .then(res=>res.json())
  .then(data=>{
      const wrapper = document.querySelector('.wrapper');
  data.forEach(e=>{
      const box = document.createElement('div');
      box.className='box';
      wrapper.appendChild(box);
  
      const title = document.createElement('h3');
      title.className='titel';
      title.textContent=e.name;
      box.appendChild(title);
  
      const info = document.createElement('div');
      info.className='info';
      box.appendChild(info);
  
      const authorName = document.createElement('div');
      authorName.className='author';
      authorName.textContent=e.author;
      info.appendChild(authorName);

      const icon = document.createElement('i');
      icon.className='fas fa-edit';
      authorName.appendChild(icon);
  
      const bookPrice = document.createElement('div');
      bookPrice.className='price';
      bookPrice.textContent=e.price +'$';
      info.appendChild(bookPrice);
    //   box.appendChild(bookPrice);

      const row = document.createElement('div');
      row.className='row2';
      wrapper.appendChild(row);
  
      const btn = document.createElement('button');
      btn.className='Delete';
      btn.textContent='Delete';
      btn.onclick =()=>{
          console.log(e.id);
          delBook(e.id)
          .then( window.location.assign('/'))
      }

      row.appendChild(btn);
      wrapper.appendChild(box);
      box.appendChild(row);
  })
  })