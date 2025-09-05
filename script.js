const loadcategories=() => {
   url="https://news-api-fs.vercel.app/api/categories";
   fetch(url)
   .then(res=>res.json())
   .then(data=>displaycategories(data.categories))
}
const displaycategories=(data)=>{
    const nav=document.getElementById('navbar');

    for(const dt of data){
        const categories=document.createElement('li')
        categories.innerHTML=`
         <li id="${dt.id}" class="hover:border-b-3 border-red-700  cursor-pointer">${dt.title}</li>
        `
        nav.appendChild(categories);
        
    }
   nav.addEventListener('click',(event)=>{
    const allli=document.querySelectorAll('li');
    allli.forEach((li)=>{
        li.classList.remove('border-b-3')
    })
     if(event.target.localName==='li'){
        event.target.classList.add('border-b-3');
        displayNews(event.target.id);
        
     }
   })
}
loadcategories();

// display-news

const displayNews =(newsId)=>{
  
  url=`https://news-api-fs.vercel.app/api/categories/${newsId}`;
  fetch(url)
  .then(res=>res.json())
  .then(data=>{
     showImage(data.articles)
  });

  

}
const showImage =(articles)=>{
    const newscontainer=document.getElementById('newsContainer');
    newscontainer.innerHTML="";

    for(article of articles){

       const addnews=document.createElement('div');
  addnews.innerHTML=`
    <div class="h-full w-full">
         <div>
          <img class="h-[150px] w-[300px]" src="${article.image.srcset[5].url}" alt="">
         </div>
         <h1>${article.title}</h1>
         <p>${article.time}</p>
    
        </div>
  
  
  `
  newscontainer.appendChild(addnews);
    }

}



