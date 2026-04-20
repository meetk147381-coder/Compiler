let d1 = document.getElementById("b1");
let d2 = document.getElementById("b2");
let d3 = document.getElementById("b3");
let d4 = document.getElementById("c1");

// Show HTML tab by default
d1.style.display = "block";

function y1(x){
  d1.style.display = "none";
  d2.style.display = "none";
  d3.style.display = "none";

  if(x == "h"){ d1.style.display = "block"; }
  if(x == "c"){ d2.style.display = "block"; }
  if(x == "j"){ d3.style.display = "block"; }
}

function z1(){
  let e1 = d1.value;
  let e2 = d2.value;
  let e3 = d3.value;

  let e4 = d4.contentWindow.document;

  e4.open();
  e4.write(`
    <html>
      <head>
        <style>${e2}</style>
      </head>
      <body>
        ${e1}
        <script>${e3}<\/script>
      </body>
    </html>
  `);
  e4.close();
}

d1.addEventListener("input", z1);
d2.addEventListener("input", z1);
d3.addEventListener("input", z1);

// Initial run
z1();