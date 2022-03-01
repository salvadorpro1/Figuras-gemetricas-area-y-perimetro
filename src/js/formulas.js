//Triangulo

let botonCambianteTriangulo = () => {
  let triangulo = document.getElementById("triangulo");
  let botonCambioTriangulo = document.getElementById("botonCambioTriangulo");
  if (botonCambioTriangulo.innerText == "Area") {
    triangulo.innerHTML = `
    <div class="card__header">
    <h3>Triangulo</h3>
    <div class="card__img-boton">
      <img src="" alt="" />
      <button type="button" id="botonCambioTriangulo" onclick="botonCambianteTriangulo()">Perimetro</button>
    </div>
  </div>
  <div class="card__container-inputs">
    <label for="input1Triangulo">Base</label>
    <input type="number" id="input1Triangulo" />
    <label for="input2Triangulo">Altura</label>
    <input type="number" id="input2Triangulo" />
  </div>
  <div class="card__container-respuesta">
    <button type="button" id="calcularTriangulo" onclick="botonCalculoDeTrianguloArea()">Calcular Area</button>
    <p id="respuestaTriangulo">respuesta</p>
  </div>`;
  } else {
    triangulo.innerHTML = `
    <div class="card__header">
    <h3>Triangulo</h3>
    <div class="card__img-boton">
      <img src="" alt="" />
      <button type="button" id="botonCambioTriangulo" onclick="botonCambianteTriangulo()">Area</button>
    </div>
  </div>
  <div class="card__container-inputs">
    <label for="input1Triangulo">lado 1</label>
    <input type="number" id="input1Triangulo" />
    <label for="input2Triangulo">lado 2</label>
    <input type="number" id="input2Triangulo" />
    <label for="input3Triangulo">lado 3</label>
    <input type="number" id="input3Triangulo" />
  </div>
  <div class="card__container-respuesta">
    <button type="button" id="calcularTriangulo" onclick="botonCalculoDeTrianguloPerimetro()">Calcular Perimetro</button>
    <p id="respuestaTriangulo">respuesta</p>
  </div>
    `;
  }
};

let calcularPerimetroTriangulo = (
  trianguloLado1,
  trianguloLado2,
  trianguloLado3
) => {
  let respuesta = document.getElementById("respuestaTriangulo");
  let perimetroTriangulo = trianguloLado1 + trianguloLado2 + trianguloLado3;
  respuesta.innerText = perimetroTriangulo;
};

let calcularAreaTriangulo = (trianguloBase, trianguloAltura) => {
  let respuesta = document.getElementById("respuestaTriangulo");
  let areaTriangulo = (trianguloBase * trianguloAltura) / 2;
  respuesta.innerText = areaTriangulo;
};

let botonCalculoDeTrianguloPerimetro = () => {
  lado1 = parseFloat(document.getElementById("input1Triangulo").value);
  lado2 = parseFloat(document.getElementById("input2Triangulo").value);
  lado3 = parseFloat(document.getElementById("input3Triangulo").value);
  calcularPerimetroTriangulo(lado1, lado2, lado3);
};

let botonCalculoDeTrianguloArea = () => {
  base = parseFloat(document.getElementById("input1Triangulo").value);
  altura = parseFloat(document.getElementById("input2Triangulo").value);
  calcularAreaTriangulo(base, altura);
};

//Cuadrado

let botonCambianteCuadrado = () =>{
  cuadrado = document.getElementById("cuadrado");
  botonCambioCuadrado = document.getElementById("botonCambioCuadrado")
  if(botonCambioCuadrado.innerText == "Area"){
    cuadrado.innerHTML = `
    <div class="card__header">
    <h3>Cuadrado</h3>
    <div class="card__img-boton">
      <img src="" alt="" />
      <button type="button" id="botonCambioCuadrado" onclick="botonCambianteCuadrado()">Perimetro</button>
    </div>
  </div>
  <div class="card__container-inputs">
    <label for="input1Cuadrado">lado 1</label>
    <input type="number" id="input1Cuadrado" />
  </div>
  <div class="card__container-respuesta">
    <button type="button" id="calcularCuadrado" onclick="botonCalculoDeCuadradoArea()">Calcular Area</button>
    <p id="respuestaCuadrado">respuesta</p>
  </div>
    `
  }else{
    cuadrado.innerHTML = `
    <div class="card__header">
      <h3>Cuadrado</h3>
      <div class="card__img-boton">
        <img src="" alt="" />
        <button type="button" id="botonCambioCuadrado" onclick="botonCambianteCuadrado()">Area</button>
      </div>
    </div>
    <div class="card__container-inputs">
      <label for="input1Cuadrado">lado 1</label>
      <input type="number" id="input1Cuadrado" />
    </div>
    <div class="card__container-respuesta">
      <button type="button" id="calcularCuadrado" onclick="botonCalculoDeCuadradoPerimetro()">Calcular Perimetro</button>
      <p id="respuestaCuadrado">respuesta</p>
    </div>
    `
  }
}

let calcularPerimetroCuadrado = (cuadradoLado) => {
  let respuesta = document.getElementById("respuestaCuadrado")
  let perimetroCuadrado = cuadradoLado * 4;
  respuesta.innerText = perimetroCuadrado
};

let calcularAreaCuadrado = (cuadradoLado) => {
  let respuesta = document.getElementById("respuestaCuadrado")
  let areaCuadrado = cuadradoLado ** 2;
  respuesta.innerText = areaCuadrado

};

botonCalculoDeCuadradoPerimetro = () =>{
ladoCuadrado = document.getElementById("input1Cuadrado").value
calcularPerimetroCuadrado(ladoCuadrado)
}

botonCalculoDeCuadradoArea = () =>{
  ladoCuadrado = document.getElementById("input1Cuadrado").value
  calcularAreaCuadrado(ladoCuadrado)
}


//Rectangulo

let calcularPerimetroRectangulo = () => {
  let rectanguloBase;
  let rectanguloAltura;
  let areaRectangulo = rectanguloBase * rectanguloAltura;
  let perimetroRectangulo = rectanguloBase * 2 + rectanguloAltura * 2;
  console.log(perimetroRectangulo);
};

let calcularAreaRectangulo = () => {
  let rectanguloBase;
  let rectanguloAltura;
  let areaRectangulo = rectanguloBase * rectanguloAltura;
  let perimetroRectangulo = rectanguloBase * 2 + rectanguloAltura * 2;
  console.log(areaRectangulo);
};

//Rombo

let calcularPerimetroRombo = () => {
  let romboLado;
  let romboDiagonalMenor;
  let romboDiagonalMayor;
  let perimetroRombo = romboLado * 4;
  let areaRombo = (romboDiagonalMayor * romboDiagonalMenor) / 2;
  console.log(perimetroRombo);
};

let calcularAreaRombo = () => {
  let romboLado;
  let romboDiagonalMenor;
  let romboDiagonalMayor;
  let perimetroRombo = romboLado * 4;
  let areaRombo = (romboDiagonalMayor * romboDiagonalMenor) / 2;
  console.log(areaRombo);
};

//Romboide

let calcularPerimetroRomboide = () => {
  let romboideBase;
  let romboideAltura;
  let perimetroRomboide = romboideBase * 2 + romboideAltura * 2;
  let areaRomboide = romboideBase * romboideAltura;
  console.log(perimetroRomboide);
};

let calcularAreaRomboide = () => {
  let romboideBase;
  let romboideAltura;
  let perimetroRomboide = romboideBase * 2 + romboideAltura * 2;
  let areaRomboide = romboideBase * romboideAltura;
  console.log(areaRomboide);
};

//Trapecio

let calcularPerimetroTrapecio = () => {
  let TrapecioLado1;
  let TrapecioLado2;
  let TrapecioLado3;
  let TrapecioLado4;
  let trapecioBaseMenor;
  let trapecioBaseMayor;
  let trapecioAltura;
  let perimetroTrapecio =
    TrapecioLado1 + TrapecioLado2 + TrapecioLado3 + TrapecioLado4;
  let areaTrapecio =
    (trapecioAltura * (trapecioBaseMenor + trapecioBaseMayor)) / 2;
  console.log(perimetroTrapecio);
};

let calcularAreaTrapecio = () => {
  let TrapecioLado1;
  let TrapecioLado2;
  let TrapecioLado3;
  let TrapecioLado4;
  let trapecioBaseMenor;
  let trapecioBaseMayor;
  let trapecioAltura;
  let perimetroTrapecio =
    TrapecioLado1 + TrapecioLado2 + TrapecioLado3 + TrapecioLado4;
  let areaTrapecio =
    (trapecioAltura * (trapecioBaseMenor + trapecioBaseMayor)) / 2;
  console.log(areaTrapecio);
};

//Pentagono

let calcularPerimetroPentagono = () => {
  let pentagonoApotema;
  let pentagonoBase;
  let perimetroPentagono = pentagonoBase * 5;
  let areaPentagono = (perimetroPentagono * pentagonoApotema) / 2;
  console.log(perimetroPentagono);
};

let calcularAreaPentagono = () => {
  let pentagonoApotema;
  let pentagonoBase;
  let perimetroPentagono = pentagonoBase * 5;
  let areaPentagono = (perimetroPentagono * pentagonoApotema) / 2;
  console.log(areaPentagono);
};

//Hexagono

let calcularPerimetroHexagono = () => {
  let hexagonoApotema;
  let hexagonoBase;
  let perimetroHexagono = hexagonoBase * 6;
  let areaHexagono = (perimetroHexagono * hexagonoApotema) / 2;
  console.log(perimetroHexagono);
};

let calcularAreaHexagono = () => {
  let hexagonoApotema;
  let hexagonoBase;
  let perimetroHexagono = hexagonoBase * 6;
  let areaHexagono = (perimetroHexagono * hexagonoApotema) / 2;
  console.log(areaHexagono);
};

//Circulo

let calcularAreaPerimetro = () => {
  let circuloDiametro;
  let circuloPI = Math.PI;
  let circuloRadio;
  let perimetroCirculo = circuloDiametro * circuloPI;
  let areaCirculo = circuloPI * circuloRadio ** 2;
  console.log(perimetroCirculo);
};

let calcularAreaCirculo = () => {
  let circuloDiametro;
  let circuloPI = Math.PI;
  let circuloRadio;
  let perimetroCirculo = circuloDiametro * circuloPI;
  let areaCirculo = circuloPI * circuloRadio ** 2;
  console.log(areaCirculo);
};
