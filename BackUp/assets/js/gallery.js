
document.querySelectorAll('.gallery img').forEach(img=>{
 img.onclick=()=>{
  const lb=document.createElement('div');
  lb.style=`
   position:fixed;top:0;left:0;width:100%;height:100%;
   background:rgba(0,0,0,.8);display:flex;
   align-items:center;justify-content:center;z-index:9999`;
  const i=document.createElement('img');
  i.src=img.src;i.style.maxWidth='90%';i.style.maxHeight='90%';
  lb.onclick=()=>lb.remove();
  lb.appendChild(i);document.body.appendChild(lb);
 };
});
