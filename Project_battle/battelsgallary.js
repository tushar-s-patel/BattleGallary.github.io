let battels=[
    ['https://cssbattle.dev/battle/1',{
        name:'battel1.01',
        src:`<div></div>
        <style>
          *{
            margin:0;
            padding:0;
            background:#5d3a3a;
          }
          div {
            width: 200px;
            height: 200px;
            background: #b5e0ba;
          }
        </style>
        `
    },
    {
        name:'battel1.02',
        src:`<div Id="one"></div>
        <div Id="two"></div>
        <div Id="three"></div>
        <div Id="four"></div>
        <style>
          *{
            margin:0;
            padding:0;
            background:#62374e;
          }
          div {
            width: 50px;
            height: 50px;
            background: #fdc57b;
          }
          #one{
             transform: translate(50px,50px);
          }
          #two{
            transform: translate(300px,0px);
          }
          #three{
            transform: translate(300px,100px);
          }
          #four{
            transform: translate(50px,50px);
          }
        </style>
        
        `
    },
    {
        name:'battel1.03',
        src:`<div class="box">
        <div class="circle c1">
          <div class="circle c2">
            <div class="circle c3">
          </div>
          </div>
          </div>
    </div>
    <style>
      body{
        margin:0;
        padding:0;
        background:#6592CF;
        display:flex;
        height: 100%;
        justify-content:center;
        align-items:center;
      }
      .box {
        width: 300px;
        height: 150px;
        background: #243D83;
         display:flex;
        justify-content:center;
        align-items:center;
      }
      .circle{
        border-radius:100%;
        display:flex;
        justify-content:center;
        align-items:center;
      }
      .c1{
        width:250px;
        height:250px;
        background: #6592CF;
      }
     .c2{
        width:150px;
        height:150px;
        background: #243D83;
      }
      .c3{
         width:50px;
        height:50px;
        background: #EEB850;
      }
    </style>
        
        `
    },
    {
        name:'battel1.04',
        src:`<div class="b1 box"></div>
        <div class="b2 box"></div>
        <div class="b3 box"></div>
        <style>
          body{
            background-color:#62306D;
            display :flex;
            height: 100%;
            align-items:center;
            justify-content:center;
          }
          .box{
            height:100px;
            width:100px;
            background:#F7EC7D;
          }
          .b1{
            transform:translate(0px,42px);
            border-radius:0 0 50px 50px;
          }
          .b2{
            transform:translate(0px,-58px);
            border-radius: 50px 50px 0 0 ;
          }
          .b3{
            transform:translate(0px,42px);
            border-radius:0 0 50px 50px;
          }
         
          
          </style>
        `
    },
    {
        name:'battel1.05',
        src:`<div class="b1 box">
        <div class="b2 box">
        <div class="b3 box"></div>
          </div>
          </div>
        <style>
          body{
            background-color:#0B2429;
            display :flex;
            height: 100%;
            align-items:center;
            justify-content:center;
          }
          .box{
            height:120px;
            width:120px;
            background:#F3AC3C;
          }
          .b1{
            transform:translate(59px,-69px);
            border-radius:100%;
          }
          .b2{
            
            transform:translate(-60px,60px);
            background:#998235;
            border-radius:50% 0px 50% 50%;
          }
          .b3{
           
            transform:translate(-60px,60px);
            background:#F3AC3C;
            border-radius:50% 0px 50% 50%;
          }
          
          
          
          </style>
        `
    },
    {
        name:'battel1.06',
        src:`<div id="b1" class="box"></div>
        <div id="b2" class="box"></div>
        <div id="b3" class="box"></div>
        <div id="b4" class="box"></div>
        <style>
          body{
            margin:0px;
            padding:0px;
            display: grid;
            height:100%;
            justify-content: center;
            align-content:center;
            grid-template-areas:'b1 b2';
            background:#E3516E;
          }
          .box{
            height:100px;
            width:100px;
            background:#E3516E;
          }
          #b1{
             background:#51B5A9;
            border-radius:100px 0 0 0 ;
          }
           #b2{
             background:#FADE8B;
            border-radius:0 100px 0 0 ;
          }
          #b3{
              background:#F7F3D7;
            border-radius:0 0 0 100px ;
          }
          
        </style>
        `
    },
    {
        name:'battel1.07',
        src:`<div id="b3" class="box">
        <div id="b2" class="box">
          <div id="b1" class="box"></div>
        </div></div>
        <style>
          body{
            margin:0px;
            padding:0px;
            display: flex;
            height:100%;
            justify-content: center;
            align-items:center;
            background:#0B2429;
          }
          .box{
            height:150px;
            width:150px;
          }
          #b3{
           border-radius:100px 0;
            background:#1A4341;
              transform:translate(-50px,0px)
          }
          #b1{
             background:#F3AC3C;
            border-radius:100px 0;
                transform:translate(50px,0);
          }
          #b2{
             background:#998235;
            border-radius:100px 0;
            transform:translate(50px,0);
          }
          
         
          
        </style>
        
        `
    },
    {
        name:'battel1.08',
        src:`<div id="b1" class="box"></div>
        <div id="b2" class="box"></div>
          <div id="b3" class="box">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        
        <style>
          body{
            margin:0px;
            padding:0px;
            display: flex;
            height:100%;
            justify-content: center;
            align-items:center;
            background:#6592CF;
          }
          .box{
            height:10px;
            width:10px;
            background:#060F55;
             position:absolute;
          }
          #b1{
            position:absolute;
            height:55px;
            width:20px;
            bottom:0px;
          }
          #b2{
             height:140px;
            width:140px;
            border-radius:0 0 100% 100%;
            bottom:50px;
          }
          #b3{
            display:flex;
             width:140px;
            top:50px;
            background:#6592CF;
          }
          span{
            width:20px;
            height:110px;
            border-radius:10px
          }
          span:nth-child(odd){
            background:#060F55;
          }
          span:nth-child(even){
            
            background:#6592CF;
          }
        </style>
        `
    },
    {
        name:'battel1.09',
        src:`<div id="b1"class="box">
        <div id="b2"class="box">
          <div id="b3" class="box">
          <div id="b4" class="box"></div></div>
        </div></div>
        <style>
        body{
          margin:0px;
          padding:0px;
          display: flex;
          height:100%;
          justify-content: center;
          align-items:center;
          background:#222730;
        }
        .box{
          height:150px;
          width:150px;
           display: flex;
          justify-content: center;
          align-items:center;
        }
        #b3{
          background:#4CAAB3; 
        }
        #b1{
           background:#4CAAB3;
          width:400px;      
        }
        #b2{
           background:#222730;
          height:250px;
          width:250px;
          transform:rotate(45deg)
        }
        #b4{
           height:50px;
          width:50px;
          background:#393E46;
          border-radius:100%;
        }
       
        
      </style>
        `
    },
    {
        name:'battel1.10',
        src:`<div class="box" Id="b1">
        <div class="c1">
        <div class="c2"></div>
        </div>
        </div>
        <div class="box" Id="b2">
        <div Id="cm" class="c1">
        <div class="c2">
        </div>
        </div>
        </div>
        <div class="box" Id="b3">
        <div class="c1">
        <div class="c2"></div>
        </div>
        </div>
        <style>
          body{
            margin:0px;
            padding:0px;
            height:100%;
            background:#62306D;
            display:flex;
            justify-content:center;
            align-items:flex-end;
          }
          .box {
            width: 100px;
            height: 100px;
            background: #F7EC7D; 
          }
          .c1{
            position: absolute;
            width: 100px;
            height: 100px;
            background:#AA445F;
            top:150;
            border-radius:100%;
             display:flex;
            justify-content:center;
            align-items:center;
          }
          #b2{
            height:200;
          }
          #cm{
             top:50;
            background:#E38F66;
          }
          .c2{
            width: 60px;
            height: 60px;
            background:#E38F66;
            border-radius:50%;
          }
          #cm .c2{
            background:#AA445F;
          }
        </style>
        `
    },
    {
        name:'battel1.11',
        src:`<div class="oc c oc1"><div class="oc oc1 oc11"></div></div><div class="c1 c"><div class="c c2" ><div class="c3 c"></div></div></div>
        <div class="b2 box"></div>
        <div class="oc c oc2"><div class="oc oc2 oc12"></div></div>
        <style>
          body{
            margin:0px;
            background-color:#191210;
            display :flex;
            height: 100%;
            align-items:center;
            justify-content:center;
          }
          .c{
            height:140px;
            width:140px;
            background:#ECA03D;
            border-radius:100%;
            display :flex;
             align-items:center;
            justify-content:center;
          }
          .c2{
            height:100px;
            width:100px;
            background:#191210;
          }
          .c3{
             height:50px;
            width:50px;
             background:#84271C;
          }
          .oc{
            height:50px;
            width:100px;
            background:#ECA03D;
            position:relative;
            
          }
          .oc1{
            right:-20;
            top:25;
            border-radius:0 0 100px 100px;
          }
          .oc2{
            right:20;
            top:-25;
            border-radius:100px 100px 0 0 ;
          }
          .oc11{
            height:50px;
            width:60px;
            right:0;
            top:-20;
            background:#191210
          }
          .oc12{
            height:50px;
            width:60px;
            right:0;
            top:20;
            background:#191210
          }
          
          </style>
        `
    },
    {
        name:'battel1.12',
        src:`<div class ="c c1"><div class ="c co1 c2"></div><div class ="c c11"></div></div>
        <div class ="c c2"><div class ="c c2 c22"></div></div>
        <div class ="c c3"><div class ="c co1 c2 co2"></div><div class ="c c11"></div></div>
        <style>
         body{
            margin:0px;
            height: 100%;
            background: #F5D6B4;
           display:flex;
           justify-content:center;
           align-items:center;
          }
          .c{
            height:50px;
            width:100px;
            background:#D86F45;
            border-radius:0 0 100px 100px;
            position:relative;
            display:flex;
           justify-content:center;
           align-items:center;
            box-sizing:border-box;
          }
          .c2{
             border-radius: 100px 100px  0 0;
            top:-26px;
          }
          .c1{
            top:24px;
            right:-20px;
          }
          .c11{
            height:60px;
            width:60px;
            top:-23px;
            right:10px;
            background:#F5D6B4;
          }
          .co1{
            height:10px;
            width:20px;
            right:10px;
            
          }
          .c22{
            height:60px;
            width:60px;
            background:#F5D6B4;
            top:23
          }
          .c3{
            top:21;
            right:20
          }
          .co2{
            right:-70
          }
          
        </style>
        
        `
    }]
];
battels[1]=[ 'https://cssbattle.dev/battle/2',
  {
    name:'battel 13',
    src:`<div></div>
    <style>
    body
    {
      margin:0px;
      background:#0B2429;
    }
    div{
      width: 200px;
      height: 200px;
    background:#dd6b4d;
      transform:rotate(45deg);
      position:relative;
      top:-100;
      right:100;
      background:#F3AC3C;}
  </style>`
  },
  {
    name:'battel 14',
    src:`<div class= "box b1 in1"><div class= "box b1 o1"></div></div>
    <div class= "box b2 in2"><div class= "box b2 o2"></div></div>
    <style>
      body{
        margin: 0px;
        height:100%;
        background:#F2F2B6;
        display:flex;
        align-items:center;
        justify-content:center
      }
      .box{
        height:0px;
        width:0px;
      
        position:absolute;
      }
      .b1{
       border-style:solid;
        border-width:130 75 75 75 ;
        border-color:#FF6D00 transparent transparent;
       
      }
      .o1{
        top:-130px;
        right:-55px;
      }
      .in1{
        top:85px;
        border-color:#FD4602 transparent transparent;
        right:170
      }
      .b2{
       border-style:solid;
        border-width: 75  75 130  75;
        border-color: transparent  transparent #FD4602;
       
      }
      .in2{
        top:10px;
        border-color:transparent  transparent #FF6D00;
        right:60
      }
      .o2{
        top:-75px;
        right:-55px;
      }
      
    </style>
    `
  },{
    name:'battel 15',
    src:`<div class="c c1"><div class="c c2"><div class="c c3"></div></div></div>

    <style>
      body{
        margin:0px;
        display :flex;
        justify-content:center;
        height:100%;
        align-Items:center; 
         background:#09042A
      }
       .c{
        width: 150px;
        height: 150px;
        background: #dd6b4d;
         border-radius:100%;
         position:absolute;
      }
      .c1{
       background:#7B3F61;
        left:75px;
      }
      .c2{
        left:100;
        background:#E78481;
        overflow:hidden
      }
      .c3{
        right:100px;
        border-radius:100px ;
        background:#09042A;
      }
    </style>
    `
  },
  {
    name:'battel 16',
    src:`<div class="box"><div class="c c1"><div class="c c2"><div class="c c3"></div></div></div></div>

    <style>
      body{
        margin:0px;
        background:#0B2429;
         display :flex;
        justify-content:center;
        height:100%;
        align-Items:center; 
        
      }
      .box{
        width: 200px;
        height: 200px;
        background: #998235;
         display :flex;
        justify-content:center;
        align-Items:center; 
        transform: rotate(45deg);
        border-radius:100px 0px;
        
      }
      .c{
        width: 180px;
        height: 180px;
        background: #0B2429;
        border-radius:100%;
         display :flex;
        justify-content:center;
        align-Items:center; 
      }
      .c2{
         width: 140px;
        height: 140px;
        background: #F3AC3C;
      }
      .c3{
        width: 50px;
        height: 50px;
      }
    </style>`
  },
  {
    name:'battel 17',
    src:`<div class ="c co1" ></div>
    <div><div class ="c c1"></div>
    <div class ="box"></div>
    <div class ="c c2"></div>
      </div>
    <div class ="c co2" ></div>
    <style>
      body ,div{
        margin:0px;
        padding:0px;
        background:#09042A;
         display :flex;
        justify-content:center;
        align-Items:center; 
        
        
      }
      body{
         height:100%;
        flex-direction:column;
      }
     .box {
        width: 60px;
        height: 80px;
        background: #E78481;
      }
      .c{
         width: 60px;
        height: 60px;
        background: #09042A;
        border-radius:100%;
          border:10px solid #E78481;
        position:relative;
      }
      .c1{
        right:-10;
      }
      .c2{
        right:10;
      }
      .co1{
        background:#F5BB9C;
        border-color:#09042A;
        top:27;
      }
      .co2{
        background:#F5BB9C;
        border-color:#09042A;
        top:-27;
      }
      
    </style>
    `
  },
  {
    name:'battel 18',
    src:`<div class="box b1"></div>
    <div class="box b2"></div>
    <div class="box b1"></div>
    <div class="box b2"></div>
    <div class="box b2"></div>
    <div class="box b1"></div>
    <div class="box b2"></div>
    <div class="box b1"></div>
    <div class="box b1"></div>
    <div class="box b2"></div>
    <div class="box b1"></div>
    <div class="box b2"></div>
    <style>
      body{
        margin:0px;
        padding:0px;
        height:100%;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-evenly;
        align-items:center;
        background:#5C434C;
      }
      div {
        width: 80px;
        height: 80px;
        margin:10px;
        border-radius:100px 0px 0px 0px;
      }
      .b1{
        background-color:#F09462;
      }
       .b2{
        background-color:#F5D6B4;
      }
    </style>`
  }
];
battels[2]=[
  {
    name:'battel 19',
    src:`<div id="a"></div>
    <div id="b"></div>
    <div id="c"></div>
    <style>
     body{
        margin:0;
        padding:0;
        background:#0B2429;
        display:flex;
        height: 100%;
        justify-content:center;
        align-items:center;
      }
      div{
        height:70;
        width:0px;
      }
      #a{
        border:71px solid #998235;
        border-color:#0B2429 #998235 #0B2429 #0B2429
      }
      #b{
        border:71px solid #998235;
        border-color:#0B2429  #0B2429 #0B2429 #1A4341;
      }
      #c{
        width:100px;
        height:100px;
        background:#F3AC3C;
        position:absolute;
        transform:rotate(45deg);
        top:135;
      }
      
    </style>
    `
  }
];
battels[2]=['https://cssbattle.dev/battle/5',
  {
    name:'battel 29',
    src:`<div class="box b1"></div>
    <div class="box b2"></div>
    <div class="box b3"></div>
    <div class="box b4"></div>
    <style>
      body{
        margin:0px;
        height:100%;
        background:#1A4341;
      }
      .box{
        width: 200px;
        height: 200px;
        background: #F3AC3C;
        position:relative;
        
      }
      .b1{
        top:-50px;
         border-radius:0px 0px  100px 0px;
      }
      .b2{
        right:-200px;
        top:-250px;
        border-radius:0px 0px 0px 100px;
      }
      .b4{
        border-radius:100px 0px 0px 0px;
        right:-200px;
        top:-450px;
      }
      .b3{
          border-radius:0px 100px  0px 0px;
        top:-250px;
      }
    </style>`
  },
  {
    name:'battel 30',
    src:`<div class="box b1">
    <div class="box b2">
    <div class="box b3">
    <div class="box b4"></div></div></div></div>
    <style>
      body{
        margin:0px;
        padding:0px;
      }
      .box {
        width:100vw;
        height: 100vh;
        position:relative;
      }
      .b4{
        background:#62306D;
        top:100;
      }
      .b3{
        background:#AA445F;
        top:50;
      }
      .b2{
        background:#E38F66;
         top:50;
      }
      .b1{
        background:#F7EC7D;
      }
    </style>`
  }
];
battels[3]=['https://cssbattle.dev/battle/6',
  {
    name:'battel 31',
    src:`<div id="bar"></div>
    <style>
      body{
        margin:0px;
        padding:0px;
        background:#AA445F;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
      }
      #bar{
        width: 50px;
        height: 200px;
        border-left:100px solid #F7EC7D;
        border-right:100px solid #E38F66;
        border-radius:100px 100px 100px 100px
      }
    </style>`
  },
  {
    name:'battel 32',
    src:`<div id="b"></div>
    <div id="c"></div>
    <style>
      body{
        margin:0px;
        padding:0px;
        background:#FFFFFF;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
      }
      #b{
        width: 50px;
        height: 50px;
        border-left:75px solid #F3AC3C;
        border-right:75px solid #F3AC3C;
        transform:rotate(45deg)
      }
      #c{
        position:absolute;
        width: 50px;
        height: 50px;
        background:#FBE18C;
        transform:rotate(45deg);
        border-top:75px solid #A3A368;
        border-bottom:75px solid #A3A368;
      }
    </style>`
  }
];
battels[4]=['https://cssbattle.dev/battle/7',
  {
    name:'battel 33',
    src:`<div id="c1"><div id="c3"></div></div>
    <div id="c2"></div>
    <style>
      body{
        background:#1A4341;
        margin:0px;
        padding:0px;
        height:100%;
        display:flex;
        align-items:center;
        justify-content:center;
      }
      #c1{
        width: 75px;
        height: 150px;
        background: #998235;
        border-radius:150px 0px 0px 150px;
        position:relative;
        left:12;
      }
      #c2{
        width:100px;
        height:100px;
        background:#F3AC3C;
        border-radius:0px 100px 0px 0px;
        position:relative;
        top:-50;
        left:12;
      }
      #c3{
        height:30px;
        width:30px;
        border-radius:50%;
        background:#0B2429;
        position:relative;
        top:30;
        left:30
      }
    </style>`
  },
  {
    name:'battel 34',
    src:`<div id="t1"></div>
    <div id="t2"></div>
    <div id="t3"></div>
    <style>
      body{
        background:#007065;
        margin:0px;
        padding:0px;
        height:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
      }
      div {
      border-width:0px 125px 100px 125px;
        border-color:transparent transparent #F5C181 transparent;
        border-style:solid;
        position:absolute;
      }
      #t3{
        border-color:transparent transparent #FFEECF transparent;
        top:50;
      }
      #t1{
        border-color:transparent transparent #00A79D transparent;
        top:150;
      }
    </style>`
  },
  {
    name:'battel 35',
    src:`<div id="i"></div>
    <div id="s1"></div>
    <div id="s2"></div>
    <style>
      body{
        background:#293462;
        margin:0px;
        padding:0px;
        height:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
      }
      #i{
        height:150px;
        width:100px;
        background:#FFF1C1;
        border-radius:50px 50px 20px 20px 
      }
      #s1{
        height:10px;
        width:30px;
        background:#A64942;
      }
      #s2{
         height:40px;
        width:30px;
        background:#FE5F55;
        border-radius:0px 0px 10px 10px 
      }
    </style>`
  },
  {
    name:'battel 36',
    src:`<div ></div>
    <div ></div>
    <div ></div>
    <div ></div>
    <div ></div>
    <style>
      body{
        background:#1A4341;
        margin:0px;
        padding:0px;
        height:100%;
        display:flex;
        align-items:center;
        justify-content:space-evenly;
      }
      div{
         width:50px;
        height:200px;
        position:relative;
      }
      div:nth-child(odd){
        background:#F3AC3C;
        border-radius:25px 25px 0px 0px;
        top:50px;
      }
      div:nth-child(even){
        background:#998235;
        border-radius:0px 0px 25px 25px;
        top:-50;
      }
    </style>`
  },
  {
    name:'battel 37',
    src:`<div id="a" ></div>
    <div id="b"></div>
    <div id="c"></div>
    <style>
      body{
        background:#6592CF;
        margin:0px;
        padding:0px;
        height:100%;
        display:flex;
        align-items:center;
        justify-content:center;
      }
      div{
        position:absolute;
      }
      #a{
        width:250;
        height:250px;
        background:#243D83
      }
      #b{
        width:150;
        height:150px;
        background:#6592CF;
        transform:rotate(15deg)
      }
      #c{
        width:75;
        height:75px;
        background:#243D83;
        transform:rotate(30deg)
      }
     
    </style>`
  },
  {
    name:'battel 38',
    src:`<div id="a" ><div id="c"></div></div>
    <div id="b" ><div id="d" ></div></div>
    <style>
      body{
        background:#293462;
        margin:0px;
        padding:0px;
        height:100%;
      }
      div{
        position:absolute;
      }
      #a{
        width:200;
        height:200px;
        background:#FFF1C1;
        border-right:100px solid #FE5F55;
      }
      #b{
        width:200;
        height:200px;
        background:#FFF1C1;
        border-bottom:100px solid #FE5F55;
      }
      #c{
        width:100px;
        height:50px;
        background:#A64942;
        left:200;
        top:150;
      }
      #d{
        width:50px;
        height:100px;
        background:#A64942;
        left:150;
        top:200;
      }
     
    </style>`
  },
  {
    name:'battel 39',
    src:`<div id="a" ></div>
    <div id="b" ><div class="b" ></div><div class="b" ></div><div class="b" ></div></div>
    <div id="c" ></div>
    <style>
      body{
        background:#1A4341;
        margin:0px;
        padding:0px;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
      }
      #a{
        width:200px;
        height:200px;
        background:#998235;
        border-radius:50%;
      }
      #b{
        position:absolute;
        width:250px;
        height:140px;
        background:#1A4341;
        display:flex;
        flex-direction:column;
        justify-content:space-evenly;
      }
      .b{
        width:250px;
        height:20px;
        background:#F3AC3C;
      }
       #c{
        position:absolute;
        width:250px;
        height:250px;
        background:transparent;
         border:200px solid #1A4341;
         border-radius:50%;
      }
    </style>`
  },
  {
    name:'battel 40',
    src:`<div id="c"></div>
    <div id="a"></div>
    <style>
      body{
        background:#6592CF;
        margin:0px;
        padding:0px;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
      }
      #a{
        position:absolute;
        height:100px;
        border-left:50px solid #243D83;
        border-right: 50px solid #6592CF;
        top:50;
        left:100;
      }
      #c{
        width: 100px;
        height: 100px;
        border:50px solid #243D83;
        border-radius:50%;
      }
    </style>`
  },
  {
    name:'battel 41',
    src:`<div id="a2"></div>
    <div class="d1"></div>
    <div class="d1" id="d2"></div>
    <div id="a1"></div>
    <div class="c1"></div>
    <div class="c1" id="c2"></div>
    <style>
      body{
        background:#293462;
        margin:0px;
        padding:0px;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
      }
      #a1{
        height:140px;
        border-left:50px solid #FE5F55;
        border-radius:40px 0px 0px 0px;
      }
      #a2{
        height:140px;
        border-right:50px solid #FE5F55;
        border-radius:0px 40px 0px 0px
      }
      .d1{
        position:absolute;
        width:30px;
        height:30px;
        border-radius:50%;
        background:#293462;
        top:140;
        left:165
      }
      #d2{
        margin-left:40
      }
      .c1{
        position:absolute;
        width:80px;
        height:80px;
        border-radius:50%;
        background:#293462;
        top:180;
        left:120;
      }
      #c2{
        margin-left:80
      }
    </style>`
  }
];
battels[5]=[
  'https://cssbattle.dev/battle/8',
  {
    src:`<div class="h" id="h1"></div>
    <div class="h" id="h1"></div>
    <div class="e" id="e1"></div>
    <div class="e" id="e2"></div>
    <div id="m"></div>
    <div id="f"></div>
    <style>
      body{
        margin:0px;
        padding:0px;
        background:#FE5F55;
        display:flex;
        justify-content:center;
        align-items:center;
        height:100%;
      }
      .h{
        width:100px;
        height:100px;
        background:#FFF1C1;
        border-radius:50%;
        position:relative;
        top:-100;
      }
      .e{
        width:60px;
        height:60px;
        position:absolute;
        background:#FFF1C1;
        border-radius:50%;
        top:140;
        left:120;
      }
      #e2{
        left:220;
      }
      #m{
        width:40px;
        height:10px;
        border-radius:10px;
        position:absolute;
        background:#FFF1C1;
        top:220px;
      }
      #f{
        width:200px;
        position:absolute;
        height:200px;
        background:transparent;
        border :200px solid #293462;
        border-radius:300px 300px 250px 250px 
      }
    </style>`
  },
  {
    src:` <div class="b" id="b1"></div>
<div class="b" id="b2"></div>
<style>
  body{
    margin:0px;
    padding:0px;
    background:#6592CF;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100%;
  }
  .b{
    height:180px;
    width:40px;
    border:30px solid #243D83;
    position:relative;
  }
    #b1{
      border-left:0px;
    border-radius:0px 80px 80px 0px;
      left:15px;
  }
  #b2{
     border-right:0px;
    border-radius:80px 0px 0px 80px;
    right:15px;
  }
  
</style> `
  },
  {
    src:`<div class="b" id="b1"></div><div id="a"><div class="p"></div><div class="p"></div><div class="p"></div><div class="p"></div></div><div class="b" id="b2"></div>
<style>
  body{
    margin:0px;
    padding:0px;
    background:#1A4341;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100%;
  }
  #a{
    height:180px;
    width:155px;
    background:#F3AC3C;
     display:flex;
    flex-direction:column;;
    justify-content:space-evenly;
  }
  .p{
    width:155px;
    height:20px;
    background:#1A4341;
  }
  .b{
    height:300px;
    border-radius:0px 300px 300px 0px;
    position:relative;
  }
  #b1{
    border-right:300px solid #1A4341;
    left:29;
  }
  #b2{
    border-left:300px solid #1A4341;
    border-radius:300px 0px 0px 300px;
    right:29
  }
</style>

    `
  }
];
battels[6]=[
  'https://cssbattle.dev/battle/9',
  {
    src:`<div class="b" id="b1"></div><div class="b" id="b2"></div><div class="b" id="b4"></div><div class="b" id="b3"></div>
    <style>
      body{
        margin:0px;
        padding:0px;
        background:#1A4341;
        display:flex;
        justify-content:center;
      }
      .b{
        width: 210px;
        height: 180px;
        border:20px solid #F3AC3C;
        border-width:0px 30px 30px 30px ;
        position:absolute;
      }
      #b2{
        width: 90px;
        height: 120px;
        border-color:#998235;
      }
      #b3{
        width: 0px;
        height: 300px;
        border-color:#F3AC3C;
        border-width:15;
      }
      #b4{
        width: 240px;
        height: 0px;
        border-color:#998235;
        border-width:15;
        top:240
      }
    </style>
    `
  },
  {
    src:`
    <div class="b" id="b1"></div>
    <div class="b" id="b2"></div>
    <div class="c"></div>
    <style>
      body{
        margin:0px;
        padding:0px;
        display:flex;
        height:100%;
        background:#FFF1C1;
        justify-content:center;
        align-items:center;
      }
      .b {
        width: 150px;
        height: 160px;
        background: #FE5F55;
        transform:rotate(45deg);
        position:relative;
        top:65;
        left:16;
      }
      .c{
        width:200px;
        height:200px;
        border:300px solid #293462;
        background:transparent;
        position:absolute;
        border-radius:50%;
      }
      #b1{
         width: 50px;
        height: 50px;
        left:5px;
      }
      #b2{
        top:69;
        left:12;
      }
    </style>
    `
  }
];
battels[7]=[
  'https://cssbattle.dev/battle/10',
  {
    src:`<div class="bar" id="a"></div>
    <div class="bar" id="b"></div>
    <div class="bar" id="c"></div>
    <div class="cl" id="c1">
    <div class="dt" id="d1"></div>
      <div class="dt" id="d2"></div>
      <div class="dt" id="d3"></div>
    </div>
    <style>
      body{
        padding:0px;
        margin:0px;
        background:#1A4341;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
      }
      div{
        background:#F3AC3C;
        position:absolute;
      }
      .bar{
        height:180px;
        width:10;
        border-radius:10px;
      }
      #a{
        top:50;
      }
      #b{
        left:204px;
        top:55;
        transform:rotate(60deg);
      }
      #c{
         left:204px;
        top:65px;
        transform:rotate(120deg);
      }
      .cl{
        width:100px;
        height:100px;
        border-radius:50%;
      }
      .dt{
        width:30px;
        height:30px;
        border-radius:50%;
        background:#998235;
        position:relative;
      }
      #d1{
        top:20;
        left:20
      }
      #d2{
        height:20px;
        width:20px;
        top:35;
        left:40;
      }
      #d3{
        height:10;
        width:10;
        top:-30;
        left:70}
    </style>
    `
  },
  {
    src:`<div class="bar" id="a">
      <div class="bar" id="b">
      <div class="bar" id="c">
    </div></div>
    </div>

    <style>
      body{
        padding:0px;
        margin:0px;
        background:#293462;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
      }
      .bar{
        height:100px;
        width:200px;
        background:#A64942;
        border-bottom:20px solid #A64942;
         border-radius:20px;
      }
      #b{
        border-width:0px;
        background:#FE5F55;
        display:flex;
        justify-content:center;
        align-items:center;
      }
      #c{
        width:140;
        height:20;
      }
    </style>`
  },
  {
    src : `<div id="a"><div id="b"></div><div id="c"><div id="d"></div><div id="e"></div></div></div>
    <style>
      body{
        padding:0px;
        margin:0px;
        background:#6592CF;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
      }
      #b{
        width:0px;
        height:0px;
        border-width:0px 100px 100px 100px;
        border-color:transparent transparent #243D83;
        border-style:solid
      }
      #c{
        width:150px;
        height:100px;
        background:#243D83;
        position:relative;
        left:25;
        border-radius:0px 0px 10px 10px ;
      }
      #d{
        background:#EEB850;
        width:50px;
        height:50px;
        position:relative;
        top:50;
        left:50;
        border-radius:10px 10px 0px 0px ;
      }
      #e{
        background:#EEB850;
        width:100px;
        height:10px;
        position:relative;
        top:-55;
        left:25;
        border-radius:10px;
      }
    </style>`
  },
  {
    src:`<div id="d"></div>
    <div class="d" id="d1"></div>
    <div class="d" id="d2"></div>
    <div class="d" id="d3"></div>
    <div class="d" id="d4"></div>
    <div class="d" id="d5"></div>
    <div id="c"></div>
    <div id="b"></div>
    <div id="a"></div>
    <style>
      body{
        padding:0px;
        margin:0px;
        background:#1A4341;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
      }
      #a{
        width:100px;
        border-width:60px 0px 80px 0px;
        border-style:solid;
        border-color:#F3AC3C #F3AC3C#998235;
        border-radius:20px;
      }
      #b{
        width:50px;
        height:20px;
        background:#F3AC3C;
        border-radius:10px 10px 0px 0px;
      }
      #c{
        width:20px;
        height:20px;
        background:#F3AC3C;
      }
      #d{
        width:150px;
        height:20px;
        background:#F3AC3C;
        border-radius:10px;
        position:relative;
        left:25
      }
      .d{
        width:20px;
        height:20px;
        background:#998235;
        position:absolute;
        border-radius:50%;
      }
      #d1{top:100;left:280}
      #d2{top:130;left:280}
      #d3{height:40;background:#F3AC3C;left:280;top:50;border-radius:10px;
      }
      #d4{
        height:50px;width:50px;top:140;left:150
      }
       #d5{background:#F3AC3C;
        height:50px;width:50px;top:140;left:200
      }
     
    </style>`
  },
  {
    src:`<div class="h"></div>
    <div id="m"><div id="c"></div><div class="l1"></div><div class="l1" style="top:-10"></div></div>
      <div id="h2" class="h"></div>
    <style>
      body{
        padding:0px;
        margin:0px;
        background:#293462;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
      }
      #m{
        width:150px;
        height:100px;
        background:#FFF1C1;
        border-radius:0px 0px 50px 50px ;
      }
      .h{
        height:40px;
        width:50px;
        position:relative;
        top:-20;
        border-radius:50px 0px 0px 50px;
        border:10px solid #FFF1C1;
        border-right:0px;
      }
      #h2{
        border:10px solid #FFF1C1;
        border-left:0px;
        border-radius:0px 50px 50px 0px;
      }
      #c{
        height:40px;
        width:40px;
        border-radius:50%;
        background:#FE5F55;
        position:relative;
        top:40;
        left:90px;
      }
      .l1{
        width:40px;
        height:10px;
        background:#FE5F55;
        border-radius:10px;
        position:relative;
        top:-20;
        left:20;
      }
     
    </style>`
  },
  {
    src : `<div class="c" id="c1"></div>
    <div class="c" id="c2"></div>
    <div class="c" id="c3"></div>
    <div id="a1">
      <div class="p">
        <div class="h"></div>
        <div class="b"></div>
      </div>
      <div class="p">
        <div class="h"></div>
        <div class="b"></div>
      </div>
      <div class="p">
        <div class="h"></div>
        <div class="b"></div>
      </div>
    </div>
    <div id="a2">
      <div class="p">
        <div class="h"></div>
        <div class="b"></div>
      </div>
      <div class="p">
        <div class="h"></div>
        <div class="b"></div>
      </div>
      <div class="p">
        <div class="h"></div>
        <div class="b"></div>
      </div>
      <div class="p">
        <div class="h"></div>
        <div class="b"></div>
      </div>
    </div>
    <style>
      
      body{
        padding:0px;
        margin:0px;
        background:#6592CF;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
      }
      .c{
        position:absolute;
        width:40px;
        height:40px;
        background:#EEB850;
        border-radius:50%;
        top:120;
        left:30
      }
      #c2{
         width:60px;
        height:60px;
         top:100;
        left:65;
      }
      #c3{
        left:120
      }
      #a1{
        display:flex;
        width:135;
        position:relative;
        left:-15;
        justify-content:space-around;
      }
      #a2{
        display:flex;
        width:180;
        position:relative;
        left:15;
        justify-content:space-around;
      }
      .h{
        height:20px;
        width:20px;
        background:#243D83;
        border-radius:50%;
        position:relative;
        top:15;
      }
      .b{
        height:50px;
        width:10px;
        background:#243D83;
         position:relative;
        top:5;
        left:5;
      }
     
    </style>`
  }
];
battels[8]=['https://cssbattle.dev/battle/11',
{
  src: `<div class="c"><div class="b"></div></div>
  <div class="bo"></div>
  <style>
     body{
      margin:0;
      padding:0;
      background:#19191A;
      display:flex;
      height: 100%;
      justify-content:center;
      align-items:center;
       flex-direction:column;
    }
    .c {
      width: 150px;
      height: 150px;
      background: #4F77FF;
      border-radius:100%;
        position:relative;
     top:38px;
    }
    .b{
      position:relative;
     top:75px;
      border-radius:0 0 0 100px;
       width: 75px;
      height: 75px;
       background: #9AD5FF;
    }
    .bo{
      position:relative;
     top:-37px;
      right:38px;
      z-index:-1;
      background: #F9E492;
      width:75px;
      height:125px;
    }
  </style>`
},
{
  src: `<div class="b b1"><div class="n n1"></div><div class="n n2"></div><div class="n n3"></div><div class="n n4"></div>
  </div><div class="b b2"><div class="n n5"></div>
  </div>
  <div class="b b3"></div>
  <style>
     body{
      margin:0;
      padding:0;
      background:#F9E492;
       height: 100%;
      display:flex;
      justify-content:center;
      align-items:center;
       flex-direction:column;
    }
    .b{
      height:100px;
      width:100px;
      background:#191919;
       display:flex;
      justify-content:center;
      align-items:center;
    }
    .b1{
      height:60px;
      background:#F9E492;
       justify-content:space-evenly;
    }
    .b2{
      height:40px;
      border-radius:0px 0px 10px 10px
    }
    .b3{
      height:45px;
      width:50px;
      border-radius:0px 0px 10px 10px;
    }
    .n{
      height:50px;
      width:20px;
       background:#191919;
      margin:2;
      border-radius:100px;
      position:relative;
    }
    .n1{
      margin-left:4;
      height:43px;
      top:2
    }
    .n2{
       height:53px;
      top:-3
    }
    .n3{
      height:45px;
      top:3
    }
    .n4{
      height:35px;
      top:8;
      margin-right:0;
    }
    .n5{
      border:5px solid #F9E492;
      height:65;
      left:-33px;
      top:-16px;
      transform:rotate(60deg);
    }
  </style>
  `
},
{
  src: `<div class="container">
  <div class="b1">
</div>
  <div class="b2">
</div>
  <div class="b2 b3">
</div>
  <div class="b1 b4">
</div>
</div>
<style>
  body {
    margin:0;
    padding:0;
    background:#191919;
     height: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    
  }
  .container{
    width: 200px;
    height: 200px;
    background:#191919;
    display:flex;
    flex-wrap:wrap;
  }
  .b1{
    position:relative;
    top:50;
    width: 100px;
    height: 50px;
    background: #F9E492;
    border-radius:400px 400px 0 0; 
  }
  .b2{
    position:relative;
    top:0;
    width: 50px;
    height: 100px;
    background: #4F77FF;
    border-radius:0 400px 400px 0; 
  }
  .b3{
    top:100px;
    right:100;
    border-radius: 400px 0 0 400px; 
  }
  .b4{
    top:-25px;
     right:-100px;
    border-radius: 0 0 400px 400px;
   
  }
</style>`
},
{
  src:`<div class="b b1"><div class="c c1"></div><div class="c c2"></div></div>
  <div class="b b2"><div class="c c3"></div>
  <div class="f f1"></div>
    <div class="f f2"></div>
    <div class="f f3"></div>
  </div>
  <style>
    body{
      margin:0;
      padding:0;
      background:#191919;
       height: 100%;
      display:flex;
      justify-content:center;
      align-items:center;
       flex-direction:column;
    }
    .b{
      width: 120px;
      height: 100px;
      background: #4F77FF;
      
    }
    .b1{
      border-radius:100px 100px 15px 15px;
    }
    .c{
      width: 40px;
      height: 40px;
      background:#191919;
      border-radius:100%;
      position:relative;
      top:53px;
    }
    .c1{
      right:-15;
    }
    .c2{
      top:13px;
      right:-65
    }
    .b2{
      height:30px;
      width:80px;
      border-radius:0 0  20px 20px;
    }
    .c3{
      height:20px;
      width:20px;
      top:-9;
      right:-30;
    }
    .f{
      height:15px;
      width:10px;
       background:#191919;
      position:relative;
      border-radius:10px 10px 0 0 ;
     
    }
    .f1{
      right:-20;
    }
     .f2{
       top:-15;
      right:-35;
    }
    .f3{
       top:-30;
      right:-50;
    }
  </style>` 
},
{
  src:`<div class="b b1">
  <div class="c c1"><div class="c c11"><div class="c 	     c12"></div></div></div>
  <div class="c c2"><div class="c c21"><div class="c 	     c22"></div></div></div>
  <div class="c c3"><div class="c c31"><div class="c 	     c32"></div></div></div>
  <div class="c c4"><div class="c c41"><div class="c 	     c42"></div></div></div>
</div>
<style>
  body{
    margin:0;
    padding:0;
    background:#191919;
     height: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .b{
    width: 110px;
    height: 110px;
    background: #4F77FF;
    
  }
  
  .c{
    width: 60px;
    height: 60px;
    background:#191919;
    border-radius:100%;
    position:relative;
   
  }
  .c1{
    top:-20;
    right:20;
  }
  .c11{
    width:45px;
    height:45px;
    background:#F9E492;
  }
  .c12{
    width:30px;
    height:30px;
    background:#4F77FF;
  }
  .c2{
    top:-80;
    right:-70;
  }
   .c21{
     right:-15;
    width:45px;
    height:45px;
    background:#F9E492;
  }
   .c22{
     right:-15px;
    width:30px;
    height:30px;
    background:#4F77FF;
  }
  .c3{
    top:-50px;
    right:20;
  }
   .c31{
    top:15px;
    width:45px;
    height:45px;
    background:#F9E492;
  }
   .c32{
     top:15px;
    width:30px;
    height:30px;
    background:#4F77FF;
  }
  .c4{
    top:-110;
    right:-70;
  }
   .c41{
     right:-15;
     top:15px;
    width:45px;
    height:45px;
    background:#F9E492;
  }
   .c42{
     top:15px;
     right:-15px;
    width:30px;
    height:30px;
    background:#4F77FF;
  }
</style>
` 
},
{
  src: `<div class="petal b3"><div class="petal b2"><div class="petal b1"></div></div></div>
  <div class="petal b4"></div>
  
  <div class="stik b6"><div class="stik b5"></div></div>
  <style>
     body{
      margin:0;
      padding:0;
       margin-top:5;
      background:#191919;
       height: 100%;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column; 
    }
    .petal{
      background:#4F77FF;
      border:10px solid#191919;
      position:relative;
      border-radius:15px 15px 35px 35px;
      z-index:5;
    }
    .b1{
      right:-25;
      top:-30;
      width:30px;
      height:30px;
      border-radius:100%;
     
    }
    .b2{
      width:100px;
      height:30px;
      right:-12;
      top:-30;
        
    }
    .b3{
      
      top:15;
       width:140px;
      height:30px;
     
    }
    .b4{
      z-index:3;
      top:5;
      width:100px;
      height:50px;
      border-width:0px;
      border-radius:0 0 60px 60px;
    }
    .stik{
      background:#F9E492;
      position:relative;
    }
    .b5{
      top:-20;
      right:10;
      width:40px;
      height:40px;
      border-radius:100%;
    }
    .b6{
      top:5;
      width:20;
      border-radius:10px;
      height:90
    }
  </style>`
},
{
  src: `<div class="c"><div class="h"></div><div class="v v1"></div>
  <div class="c1 c11"></div>
   <div class="c1 c12"></div>
<div class="v v2"></div>
<div class="v v3"></div>
</div>
<style>
  body{
    margin:0;
    padding:0;
    background:#191919;
    height: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .c{
    width: 150px;
    height: 150px;
    background: #4F77FF;
    border-radius:100%;
    z-index=-1;
  }
  .h{
    position:relative;
    right:-70;
     width: 10px;
    height: 150px;
     background:#191919;
  }
  .v{
    position:absolute;
     width: 150px;
    height: 10px;
    background:#191919;
    
  }
  .v1{
    top:105;
  }
  .v2{
    top:145;
  }
  .v3{
    top:185;
  }
  .c1{
     position:absolute;
    width: 180px;
    height: 180px;
    border:10px solid #191919;
    border-radius:100%;
    background:rgba(0,0,0,0);
    top:50;
    right:47;
  }
  .c12{
    right:155;
  }
</style>
`
},
{
  src: `<div id="container">
  <div class="w" id="a"></div>
  <div class="w" id="a"></div>
  <div class="w" id="a"></div>
  <div class="w" id="a"></div>
</div>
<style>
  body{
    margin:0;
    padding:0;
    background:#191919;
    display:flex;
    height: 100%;
    justify-content:center;
    align-items:center;
  }
  .w{
    height:0px;
    width:50px;
    border-width:50px 0px 50px 0px;
    border-color:#191919 #191919 #4F77Ff;
    border-style:solid;
    transform:skewY(-45deg);
    display:flex;
    position:relative;
    top:25;
  }
  div:nth-child(odd) {
   transform:skewY(45deg);
  }
  #container{
    width:200px;
    height:50px;
    border-width:0px;
    background:#4F77FF;
    transform:skewY(0deg);
    position:relative;
    top:-50;
    display:flex;
  }
</style>`
}
];
battels[9]=['https://cssbattle.dev/battle/12',
{
  src:`<p a><p b><p c><p e><p f><p g><p h><p i>
  <style>
    body{
      margin:0px;
      padding:0px;
      height:100%;
      display:flex;
      justify-content:center;
      align-items:center;
      background:#191919;
    }
    p{
      width: 30px;
      height: 30px;
      border:10px solid #5DBCF9;
      border-bottom:0px;
      position:absolute;
    }
    p[a]{
      top:66;
    }
    p[b]{
      width:80px;
      height:53px;
      top:80;
      border-bottom:0px;
    }
    p[c]{
      width:80px;
      height:25px;
      top:130;
      transform:rotate(30deg);
      Border-left:0px;
      left:185
    }
    p[e]{
      width:80px;
      height:25px;
      top:130;
      transform:rotate(-30deg);
      Border-right:0px;
      left:124
    }
    p[f]{
      width:0px;
      height:55px;
      border-width:5px;
      top:120;
    }
    p[g]{
      width:180px;
      height:0px;
      top:178;
      border-color:#191919;
    }
     p[h]{
      width:180px;
      height:0px;
      top:188;
      border-color:#5DBCF9;
    }
    p[i]{
      width:90px;
      height:0px;
      top:208;
      border-color:#5DBCF9;
    }
  </style>
  `
},
{
  src:`<div id="a"><p b><p e><p c></div>
  <style>
    body{
      margin:0px;
      padding:0px;
      height:100%;
      display: flex;
      align-items:center;
      justify-content:center;
      background:#191919;
      z-index:10;
    }
    #a{
      width: 150px;
      height: 200px;
      background: #F2AD43;
      border-radius:75px 75px 20px 20px;
    }
    p{
      position:relative;
      border-radius:50%;
    }
    p[b]{
      width: 60px;
      height: 60px;
      background: #FFF58F;
      left:45;
      top:75;
    }
    p[c]{
      top:-108;
      left:50;
      height:100px;
      width:100px;
      border-radius:100px 0px 20px 0px;
      background:#824B20;
    }
    p[e]{
      top:8;
      left:;
      height:100px;
      width:100px;
      border-radius:0px 100px 0px 20px;
      background:#E08027;
    }
  </style>`
},
{
  src:`<div id="a"><p b><p c><p d><p e><p f></div>
  <style>
    body{
      margin:0px;
      height:100%;
      display: flex;
      align-items:center;
      justify-content:center;
      background:#191919;
    }
    #a{
      width:190px;
      height:190px;
    }
    p{
      height:50px;
      width:50px;
      border-radius:50px 50px 0px 50px;
      border:10px solid #5DBCF9;
      position:relative;
    }
    p[b]{
      top:-17;
      left:1;
    }
    p[c]{
      top:18;
      left:1;
      border-radius:50px 0px 50px 50px;
    }
    p[d]{
      top:-67;
      left:121;
      border-radius:0px 50px 50px 50px;
    }
     p[e]{
      top:-272;
      left:121;
      border-radius:50px 50px 50px 0px;
    }
     p[f]{
      top:-298;
      left:61;
      border-radius:0px;
    }
    
  </style>`
},
{
  src:`<div id="a"><p b><p c><p e></div>
  <style>
    body{
      margin:0px;
      height:100%;
      display: flex;
      align-items:center;
      justify-content:center;
      background:#191919;
    }
    #a{
      width:100px;
      height:100px;
      border-radius:50%;
      background:#E08027;
      border:30px solid #824B20;
    }
    p[b]{
       width:80px;
      height:40px;
      border:20px solid #FFF58F;
      border-top:0px;
      border-radius:0px 0px 80px 80px;
      position:relative;
      top:34;
      left:-10;
      background:#E08027;
    }
    p{
      width:20px;
      height:20px;
      position:relative;
      border-radius:50%;
      background:#FFF58F;
      top:-52;
      left:-10;
    }
    p[e]{
      left:90;
      top:-88;
    }
  </style>`
},
{
  src:`<div id="a">
  <div id="bb"></div>
  <div class="box" id="ba"></div>
<div class="ccl" id="b"><div class="ccl" id="c"><div class="ccl" id="d"></div></div></div>
<style>
  body{
    padding:0px;
    margin:0px;
    height:100%;
    display: flex;
    align-items:center;
    justify-content:center;
    background:#191919;
  }
  #bb{
    height:50px;
    width:50px;
    background:#5DBCF9;
    position:relative;
      top:75;
    border-radius:10px 0px 0px 10px 
  }
  .box{
    height:50px;
    width:0px;
    border-right:75px solid #5DBCF9;
    background:white;
    border-top:75px solid #191919;
    border-bottom:75px solid #191919;
     position:relative;
    right:-50;
      top:-50;
  }
  #a{
    width:250px;
    height:200px;
  }
  .ccl{
    height:180px;
    width:90px;
    border-radius:0px 100px 100px 0px;
    border:10px solid #5DBCF9;
    background:#191919;
    position:relative;
    border-left:0px;
  }
  #b{
    top:-248px;
    left:150;
  }
  #e{
    top:20;
    height:80px;
    width:40px;
  }
  #c{
    top:15px;
    height:130px;
    width:65px;
  }
  #d{
    top:15px;
    height:80px;
    width:40px;
  }
</style>`
},
{
  src:`<div id="a">
  <div class="c" id="b"></div>
   <div class="c" id="d"></div>
  <div class="c" id="e"></div>
  <div class="c" id="f"></div>
  <div  id="box">
  	<div id="face"></div>
    <div class="ear" id="e1"></div>
    <div class="ear" id="e2"></div>
  </div>
</div>
<style>
  body{
    padding:0px;
    margin:0px;
    height:100%;
    display: flex;
    align-items:center;
    justify-content:center;
    background:#191919;
  }
  #a{
    width:250px;
    height:100px;
    background:#F2AD43;
  }
  .c{
    height:100px;
    width:100px;
    background:#191919;
    border-radius:50%;
    position:relative;
  }
  #b{
    left:-50;
  }
  #d{
    height:100px;
    width:150px;
    left:-10;
    top:-40px;
  }
  #e{
    height:100px;
    width:150px;
    left:110;
    top:-140px;
  }
   #f{
    left:200;
    top:-300px;
  }
  #box{
    width:80px;
    height:30px;
    background:#191919;
    position:relative;
    top:-400;
    right:-85;
    border-radius:0px 0px 10px 10px;
  }
  #face{
    width:20px;
    height:25px;
    border-radius:5px 5px 0px 0px ;
    background:#F2AD43;
    position:relative;
    top:10px;
    right:-30;
  }
  .ear{
    width:10px;
    height:10px;
    background:#F2AD43;
    border-radius:50%;
    position:relative;
    top:-15px;
  }
  #e1{
    right:-25;
    top:-20;
  }
  #e2{
    right:-45;
    top:-30;
  }
 
</style>`
},
{
  src:`<div class="slids" id="s1">
  <div class="box">
  </div>
  <div class="box">
  </div>
  <div class="box">
  </div>
</div>
<div class="slids" id="s2">
   <div class="box">
  </div>
  <div class="box">
  </div>
  <div class="box">
  </div>
</div>
<div class="slids" id="s3">
  <div class="box">
  </div>
  <div class="box">
  </div>
  <div class="box">
  </div>
</div>
<div class="slids" id="s4">
  <div class="box">
  </div>
  <div class="box">
  </div>
  <div class="box">
  </div>
</div>
<style>
  body{
    padding:0px;
    margin:0px;
    height:100%;
    background:#5DBCF9;
  }
  .slids{
    width:160px;
    height:500px;
    display: flex;
   	flex-direction:column;
    position:absolute;
  }
  .box{
    width:140px;
    height:110px;
    background:#191919;
    margin:25px 5px 15px 5px; 
  }
  #s1{
    top:-55;
    left:-100;
  }
  #s2{
    top:-105;
    left:50;
  }
  #s3{
    top:-55;
    left:200;
  }
  #s4{
    top:-105;
    left:350;
  }
</style>`
},
{
  src:`<div class="c" id="b">
  </div>
    <div id="a">
  </div>
  <div class="c" id="d">
  </div>
  <style>
    body{
      padding:0px;
      margin:0px;
      height:100%;
      display: flex;
      align-items:center;
      justify-content:center;
      background:#191919;
    }
    #a{
      width:120px;
      height:120px;
      background:#E08027;
      border-radius:100px 100px 20px 20px; 
      z-index:1;
    }
    .c{
      height:50px;
      width:50px;
      border-radius:50%;
      background:#F2AD43;
      position:absolute;
    }
    #b{
      top:66;
    }
    #d{
      top:185;
      background:#824B20;
    }
  </style>`
}
];

battels[10]=['https://cssbattle.dev/battle/13',
{
  src:`<div class="b" id="bl">
  <div class="c" id="cl">
      <div class="e" id="el"></div>
  </div>
</div>
<div class="b" id="bx"></div>
<div class="b" id="br">
  <div class="c">
      <div class="e"></div>
  </div>
</div>
<style>
  body {
      background: #191919;
      margin: 0px;
      padding: 0px;
  }

  .b,
  .c {
      width: 115px;
      height: 115px;
      background: #E08027;
      border-radius: 0px 100px 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
  }

  .c {
      width: 90px;
      height: 90px;
      background: #191919;
      border-radius: 100%;
  }

  .e {
      height: 6px;
      width: 12px;
      border: 9px solid #E08027;
      border-radius: 100px 100px 0px 0px;
      border-bottom: 0px;
      position: relative;
      top: -2px;
  }

  #bl {
      top: 77;
      left: 89
  }

  #bx {
      height: 50px;
      width: 50px;
      transform: rotate(45deg);
      border-radius: 0px;
      top: 163;
      left: 175;
  }

  #br {
      border-radius: 100px 0px 100px 100px;
      border: 10px solid #191919;
      top: 67;
      right: 79;
  }
</style>`
}
];
battels[11]=['https://cssbattle.dev/battle/14',
{
  src:`<div id="one">
  <div class="note" id="n1">
    <div class="box" id="b1">
      <div class="ibox" id="ib1"></div>
    </div>
    <div class="oval" id="o11"></div>
    <div class="oval" id="o12"></div>
  </div>
  <div class="note" id="n2">
    <div class="box" id="b2">
      <div class="ibox" id="ib2"></div>
    </div>
    <div class="oval" id="o21"></div>
  </div>
   <div class="note" id="n3">
    <div class="box" id="b3">
      <div class="ibox" id="ib31"></div>
      <div class="ibox" id="ib32"></div>
    </div>
    <div class="oval" id="o31"></div>
  </div>
</div>
<style>
  body{
    margin:0px;
    padding:0px;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#191919;
  }
  #one{
    width: 400px;
    height: 120px;
     display:flex;
    justify-content:center;
    align-items:center;
  }
  .note{
    height:120px;
    width:120px;
    position:relative;
  }
  .box{
    height:100px;
    width:80px;
    background:#FE5F55;
    position:relative;
    left:40px;
  }
  .ibox{
    height:100px;
    width:60px;
    background:#191919;
    position:relative;
    top:10px;
    left:10px;
  }
  .oval{
    height:40px;
    width:50px;
    background:#FE5F55;
    border-radius:50%;
   position:relative;
    top:-20px;
  }
  #o12{
    top:-60;
    left:70
  }
  #n2{
    width:100px;
  }
  #b2{
    width:40px;
    left:60px;
    background:#A64942;
  }
  #ib2{
    width:30px
  }
  #o21{
    background:#A64942;
    left:20;
  }
   #n3{
    width:70px;
    
  }
   #b3{
    width:40px;
    left:30px;
     
  }
   #ib32{
    width:30px;
     top:20;
  }
  #ib31{
    height:10px;
    width:30px
  }
  #o31{
    left:-10;
  }
  
</style>
`
},
{
  src:`<div id="container">
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
`
},
{
  src:`<div class="c" id="c1">
  <div class="c" id="c2">
      <div class="box" id="b1"></div>
      <div class="box" id="b2"></div>
      <div class="box" id="b3"></div>
  </div>
  <div class="cs" id="c3">
      <div class="cs d"></div>
  </div>
  <div class="cs" id="c4">
      <div class="cs d"></div>
  </div>
  <div class="cs" id="c5">
      <div class="cs d"></div>
  </div>
  <div class="cs" id="c6">
      <div class="cs d"></div>
  </div>
  <div class="cs" id="c7">
      <div class="cs d"></div>
  </div>
</div>
<style>
  body {
      margin: 0px;
      padding: 0px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #6592CF;
  }

  .c {
      width: 150px;
      height: 150px;
      background: #6592CF;
      border: 10px solid #243D83;
      border-radius: 50%;
      position: relative;
  }

  #c1 {
      top: 10;
  }

  #c2 {
      width: 100px;
      height: 100px;
      top: 115;
      left: 15;
      border-top: 10px solid #243D83;
  }

  .cs {
      height: 30px;
      width: 30px;
      background: #6592CF;
      border: 10px solid #243D83;
      border-radius: 50%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
  }

  #c3 {
      top: -149;
      right: -50;
  }

  #c4 {
      top: -158;
      right: 20;
  }

  #c5 {
      top: -137;
      right: 20;
  }

  #c6 {
      top: -186;
      right: -120;
  }

  #c7 {
      top: -306;
      right: -120;
  }

  .box {
      width: 14px;
      height: 100px;
      background: #6592CF;
      position: relative;
      top: 13;
      left: -31px;
      transform: rotate(35deg);
  }

  #b2 {
      left: 120px;
      top: -90;
      transform: rotate(-35deg);
  }

  #b3 {
      width: 150px;
      height: 100px;
      top: -170;
      transform: rotate(0deg);
  }

  .d {
      width: 0px;
      height: 0px;
      border-width: 5px;
  }
</style>`
},
{
  src:`<div class="box">
  <div class="k">
      <div class="mk"></div>
  </div>
  <div class="k">
      <div class="mk"></div>
  </div>
  <div class="k"></div>
  <div class="k">
      <div class="mk"></div>
  </div>
  <div class="k">
      <div class="mk"></div>
  </div>
  <div class="k">
      <div class="mk"></div>
  </div>
  <div class="k"></div>
</div>
<style>
  body {
      margin: 0px;
      padding: 0px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #998235;
  }

  .box {
      height: 100px;
      width: 180px;
      background: #191919;
      border-radius: 10px;
      display: flex;
      justify-content: space-evenly;
      align-items: flex-end;
  }

  .k {
      height: 70px;
      width: 20px;
      background: #FFFFFF;
      position: relative;
      border-radius: 5px;
      bottom: 5px;
  }

  .mk {
      height: 35px;
      width: 15px;
      background: #191919;
      position: relative;
      left: 15;
      z-index: 2;
  }
</style>`
}];
battels[12]=['https://cssbattle.dev/battle/15',
{
  src:`<p id="one"></p>
<p></p>
<p ></p>
<p ></p>
<div></div>
<style>
  body{
    margin:0px;
    padding:0px;
    background:#191919;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100%
  }
  p{
    height:40px;
    width:40px;
    margin-top:40px;
    margin-right:2px;
    border-radius:100%;
    border:20px solid #8F8F8F;
  }
  #one{
    border-color:#714B67;
  }
  div{
    height:70px;
    background:#8F8F8F;
    width:20px;
    border-radius:10px;
    position:absolute;
    left:178;
    top:102
    
  }
</style>`
},
{
  src:`<div>
	<div id="c"></div>
	<div id="s"></div>
  </div>
<style>
  body{
    padding:0px;
    margin:0px;
    background:#F3AC3C;
    display:flex;
    height:100%;
    justify-content:center;
    align-items:center;
  }
  div {
    width: 100px;
    height: 100px;
   	border:30px solid #998235;
    transform: rotate(45deg);
    display:flex;
    justify-content:center;
    align-items:center;
  }
  #c{
    width:30px;
    height:30px;
    border:0px;
    background:#1A4341;
    transform: rotate(0deg);
    z-index:1;
  }
  #s{
    width: 70px;
    height: 70px;
    position:absolute;
    border:30px solid #F3AC3C;
    transform: rotate(0deg);
    top:-65;
    right:35
  }
</style>
`
},
{
  src:`<div><div class="c" id="c1"></div>
  <div class="c" id="c2"></div>
  <div class="c" id="c3"></div>
  <div class="c" id="c4"></div>
  </div>
  <div id="b"><div id="cc"></div></div>
  <style>
    body,#b{
      background:#243D83;
      margin:0px;
      padding:0px;
      display:flex;
      height:100%;
      justify-content:center;
      align-items:center;
    }
    div {
      width: 200px;
      height: 200px;
      display:flex;
      flex-wrap:wrap
    }
    .c{
      width: 100px;
      height: 100px;
      background:#6592CF;
      border-radius:100%;
      position:relative;
    }
    #c1{
      top:7.5;
      right:-8
    }
     #c2{
      top:7.5;
      right:8
    }
    #c3{
      top:-7.5;
      right:-8
    }
    #c4{
      top:-7.5;
      right:8
    }
    #b{
      position:absolute;
      background:#243D83;
      transform:rotate(45deg);
      height:120;
      width:120
    }
    #cc{
      height:60;
      width:60;
      background:#EEB850;
      border-radius:100%
    }
  </style>`
},
{
  src:`<div class="s" id="s1"></div>
  <div class="s" id="s2"></div>
  <div class="s" id="s3"></div>
  <div class="s" id="s4"></div>
  <style>
    body{
      background:#191919;
      margin:0px;
      padding:0px;
    }
    .s{
      height:130px;
      width:40px;
      background:#FE5F55;
      position:absolute;
      border-radius:0 0 20px 20px
    }
    #s1{
      left:180
    }
    #s2{
      border-radius:20px 20px 0px 0px;
      top:170;
      right:180
    }
    #s3,#s4{
       height:40px;
      width:180px;
      border-radius: 0px 20px 20px 0px ;
      background:#A64942;
      top:130
    }
    #s4{
      right:0px;
      border-radius: 20px 0px 0px 20px ;
    }
  </style>`
},
{
  src:`<div id="b1"></div>
  <div id="b2"></div>
  <div id="b3"></div>
  <style>
    body{
      margin:0px;
      padding:0px;
      background:#D25B70;
      display:flex;
      justify-content:center;
      align-items:center;
      height:100%;
    }
    div{
      height:100px;
      width:100px;
      background:#F7F3DA;
      position:absolute;
    }
    #b1{
      top:150
    }
    #b2{
      transform:rotate(37deg);
      background:#6CB3A9;
      width:60px;
      height:60px;
      right:225;
      top:80;
    }
     #b3{
      transform:rotate(37deg);
      background:#F6DF96;
      width:80px;
      height:80px;
      right:10;
      top:55;
       left:203; 
    }
    
  </style>
  `
},
{
  src:`<div id="m"><div class="s" id="s1"></div><div class="s" id="s2"></div><div class="s" id="s3"></div><div class="s" id="s4"></div></div>
  <style>
    body {
      background: #191919;
      margin:0px;
      padding:0px;
      display:flex;
      height:100%;
      justify-content:center;
      align-items:center;
    }
    #m{
      height:150px;
      width:100px;
      background:#4F77FF;
      transform:rotate(180deg);
      border-radius:0px 0px 100px 100px
    }
    .s{
      background:#191919;
      height:20px;
      width:20px;
      margin-bottom:4px
    }
    #s1{
      width:80px
    }
    #s2{
      width:60px
    }
    #s3{
      width:40px
    }
    #s4{
      width:20px
    }
  </style>
  `
  
},
{
    src:`<div class="g" id="g1">
    <div class="g3"></div>
    <div class="g3 g4"></div>
</div>
<div class="g" id="g2">
    <div class="g3"></div>
    <div class="g3 g4"></div>
</div>
<div id="y"></div>
<style>
    body {
        margin: 0px;
        padding: 0px;
        background: #F3AC3C;
    }

    .g {
        width: 100px;
        height: 100px;
        background: #1A4341;
        position: absolute;
        border-radius: 10px;
    }

    div {
        border-radius: 10px;
    }

    #g1 {
        top: 65;
        left: 65
    }

    #g2 {
        bottom: 65;
        right: 65;
        transform: rotate(180deg);
    }

    #y {
        height: 70px;
        width: 70px;
        background: #F3AC3C;
        position: absolute;
        right: 165;
        top: 115;
        border-radius: 10px;
    }

    .g3 {
        width: 150px;
        background: #1A4341;
        height: 50px;
    }

    .g4 {
        height: 10;
        background: #1A4341
    }
</style>`
}
,
{
  src:`<div class="p" id="r"></div>
  <div class="p" id="l"></div>
  <div class="w" id="wr"></div>
  <div class="w" id="wl"></div>
  <style>
      body {
          background: #F7F3DA;
          margin: 0px;
      }
  
      .p,
      .w {
          height: 70px;
          width: 200px;
          background: #D25B70;
          border-radius: 0px 10px 10px 0px;
          position: absolute;
      }
  
      .w {
          background: #F7F3DA;
          border-radius: 0px 20px 20px 0px;
      }
  
      #l,
      #wl {
          transform: rotate(180deg);
          right: 0px;
          top: 120px;
      }
  
      #wl {
          top: 80px;
      }
  
      #r,
      #wr {
          left: 0px;
          top: 110px;
      }
  
      #wr {
          top: 150px;
      }
  </style>`
}
];




let frame=document.querySelector('iframe');
let batgallery=document.getElementsByClassName('battelgallary');
let b=1;
let cde=document.getElementsByClassName('cde');
let code=document.getElementById('src');
let pre=document.querySelector('pre');
let abl=document.getElementsByClassName('abl');
// console.log(frame);
function chnge(divid) {
  let c='0';
  let b='0';
  let clr='';
  // console.log(divid);
    for (let i = 0; i < divid.length; i++) {
      if(divid[i]=='c'){
        
        for (let j = i+1; divid[j]!='b'; j++) {
         
          c=c+divid[j];
        }
      }  
      if(divid[i]=='b'){
        
        for (let j = i+1; j<divid.length; j++) {
          
          b=b+divid[j];
        }
      }  
      
     }
    //  console.log(c);
     c=parseInt(c);
     b=parseInt(b);
     abl[0].setAttribute('href',`${battels[c][0]}`);
     abl[1].setAttribute('href',`${battels[c][0]}`);
     let hdname=document.getElementById('name');
     hdname.innerText=`#c${c+1}b${b}`;
     clr=document.getElementById(`cdiv${c}`).style.color;
     hdname.style.color=clr;
     hdname.style.textShadow=`2px 2px 5px ${clr}`;
     code.style.color=clr;
     clr=clr.replace('rgb','rgba');
     clr=clr.replace(')',',0.1)');
     code.style.backgroundColor=clr;
     pre.style.backgroundColor=clr;
     clr=clr.replace('o.1)',',0.7)');
     pre.style.scrollbarColor=`${clr} #51585e00`;
    //  console.log("color "+document.getElementById(`cdiv${c}`).style.color);
    //  console.log(c+" "+b);
    frame.contentDocument.body.innerHTML =battels[c][b].src;
    // i++;
    // console.log(i>battels[j].length);
    // if(i>battels[j].length-1){
    //     i=0;
    // }
  }
  
  function Code() {
    // code.setAttribute('id','src');
    // code.setAttribute('class','language-html');
    let text=frame.contentDocument.body.innerHTML
    // console.log(text);
    // console.log(text.length);
    // text=text.replace("<", "$lt;");
    // text=text.replace('>','&gt;');
    // for (let i = 0; i < text.length; i++) {
    //   if(text[i]=='<'){
    //     console.log(text[i]);
    //     text=text.replace("<", "&lt;");
    //     console.log(text[i]);
    //   }
    //   else if(text[i]=='>'){
    //     text=text.replace('>','&gt;');
    //   }
    // }
    if(b==1){
      batgallery[0].style.display='none';
      cde[0].style.display='flex';
      code.innerText=text;
      b=-b;
    }
    else{
      batgallery[0].style.display='flex';
      cde[0].style.display='none';
      b=-b;
    }
    // console.log(text);
  }
