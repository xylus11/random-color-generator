const box = document.querySelector(".box");
const pp = document.createElement('p');
box.append(pp);
const para = document.querySelector('p');
    
const exa=[0,1,2,3,4,5,6,7,8,9,"a",'b','c','d','e','f']

function ch()
{
    let col ="#";

    for(let i=0;i<=5;i++)
    {  
        let num = Math.floor(Math.random() * (exa.length)); 
    
        col= col + exa[num];    
    }
     

 box.style.backgroundColor= col;
 para.innerText=`${col}`



 console.log("chngae");
}


box.addEventListener('click',ch);
