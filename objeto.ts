interface Persona {
    Nombre: string;
    Apellido: string;
    Acercade: string;
    Titulo: string;
}

let portfolio: Persona={
    Nombre: " ",
    Apellido: " ",
    Acercade: " ",
    Titulo: " ",
}

function GetNombre(nombre:string):void{
    const nombre1 = document.getElementById("Nombre");
    nombre1.textContent=nombre;
}

function GetApellido(apellido:string):string{
    const a = document.getElementById("Apellido");
    a.textContent=apellido;
    return portfolio.Apellido=apellido;
}

function GetAcercaDe(acercade:string):string{
    const a = document.getElementById("text-acercade");
    a.textContent=acercade;
    return portfolio.Acercade=acercade;
}

function GetTitulo(titulo:string):string{
    const a = document.getElementById("Titulo");
    a.textContent=titulo;
    return portfolio.Titulo=titulo;
}

function showFile1(input):void{
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(progressEvent){
        var s=reader.result.toString();
        console.log(s);
        var arr = s.split('/n');
        GetAcercaDe(arr[0]);
        GetNombre(arr[1]);
        GetApellido(arr[2]);
        GetTitulo(arr[3]);
    };
}