var vector = [];

function constructorObjeto(nombre,color,peso){
    this.nombre = nombre;
    this.color = color;
    this.peso = peso;
}

function capturar () {
    console.log("asdad");
    let nombre = document.getElementById("nombre").value;
    let colorTemp = document.getElementById("color").value;
    let peso = document.getElementById("peso").value;
    Add(nombre,colorTemp,peso)
}

$('#button').on('click', () => {
    capturar();
});

function Add(nombre,colorTemp,peso){
    let name = nombre;
    let color = colorTemp;
    let weight = peso;
    let tempObject = new constructorObjeto(name,color,weight);
    vector.push(tempObject);
    let caja = document.createElement("div");
    let contenido = `<h1> ${name}</h1><h2>${color}</h2><h3>${weight}</h3><h1>--------------------------</h1>`;
    caja.innerHTML = contenido;
    $('body').append(caja);

}



    
    


