var portfolio = {
    Nombre: " ",
    Apellido: " ",
    Acercade: " ",
    Titulo: " "
};
function GetNombre(nombre) {
    var nombre1 = document.getElementById("Nombre");
    nombre1.textContent = nombre;
}
function GetApellido(apellido) {
    var a = document.getElementById("Apellido");
    a.textContent = apellido;
    return portfolio.Apellido = apellido;
}
function GetAcercaDe(acercade) {
    var a = document.getElementById("text-acercade");
    a.textContent = acercade;
    return portfolio.Acercade = acercade;
}
function GetTitulo(titulo) {
    var a = document.getElementById("Titulo");
    a.textContent = titulo;
    return portfolio.Titulo = titulo;
}
function showFile1(input) {
    var file = input.files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (progressEvent) {
        var s = reader.result.toString();
        console.log(s);
        var arr = s.split('/n');
        GetAcercaDe(arr[0]);
        GetNombre(arr[1]);
        GetApellido(arr[2]);
        GetTitulo(arr[3]);
    };
}
