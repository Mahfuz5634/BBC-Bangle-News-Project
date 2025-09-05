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
         <li id="${dt.id}" class="hover:border-b-3 border-red-700 cursor-pointer">${dt.title}</li>
        `
        nav.appendChild(categories);
    }
 
}

loadcategories();