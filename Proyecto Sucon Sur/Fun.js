function Enviar(){

    
    var iNombre = document.getElementById("txtnombre");
    var iMail = document.getElementById("txtmail");
    var iTel = document.getElementById("numtel");
    var iConsulta=document.getElementById("txtconsulta");
    
    if(iNombre.value==""){
        alert("Ingrese Nombre y Apellido.");
    }
    else if(iMail.value==""){
        alert("Ingrese Mail.");
    }
    else if(iTel.value==""){
        alert("Ingrese numero de telefono.");
    }
    else if(iConsulta.value==""){
        alert("Por favor, haganos saber su consulta.");
    }
    else{
        alert("Su consulta ha sido enviada.");
        iNombre.value="";
        iMail.value="";
        iTel.value="";
        iConsulta.value="";
    }
    }

function Borrar(){
    var iNombre = document.getElementById("txtnombre");
    var iMail = document.getElementById("txtmail");
    var iTel = document.getElementById("numtel");
    var iConsulta=document.getElementById("txtconsulta");

    alert("Los datos han sido borrados.");
        iNombre.value="";
        iMail.value="";
        iTel.value="";
        iConsulta.value="";
}

setInterval(carrusel,5000);
var foto=1
function carrusel(){
   if (foto==1){
    document.getElementById("F1").hidden=true;
    document.getElementById("F2").hidden=false;
    foto=2;
   }
   else if (foto==2){
    document.getElementById("F2").hidden=true;
    document.getElementById("F3").hidden=false;
    foto=3;
   }
   else if (foto==3){
    document.getElementById("F3").hidden=true;
    document.getElementById("F4").hidden=false;
    foto=4;
   }
   else if (foto==4){
    document.getElementById("F4").hidden=true;
    document.getElementById("F5").hidden=false;
    foto=5;
   }
   else if (foto==5){
    document.getElementById("F5").hidden=true;
    document.getElementById("F1").hidden=false;
    foto=1;
    }
}
