const lb=document.getElementById('lb');
const lbt=document.getElementById('lbt');
const lba=document.getElementById('lba');
const lbc=document.getElementById('lbc');
const prev=document.getElementById('prev');
const next=document.getElementById('next');
lb.addEventListener('close',()=>{lb.scrollTop=0;lbc.scrollTop=0});
let cur=0;
function pinTop(y){
  lb.scrollTop=0;lbc.scrollTop=0;
  window.scrollTo(0,y);
}
function show(i){
  if(!ART.length)return;
  cur=(i+ART.length)%ART.length;
  const o=ART[cur];
  const y=window.scrollY||window.pageYOffset||0;
  lbt.textContent=o.title;lba.textContent=o.author;lbc.innerHTML=o.html||'';
  if(!lb.open)lb.showModal();
  pinTop(y);
  requestAnimationFrame(()=>{pinTop(y);requestAnimationFrame(()=>pinTop(y))});
}
document.querySelectorAll('.card').forEach(c=>c.onclick=e=>{e.preventDefault();show(+c.dataset.i)});
document.querySelector('.x').onclick=()=>lb.close();
prev.onclick=()=>show(cur-1);next.onclick=()=>show(cur+1);
lb.onclick=e=>{if(e.target===lb)lb.close()};
document.onkeydown=e=>{if(!lb.open)return;if(e.key==='Escape')lb.close();if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)};
