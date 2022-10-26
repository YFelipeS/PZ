/* class Miclase {
    a=7;
    constructor() {
      this.a=9;
      alert("la variable a tiene  " + this.a);
    }
    metodo() {
      const b = 7;
      console.log("la variable b tiene  " + b);
    }
    metodo2() {
      const c = 9;
      console.log("la variable c tiene  " + c);
    }
  }
    Miclase = instMiclase = new Miclase(); 




    class summEje{
        num1;
        num2;

        constructor(){
            var num1=document.getElementById("num1").value;
            var num2=document.getElementById("num2").value;
            this.num1=num1;
            this.num2=num2
            console.log(summEje.svalor);

        } 

        get svalor(){
            var suma=parseFloat(this.num1)+parseFloat(this.num2);
            return suma;
        }

        set SRef(num1){
            this.suma=parseFloat(this.num1)+parseFloat(this.num2);
            console.log(suma)

        }





    }
    console.log(summEje.svalor);

    const sumastwo = new summEje();
    */


class animal {
  idanim;
  nomanim;
  tipoanim;
  vacuna;

  metodo(a, b, c, d, e, f) {
    this.idanim = a;
    this.nomanim = b;
    this.tipoanim = c;


    if(d==true && e==false && f==false){
      this.vacuna="Rabia";
    }else{
      if(d==false && e==true && f==false){
        this.vacuna="Moquillo";
      }else{
        if(d==false && e==false && f==true){
          this.vacuna="Covid";
        }else 
        if(d==true && e==true && f==false){
          this.vacuna="Rabia y Moquillo";
        }else if(d==false && e==true && f==true){
          this.vacuna="Moquillo y Covid";
        }else if(d==true && e==false && f==true){
          this.vacuna="Rabia y Covid";
        }else if(d==true && e==true && f==true){
          this.vacuna="Rabia, Moquillo y Covid";
        }else if(d==false && e==false && f==false){
          this.vacuna="No tiene Vacunas";
        }
      }
    }
    var fila=('<p>el codigo del animal es '+this.idanim+' el nombre del animal es  '+this.nomanim+'<br> el tipo de animal es  '+this.tipoanim+'  y tiene las vacunas contra '+this.vacuna+' </p>');

    var btn = document.createElement("p");
       btn.innerHTML=fila;
    document.getElementById("impri").appendChild(btn);
    return btn;
  }

}

const instanimal = new animal();


function elementocreado(){
  const divl=document.createElement("div");
  const comn=document.createElement("comentario");
  const spam=document.createElement("span");
  par=document.createElement("p");
  var parrafo = document.createTextNode("jhon sebastian hurtado");
  par.appendChild(parrafo);
  divl.appendChild(par);
  const otrodiv=divl.cloneNode();
  
  
  divl.id="div1";
  divl.style.background="green"
  spam.id="span1";
  var text = document.createTextNode("clases");
  spam.appendChild(text);
  
  var verid=divl.getAttributeNode("id");
  console.log(verid);
  var cam=divl.setAttribute("id","notiene")
  
  divl.removeAttribute("id")

  
  
  console.log(divl);
  console.log(comn);
  console.log(spam);
  console.log(otrodiv);
  console.log(verid);
}




function implementar(){

  
  var fragmento=document.createDocumentFragment();
  const mi_imagen=document.createElement("img");
  mi_imagen.src="https://miro.medium.com/max/800/0*aH8YUI7nqAZ6b-V_.png";
  mi_imagen.alt="imagen de javascript";
  mi_imagen.style.width="70%";
  fragmento.appendChild(mi_imagen);

  const divprin=document.createElement("div");
  divprin.className="row my-5";
  divprin.textContent="Contenedor principal";
  divprin.style.border=" black 2px"
  const otro_div=document.createElement("div");
  otro_div.className="row mb-5 my-5";
  otro_div.id="div2";
  otro_div.textContent="este es el segundo div";
  otro_div.style.border=" black 2px"
  divprin.appendChild(otro_div);
  fragmento.appendChild(divprin);
  document.getElementById("divfragment").appendChild(fragmento);


};


function comprobar(){
  
  var fragmento2=document.createDocumentFragment();
  var contiene=document.querySelector("html").contains(document.querySelector("body"));
  console.log(contiene);
  

  for(i=0;i<=5;i++){
    const creodiv=document.createElement("div");
    creodiv.className="col mx-3 mb-3";
    creodiv.textContent=`numero de div ${i}`;
    fragmento2.appendChild(creodiv);
    console.log("numero de items en fragmento "+fragmento2.childElementCount);
    console.log("se ha creado el nodo "+creodiv,creodiv.nodeType);
    var textonodo=document.createTextNode("hola me llamo oso");
    console.log("creamos un nodo "+textonodo,textonodo.nodeType);
  }
  document.getElementById("impresion").appendChild(fragmento2);

};






document.querySelector('#btn-trabajo').addEventListener('click', ()=>{

  const btn_trabajo = document.getElementById('btn-trabajo');

  const tabla = document.createElement('table');
  const thead=document.createElement('thead');
  const tbody=document.createElement('tbody');
  const tr = document.createElement('tr');

  tabla.className="table table-dark bg-dark";
  

  const contenido = [];
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellidos').value;
  const direcctorio = document.getElementById('direcctorio').value;
  const telefono = document.getElementById('telefono').value;
  contenido.push(nombre, apellido, direcctorio, telefono);
  console.log(contenido);


  ["Nombre", "Apellido", "Direcctorio", "Telefono"].forEach(function (e){
      var th = document.createElement('th');
      th.textContent=e;
      tabla.appendChild(thead);
      thead.appendChild(th);
  });
  tabla.appendChild(tbody);
  tbody.appendChild(tr);

  for(i=0; i<=contenido.length; i++){
      const td = document.createElement('td');
      td.textContent = contenido[i];
      tr.appendChild(td);
      tbody.appendChild(tr);
      btn_trabajo.style = "display:none";
  }

  document.getElementById("tablas").appendChild(tabla)
  document.getElementById('div_button').innerHTML= '<button id="btn-agregar" class="btn btn-primary mb-3">Agregar Contenido</button>';

  document.querySelector('#btn-agregar').addEventListener('click', ()=>{

      const contenido = [];
      const nombre = document.getElementById('nombre').value;
      const apellido = document.getElementById('apellidos').value;
      const direcctorio = document.getElementById('direcctorio').value;
      const telefono = document.getElementById('telefono').value;
      contenido.push(nombre, apellido, direcctorio, telefono);

      const tr = document.createElement('tr');
      tabla.appendChild(tr);
  
      for(i=0; i<=contenido.length; i++){
          const td = document.createElement('td');
          td.textContent = contenido[i];
          tr.appendChild(td)
          tbody.appendChild(tr);
      }
  
  });
});