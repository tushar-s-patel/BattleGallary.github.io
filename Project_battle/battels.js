let links=document.getElementById('links');
let list=document.getElementById('list');
// hljs.highlightAll();
for (let i = 0; i < battels.length; i++) {
   links.innerHTML=links.innerHTML+`<a href="#cdiv${i}"><div id=lnk${i} class='lnk'>${i+1}</div></a>`;
}
let lnk=document.getElementsByClassName('lnk');
let batblock=document.getElementsByClassName("nm");
let clrs=['#51EAEA','#FFFDE1','#FF9D76','#FB3569','#113CFC','#1597E5','#0774a4','#f3713d','#6eb77f','#d24f54','#FF0075','#17FF74','#A4F6F9','#FF99FE','#BA52ED'];
 for (let i = 0; i < battels.length; i++) {
   let cdiv=document.createElement('div');
   let clr=clrs[Math.floor(Math.random()*clrs.length)];
   lnk[i].style.color=clr;
   cdiv.style.color=clr;
   cdiv.setAttribute("id",`cdiv${i}`);
   cdiv.setAttribute("class",'cdiv');
   let ndiv=document.createElement('div');
   ndiv.setAttribute('id',`ndiv${i+1}`);
   ndiv.setAttribute('class','batblock ndiv');
   ndiv.style.borderColor=clr;
   ndiv.innerText=`Challenge #${i+1}`;
   cdiv.appendChild(ndiv);
   for (let j = 1; j < battels[i].length; j++) {
      let bdiv=document.createElement('div');
      let bar=document.createElement('div');
      bdiv.setAttribute('class','bar');
      bar.innerText=`Battle #${j}`;
      bdiv.appendChild(bar);
      bdiv.setAttribute('class','batblock nm');
      bdiv.setAttribute('id',`c${i}b${j}`);
      bdiv.addEventListener('click',function () {
         for (let i = 0; i < batblock.length; i++) {
            batblock[i].setAttribute('class','batblock nm');
            batblock[i].style.backgroundColor='rgba(0,0,0,0)';
         }
         this.setAttribute('class','batblock nm baractiv');
         let clr = this.parentElement.style.color.replace('rgb','rgba');
         clr =clr.replace(')',',0.4)');
         this.style.backgroundColor=clr;
         // console.log('clicked '+`2px solid ${this.parentElement.style.color}    ${clr}   ${this.style.backgroundColor}`);
         // console.log(this);
        getid(this.id);
      });
      cdiv.appendChild(bdiv);
   }
   list.appendChild(cdiv);

 }
 function getid(id) {
      // console.log("fired");
      //  console.log(id);
       chnge(id);
 }
 
//  function chngclor() {
//     for (let i = 0; i < battels.length; i++) {
//        lnk[i].style.BoxShadow=`hsl(${Math.floor(Math.random() * 360)},50%,50%)`;
//        lnk[i].style.color=`hsl(${Math.floor(Math.random() * 360)},50%,70%)`;
//     }
//  }
//  setInterval (chngclor , 400);


for (let i = 0; i < batblock.length; i++) {
   batblock[i].onmouseover = function() {mouseOver(i)};
   batblock[i].onmouseout = function() {mouseOut(i)};
   
}
function mouseOver(i) {
  batblock[i].style.borderBottom = `2px solid ${batblock[i].style.color}`;
}

function mouseOut(i) {
   batblock[i].style.borderBottom = `2px solid rgba(0,0,0,0)`;
}