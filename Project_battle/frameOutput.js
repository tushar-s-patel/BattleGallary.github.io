let frame=document.querySelector('iframe');
console.log(frame);
frame.contentDocument.body.innerHTML =`<div id="container">
<div class="c" id="c1">
  <div id="b1"></div>
  <div class="c" id="c2">
    <div class="c" id="c3">
      <div class="c" id="c4"></div>
    </div>
  </div>
</div>
<div id="b2"></div>
<div id="b3"><div class="bar" id="b4"></div><div class="bar" id="b5"></div></div>
</div>
<style>
body{
  margin:0px;
  padding:0px;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  background:#F3AC3C;
}
#container{
  width:400px;
  height:120;
  display:flex;
  justify-content:center;
  align-items:center;
}
.c{
  height:120px;
  width:120px;
  background:#998235;
  border-radius:50%;
  display:flex;
  justify-content:center;
  align-items:center;
}
#c2{
  height:100px;
  width:100px;
  position:relative;
  left:55;
  z-index:1;
}
#c3{
  height:50px;
  width:50px;
  background:#F3AC3C;
}
#c4{
  height:40px;
  width:40px;
  background:#1A4341;
}
#b1{
  height:40px;
  width:10px;
  background:#1A4341;
  border-radius:5px;
  position:relative;
  left:35;
}
#b2{
  width:150px;
  height:20px;
  background:#1A4341;
  position:relative;
  left:30;
}
#b3{
  width:40px;
  height:30px;
  background:#998235;
  border-radius:10px;
  z-index:1;
}
.bar{
   width:20px;
  height:4px;
   border-radius:10px;
  background:#1A4341;
  position:relative;
  left:10;
  top:8;
}
#b5{
  top:14px;
}
</style>
`;