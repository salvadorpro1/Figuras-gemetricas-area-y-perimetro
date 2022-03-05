//Triangulo

let botonCambianteTriangulo = () => {
  let triangulo = document.getElementById("triangulo");
  let botonCambioTriangulo = document.getElementById("botonCambioTriangulo");
  if (botonCambioTriangulo.innerText == "Area") {
    triangulo.innerHTML = `
    <div class="card__header">
    <h3>Triangulo</h3>
    <div class="card__img-boton">
      <img src="../img/triangulo.png" alt="Figura de un triangulo" />
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
    <p id="respuestaTriangulo"></p>
  </div>`;
  } else {
    triangulo.innerHTML = `
    <div class="card__header">
    <h3>Triangulo</h3>
    <div class="card__img-boton">
    <img src="../img/triangulo.png" alt="Figura de un triangulo" />
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
    <p id="respuestaTriangulo"></p>
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
  if(isNaN(perimetroTriangulo)){
    respuesta.innerText = 0
  }else{
    respuesta.innerText = perimetroTriangulo;
  }
};

let calcularAreaTriangulo = (trianguloBase, trianguloAltura) => {
  let respuesta = document.getElementById("respuestaTriangulo");
  let areaTriangulo = (trianguloBase * trianguloAltura) / 2;
  if(isNaN(areaTriangulo)){
    respuesta.innerText = 0
  }else{
    respuesta.innerText = areaTriangulo;
  }
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

let botonCambianteCuadrado = () => {
  cuadrado = document.getElementById("cuadrado");
  botonCambioCuadrado = document.getElementById("botonCambioCuadrado");
  if (botonCambioCuadrado.innerText == "Area") {
    cuadrado.innerHTML = `
    <div class="card__header">
    <h3>Cuadrado</h3>
    <div class="card__img-boton">
    <img src="../img/cuadrado.png" alt="Figura de un cuadrado" />
      <button type="button" id="botonCambioCuadrado" onclick="botonCambianteCuadrado()">Perimetro</button>
    </div>
  </div>
  <div class="card__container-inputs">
    <label for="input1Cuadrado">lado 1</label>
    <input type="number" id="input1Cuadrado" />
  </div>
  <div class="card__container-respuesta">
    <button type="button" id="calcularCuadrado" onclick="botonCalculoDeCuadradoArea()">Calcular Area</button>
    <p id="respuestaCuadrado"></p>
  </div>
    `;
  } else {
    cuadrado.innerHTML = `
    <div class="card__header">
      <h3>Cuadrado</h3>
      <div class="card__img-boton">
      <img src="../img/cuadrado.png" alt="Figura de un cuadrado" />
        <button type="button" id="botonCambioCuadrado" onclick="botonCambianteCuadrado()">Area</button>
      </div>
    </div>
    <div class="card__container-inputs">
      <label for="input1Cuadrado">lado 1</label>
      <input type="number" id="input1Cuadrado" />
    </div>
    <div class="card__container-respuesta">
      <button type="button" id="calcularCuadrado" onclick="botonCalculoDeCuadradoPerimetro()">Calcular Perimetro</button>
      <p id="respuestaCuadrado"></p>
    </div>
    `;
  }
};

let calcularPerimetroCuadrado = (cuadradoLado) => {
  let respuesta = document.getElementById("respuestaCuadrado");
  let perimetroCuadrado = cuadradoLado * 4;
  respuesta.innerText = perimetroCuadrado;
};

let calcularAreaCuadrado = (cuadradoLado) => {
  let respuesta = document.getElementById("respuestaCuadrado");
  let areaCuadrado = cuadradoLado ** 2;
  respuesta.innerText = areaCuadrado;
};

botonCalculoDeCuadradoPerimetro = () => {
  ladoCuadrado = document.getElementById("input1Cuadrado").value;
  calcularPerimetroCuadrado(ladoCuadrado);
};

botonCalculoDeCuadradoArea = () => {
  ladoCuadrado = document.getElementById("input1Cuadrado").value;
  calcularAreaCuadrado(ladoCuadrado);
};

//Rectangulo

let botonCambianteRectangulo = () => {
  let rectangulo = document.getElementById("rectangulo");
  let botonCambioRectangulo = document.getElementById("botonCambioRectangulo");
  if (botonCambioRectangulo.innerText == "Area") {
    rectangulo.innerHTML = `
<div class="card__header">
<h3>Rectangulo</h3>
<div class="card__img-boton">
<img src="../img/rectangulo.png" alt="Figura de un Rectangulo" />
<button type="button" id="botonCambioRectangulo" onclick="botonCambianteRectangulo()">Perimetro</button>
</div>
</div>
<div class="card__container-inputs">
<label for="input1Rectangulo">Base</label>
<input type="number" id="input1Rectangulo" />
<label for="input2Rectangulo">Altura</label>
<input type="number" id="input2Rectangulo" />
</div>
<div class="card__container-respuesta">
<button type="button" id="calcularRectangulo" onclick="botonCalculoDeRectanguloArea()">Calcular Area</button>
<p id="respuestaRectangulo"></p>
</div>
`;
  } else {
    rectangulo.innerHTML = `
<div class="card__header">
<h3>Rectangulo</h3>
<div class="card__img-boton">
<img src="../img/rectangulo.png" alt="Figura de un Rectangulo" />
<button type="button" id="botonCambioRectangulo" onclick="botonCambianteRectangulo()">Area</button>
</div>
</div>
<div class="card__container-inputs">
<label for="input1Rectangulo">Base</label>
<input type="number" id="input1Rectangulo" />
<label for="input2Rectangulo">Altura</label>
<input type="number" id="input2Rectangulo" />
</div>
<div class="card__container-respuesta">
<button type="button" id="calcularRectangulo" onclick="botonCalculoDeRectanguloPerimetro()">Calcular Perimetro</button>
<p id="respuestaRectangulo"></p>
</div>
`;
  }
};

let calcularPerimetroRectangulo = (rectanguloBase, rectanguloAltura) => {
  let respuesta = document.getElementById("respuestaRectangulo");
  let perimetroRectangulo = rectanguloBase * 2 + rectanguloAltura * 2;
  respuesta.innerText = perimetroRectangulo;
};

let calcularAreaRectangulo = (rectanguloBase, rectanguloAltura) => {
  let respuesta = document.getElementById("respuestaRectangulo");
  let areaRectangulo = rectanguloBase * rectanguloAltura;
  respuesta.innerText = areaRectangulo;
};

let botonCalculoDeRectanguloPerimetro = () => {
  let base = document.getElementById("input1Rectangulo").value;
  let altura = document.getElementById("input2Rectangulo").value;
  calcularPerimetroRectangulo(base, altura);
};

let botonCalculoDeRectanguloArea = () => {
  let base = document.getElementById("input1Rectangulo").value;
  let altura = document.getElementById("input2Rectangulo").value;
  calcularAreaRectangulo(base, altura);
};

//Rombo

botonCambianteRombo = () => {
  let rombo = document.getElementById("rombo");
  let botonCambioRombo = document.getElementById("botonCambioRombo");
  if (botonCambioRombo.innerText == "Area") {
    rombo.innerHTML = `
  <div class="card__header">
  <h3>Rombo</h3>
  <div class="card__img-boton">
  <img src="../img/rombo.png" alt="Figura de un Rombo" />
  <button type="button" id="botonCambioRombo" onclick="botonCambianteRombo()">Perimetro</button>
  </div>
</div>
<div class="card__container-inputs">
  <label for="input1Rombo">Diagonal mayor</label>
  <input type="number" id="input1Rombo" />
  <label for="input2Rombo">Diagonal menor</label>
  <input type="number" id="input2Rombo" />
</div>
<div class="card__container-respuesta">
  <button type="button" id="calcularRombo" onclick="botonCalculoDeRomboArea()">Calcular Area</button>
  <p id="respuestaRombo"></p>
</div>
  `;
  } else {
    rombo.innerHTML = `
  <div class="card__header">
  <h3>Rombo</h3>
  <div class="card__img-boton">
  <img src="../img/rombo.png" alt="Figura de un Rombo" />
  <button type="button" id="botonCambioRombo" onclick="botonCambianteRombo()">Area</button>
  </div>
</div>
<div class="card__container-inputs">
  <label for="input1Rombo">lado 1</label>
  <input type="number" id="input1Rombo" />
</div>
<div class="card__container-respuesta">
  <button type="button" id="calcularRombo" onclick="botonCalculoDeRomboPerimetro()">Calcular Perimetro</button>
  <p id="respuestaRombo"></p>
</div>
  `;
  }
};

let calcularPerimetroRombo = (romboLado) => {
  let respuesta = document.getElementById("respuestaRombo");
  let perimetroRombo = romboLado * 4;
  respuesta.innerText = perimetroRombo;
};

let calcularAreaRombo = (romboDiagonalMenor, romboDiagonalMayor) => {
  let respuesta = document.getElementById("respuestaRombo");
  let areaRombo = (romboDiagonalMayor * romboDiagonalMenor) / 2;
  respuesta.innerText = areaRombo;
};

let botonCalculoDeRomboPerimetro = () => {
  let ladoRombo = document.getElementById("input1Rombo").value;
  calcularPerimetroRombo(ladoRombo);
};

let botonCalculoDeRomboArea = () => {
  diagonalMayor = document.getElementById("input1Rombo").value;
  diagonalMenor = document.getElementById("input2Rombo").value;
  calcularAreaRombo(diagonalMenor, diagonalMayor);
};

//Romboide

let botonCambianteRomboide = () => {
  let botonCambioRomboide = document.getElementById("botonCambioRomboide");
  let romboide = document.getElementById("romboide");
  if (botonCambioRomboide.innerText == "Area") {
    romboide.innerHTML = `
  <div class="card__header">
  <h3>Romboide</h3>
  <div class="card__img-boton">
  <img src="../img/romboide.png" alt="Figura de un romboide" />
  <button type="button" id="botonCambioRomboide" onclick="botonCambianteRomboide()">Perimetro</button>
  </div>
</div>
<div class="card__container-inputs">
  <label for="input1Romboide">Base</label>
  <input type="number" id="input1Romboide" />
  <label for="input2Romboide">Altura</label>
  <input type="number" id="input2Romboide" />
</div>
<div class="card__container-respuesta">
  <button type="button" id="calcularRomboide" onclick="botonCalculoDeRomboideArea()">Calcular Area</button>
  <p id="respuestaRomboide"></p>
</div>
  `;
  } else {
    romboide.innerHTML = `
  <div class="card__header">
  <h3>Romboide</h3>
  <div class="card__img-boton">
  <img src="../img/romboide.png" alt="Figura de un romboide" />
  <button type="button" id="botonCambioRomboide" onclick="botonCambianteRomboide()">Area</button>
  </div>
</div>
<div class="card__container-inputs">
  <label for="input1Romboide">Base</label>
  <input type="number" id="input1Romboide" />
  <label for="input2Romboide">Altura</label>
  <input type="number" id="input2Romboide" />
</div>
<div class="card__container-respuesta">
  <button type="button" id="calcularRomboide" onclick="botonCalculoDeRomboidePerimetro()">Calcular Perimetro</button>
  <p id="respuestaRomboide"></p>
</div>
  `;
  }
};

let calcularPerimetroRomboide = (romboideBase, romboideAltura) => {
  let respuesta = document.getElementById("respuestaRomboide");
  let perimetroRomboide = romboideBase * 2 + romboideAltura * 2;
  respuesta.innerText = perimetroRomboide;
};

let calcularAreaRomboide = (romboideBase, romboideAltura) => {
  let respuesta = document.getElementById("respuestaRomboide");
  let areaRomboide = romboideBase * romboideAltura;
  respuesta.innerText = areaRomboide;
};

let botonCalculoDeRomboidePerimetro = () => {
  let base = document.getElementById("input1Romboide").value;
  let altura = document.getElementById("input2Romboide").value;
  calcularPerimetroRomboide(base, altura);
};

let botonCalculoDeRomboideArea = () => {
  let base = document.getElementById("input1Romboide").value;
  let altura = document.getElementById("input2Romboide").value;
  calcularAreaRomboide(base, altura);
};

//Trapecio

let botonCambianteTrapecio = () => {
  let trapecio = document.getElementById("trapecio");
  let botonCambioTrapecio = document.getElementById("botonCambioTrapecio");
  if (botonCambioTrapecio.innerText == "Area") {
    trapecio.innerHTML = `
    <div class="card__header">
    <h3>Trapecio</h3>
    <div class="card__img-boton">
    <img src="../img/trapecio.png" alt="Figura de un trapecio" />
    <button type="button" id="botonCambioTrapecio" onclick="botonCambianteTrapecio()">Perimetro</button>
    </div>
  </div>
  <div class="card__container-inputs">
    <label for="input1Trapecio">Base menor</label>
    <input type="number" id="input1Trapecio" />
    <label for="input2Trapecio">Base mayor</label>
    <input type="number" id="input2Trapecio" />
    <label for="input3Trapecio">Altura</label>
    <input type="number" id="input3Trapecio" />
  </div>
  <div class="card__container-respuesta">
    <button type="button" id="calcularTrapecio" onclick="botonCalculoDeTrapecioArea()">Calcular Area</button>
    <p id="respuestaTrapecio"></p>
  </div>
    `;
  } else {
    trapecio.innerHTML = `
    <div class="card__header">
    <h3>Trapecio</h3>
    <div class="card__img-boton">
    <img src="../img/trapecio.png" alt="Figura de un trapecio" />
    <button type="button" id="botonCambioTrapecio" onclick="botonCambianteTrapecio()">Area</button>
    </div>
  </div>
  <div class="card__container-inputs">
    <label for="input1Trapecio">lado 1</label>
    <input type="number" id="input1Trapecio" />
    <label for="input2Trapecio">lado 2</label>
    <input type="number" id="input2Trapecio" />
    <label for="input3Trapecio">lado 3</label>
    <input type="number" id="input3Trapecio" />
    <label for="input4Trapecio">lado 4</label>
    <input type="number" id="input4Trapecio" />
  </div>
  <div class="card__container-respuesta">
    <button type="button" id="calcularTrapecio" onclick="botonCalculoDeTrapecioPerimetro()">Calcular Perimetro</button>
    <p id="respuestaTrapecio"></p>
  </div>
    `;
  }
};

let calcularPerimetroTrapecio = (
  TrapecioLado1,
  TrapecioLado2,
  TrapecioLado3,
  TrapecioLado4
) => {
  let respuesta = document.getElementById("respuestaTrapecio");
  let perimetroTrapecio =
    TrapecioLado1 + TrapecioLado2 + TrapecioLado3 + TrapecioLado4;
    if(isNaN(perimetroTrapecio)){
      respuesta.innerText = 0
    }else{
      respuesta.innerText = perimetroTrapecio;
    }
};

let calcularAreaTrapecio = (
  trapecioBaseMenor,
  trapecioBaseMayor,
  trapecioAltura
) => {
  let respuesta = document.getElementById("respuestaTrapecio");
  let areaTrapecio =
    (trapecioAltura * (trapecioBaseMenor + trapecioBaseMayor)) / 2;
    if(isNaN(areaTrapecio)){
      respuesta.innerText = 0
    }else{
      respuesta.innerText = areaTrapecio;
    }
};

let botonCalculoDeTrapecioPerimetro = () => {
  let lado1 = parseFloat(document.getElementById("input1Trapecio").value);
  let lado2 = parseFloat(document.getElementById("input2Trapecio").value);
  let lado3 = parseFloat(document.getElementById("input3Trapecio").value);
  let lado4 = parseFloat(document.getElementById("input4Trapecio").value);
  calcularPerimetroTrapecio(lado1, lado2, lado3, lado4);
};

let botonCalculoDeTrapecioArea = () => {
  let baseMenor = parseFloat(document.getElementById("input1Trapecio").value);
  let baseMayor = parseFloat(document.getElementById("input2Trapecio").value);
  let altura = parseFloat(document.getElementById("input3Trapecio").value);
  calcularAreaTrapecio(baseMenor, baseMayor, altura);
};

//Pentagono

let botonCambiantePentagono = () => {
  let pentagono = document.getElementById("pentagono");
  let botonCambioPentagono = document.getElementById("botonCambioPentagono");
  if (botonCambioPentagono.innerText == "Area") {
    pentagono.innerHTML = `
  <div class="card__header">
  <h3>Pentagono</h3>
  <div class="card__img-boton">
  <img src="../img/pentagono.png" alt="Figura de un pentagono" />
  <button type="button" id="botonCambioPentagono" onclick="botonCambiantePentagono()">Perimetro</button>
  </div>
</div>
<div class="card__container-inputs">
  <label for="input1Pentagono">Apotema</label>
  <input type="number" id="input1Pentagono" />
  <label for="input2Pentagono">Base</label>
  <input type="number" id="input2Pentagono" />
</div>
<div class="card__container-respuesta">
  <button type="button" id="calcularPentagono" onclick="botonCalculoDePentagonoArea()">Calcular Area</button>
  <p id="respuestaPentagono"></p>
</div>
  `;
  } else {
    pentagono.innerHTML = `
  <div class="card__header">
  <h3>Pentagono</h3>
  <div class="card__img-boton">
  <img src="../img/pentagono.png" alt="Figura de un pentagono" />
  <button type="button" id="botonCambioPentagono" onclick="botonCambiantePentagono()">Area</button>
  </div>
</div>
<div class="card__container-inputs">
  <label for="input1Pentagono">Base</label>
  <input type="number" id="input1Pentagono" />
</div>
<div class="card__container-respuesta">
  <button type="button" id="calcularPentagono" onclick="botonCalculoDePentagonoPerimetro()">Calcular Perimetro</button>
  <p id="respuestaPentagono"></p>
</div>
  `;
  }
};

let calcularPerimetroPentagono = (pentagonoBase) => {
  let perimetroPentagono = pentagonoBase * 5;
  let resultado = document.getElementById("respuestaPentagono");
  resultado.innerText = perimetroPentagono;
};

let calcularAreaPentagono = (pentagonoApotema, pentagonoBase) => {
  let perimetroPentagono = pentagonoBase * 5;
  let areaPentagono = (perimetroPentagono * pentagonoApotema) / 2;
  let resultado = document.getElementById("respuestaPentagono");
  resultado.innerText = areaPentagono;
};

let botonCalculoDePentagonoPerimetro = () => {
  let base = document.getElementById("input1Pentagono").value;
  calcularPerimetroPentagono(base);
};

let botonCalculoDePentagonoArea = () => {
  let Apotema = document.getElementById("input1Pentagono").value;
  let base = document.getElementById("input2Pentagono").value;
  calcularAreaPentagono(Apotema, base);
};

//Circulo

let botonCambianteCirculo = () => {
  let circulo = document.getElementById("circulo");
  let botonCambioCirculo = document.getElementById("botonCambioCirculo");
  if (botonCambioCirculo.innerText == "Area") {
    circulo.innerHTML = `
    <div class="card__header">
    <h3>Circulo</h3>
    <div class="card__img-boton">
    <img src="../img/circulo.png" alt="Figura de un circulo" />
    <button type="button" id="botonCambioCirculo" onclick="botonCambianteCirculo()">Perimetro</button>
    </div>
  </div>
  <div class="card__container-inputs">
    <label for="input1Circulo">Radio</label>
    <input type="number" id="input1Circulo" />
  </div>
  <div class="card__container-respuesta">
    <button type="button" id="calcularCirculo" onclick="botonCalculoDeCirculoArea()">Calcular Area</button>
    <p id="respuestaCirculo"></p>
  </div>
    `;
  } else {
    circulo.innerHTML = `
    <div class="card__header">
    <h3>Circulo</h3>
    <div class="card__img-boton">
    <img src="../img/circulo.png" alt="Figura de un circulo" />
    <button type="button" id="botonCambioCirculo" onclick="botonCambianteCirculo()">Area</button>
    </div>
  </div>
  <div class="card__container-inputs">
    <label for="input1Circulo">Diametro</label>
    <input type="number" id="input1Circulo" />
  </div>
  <div class="card__container-respuesta">
    <button type="button" id="calcularCirculo" onclick="botonCalculoDeCirculoPerimetro()">Calcular Perimetro</button>
    <p id="respuestaCirculo"></p>
  </div>
    `;
  }
};

let calcularPerimetroCirculo = (circuloDiametro) => {
  let respuesta = document.getElementById("respuestaCirculo");
  let circuloPI = Math.PI;
  let perimetroCirculo = circuloDiametro * circuloPI;
  respuesta.innerText = perimetroCirculo.toFixed(1);
};

let calcularAreaCirculo = (circuloRadio) => {
  let respuesta = document.getElementById("respuestaCirculo");
  let circuloPI = Math.PI;
  let areaCirculo = circuloPI * circuloRadio ** 2;
  respuesta.innerText = areaCirculo.toFixed(1);
};

let botonCalculoDeCirculoPerimetro = () => {
  let diametro = document.getElementById("input1Circulo").value;
  calcularPerimetroCirculo(diametro);
};

let botonCalculoDeCirculoArea = () => {
  let radio = document.getElementById("input1Circulo").value;
  calcularAreaCirculo(radio);
};
