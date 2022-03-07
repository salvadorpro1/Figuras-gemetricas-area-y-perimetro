//Triángulo

let botonCambianteTriangulo = () => {
  let triangulo = document.getElementById("triangulo");
  let botonCambioTriangulo = document.getElementById("botonCambioTriangulo");
  if (botonCambioTriangulo.innerText == "Área") {
    triangulo.innerHTML = `
    <div class="card__header">
    <h3>Triángulo</h3>
    <div class="card__img-boton">
      <img src="../img/triangulo.png" alt="Figura de un triangulo" />
      <button type="button" id="botonCambioTriangulo" onclick="botonCambianteTriangulo()">Perímetro</button>
    </div>
  </div>
  <div class="card__container-inputs">
    <label for="input1Triangulo">Base</label>
    <input type="number" id="input1Triangulo" />
    <label for="input2Triangulo">Altura</label>
    <input type="number" id="input2Triangulo" />
  </div>
  <div class="card__container-respuesta">
    <button type="button" id="calcularTriangulo" onclick="botonCalculoDeTrianguloArea()">Calcular Área</button>
    <p id="respuestaTriangulo"></p>
  </div>`;
  } else {
    triangulo.innerHTML = `
    <div class="card__header">
    <h3>Triángulo</h3>
    <div class="card__img-boton">
    <img src="../img/triangulo.png" alt="Figura de un triangulo" />
      <button type="button" id="botonCambioTriangulo" onclick="botonCambianteTriangulo()">Área</button>
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
    <button type="button" id="calcularTriangulo" onclick="botonCalculoDeTrianguloPerimetro()">Calcular Perímetro</button>
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
  let imagenAnimacion =
    document.getElementsByClassName("card")[0].children[0].children[1]
      .children[0];
  let perimetroTriangulo = trianguloLado1 + trianguloLado2 + trianguloLado3;
  if (trianguloLado1 < 0 || trianguloLado2 < 0 || trianguloLado3 < 0) {
    respuesta.innerText = 0;
  } else if (isNaN(perimetroTriangulo)) {
    respuesta.innerText = 0;
  } else if (Number.isInteger(perimetroTriangulo)) {
    respuesta.innerText = perimetroTriangulo;
  } else {
    respuesta.innerText = perimetroTriangulo.toFixed(1);
  }
  imagenAnimacion.style.transform = "rotate(360deg)";
  imagenAnimacion.style.transition = "1s";
};

let calcularAreaTriangulo = (trianguloBase, trianguloAltura) => {
  let imagenAnimacion =
    document.getElementsByClassName("card")[0].children[0].children[1]
      .children[0];
  let respuesta = document.getElementById("respuestaTriangulo");
  let areaTriangulo = (trianguloBase * trianguloAltura) / 2;
  if (trianguloBase < 0 || trianguloAltura < 0) {
    respuesta.innerText = 0;
  } else if (isNaN(areaTriangulo)) {
    respuesta.innerText = 0;
  } else if (Number.isInteger(areaTriangulo)) {
    respuesta.innerText = areaTriangulo;
  } else {
    respuesta.innerText = areaTriangulo.toFixed(1);
  }
  imagenAnimacion.style.transform = "rotate(360deg)";
  imagenAnimacion.style.transition = "1s";
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
  let cuadrado = document.getElementById("cuadrado");
  let botonCambioCuadrado = document.getElementById("botonCambioCuadrado");
  if (botonCambioCuadrado.innerText == "Área") {
    cuadrado.innerHTML = `
    <div class="card__header">
    <h3>Cuadrado</h3>
    <div class="card__img-boton">
    <img src="../img/cuadrado.png" alt="Figura de un cuadrado" />
      <button type="button" id="botonCambioCuadrado" onclick="botonCambianteCuadrado()">Perímetro</button>
    </div>
  </div>
  <div class="card__container-inputs">
    <label for="input1Cuadrado">lado 1</label>
    <input type="number" id="input1Cuadrado" />
  </div>
  <div class="card__container-respuesta">
    <button type="button" id="calcularCuadrado" onclick="botonCalculoDeCuadradoArea()">Calcular Área</button>
    <p id="respuestaCuadrado"></p>
  </div>
    `;
  } else {
    cuadrado.innerHTML = `
    <div class="card__header">
      <h3>Cuadrado</h3>
      <div class="card__img-boton">
      <img src="../img/cuadrado.png" alt="Figura de un cuadrado" />
        <button type="button" id="botonCambioCuadrado" onclick="botonCambianteCuadrado()">Área</button>
      </div>
    </div>
    <div class="card__container-inputs">
      <label for="input1Cuadrado">lado 1</label>
      <input type="number" id="input1Cuadrado" />
    </div>
    <div class="card__container-respuesta">
      <button type="button" id="calcularCuadrado" onclick="botonCalculoDeCuadradoPerimetro()">Calcular Perímetro</button>
      <p id="respuestaCuadrado"></p>
    </div>
    `;
  }
};

let calcularPerimetroCuadrado = (cuadradoLado) => {
  let imagenAnimacion =
    document.getElementsByClassName("card")[1].children[0].children[1]
      .children[0];
  let respuesta = document.getElementById("respuestaCuadrado");
  let perimetroCuadrado = cuadradoLado * 4;
  if (cuadradoLado < 0) {
    respuesta.innerText = 0;
  } else if (Number.isInteger(perimetroCuadrado)) {
    respuesta.innerText = perimetroCuadrado;
  } else if (Number.isInteger(perimetroCuadrado) == false) {
    respuesta.innerText = perimetroCuadrado.toFixed(1);
  } else {
    respuesta.innerText = 0;
  }
  imagenAnimacion.style.transform = "rotate(360deg)";
  imagenAnimacion.style.transition = "1s";
};

let calcularAreaCuadrado = (cuadradoLado) => {
  let imagenAnimacion =
    document.getElementsByClassName("card")[1].children[0].children[1]
      .children[0];
  let respuesta = document.getElementById("respuestaCuadrado");
  let areaCuadrado = cuadradoLado ** 2;
  if (cuadradoLado < 0) {
    respuesta.innerText = 0;
  } else if (Number.isInteger(areaCuadrado)) {
    respuesta.innerText = areaCuadrado;
  } else if (Number.isInteger(areaCuadrado) == false) {
    respuesta.innerText = areaCuadrado.toFixed(1);
  } else {
    respuesta.innerText = 0;
  }
  imagenAnimacion.style.transform = "rotate(360deg)";
  imagenAnimacion.style.transition = "1s";
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
  if (botonCambioRectangulo.innerText == "Área") {
    rectangulo.innerHTML = `
<div class="card__header">
<h3>Rectangulo</h3>
<div class="card__img-boton">
<img src="../img/rectangulo.png" alt="Figura de un Rectangulo" />
<button type="button" id="botonCambioRectangulo" onclick="botonCambianteRectangulo()">Perímetro</button>
</div>
</div>
<div class="card__container-inputs">
<label for="input1Rectangulo">Base</label>
<input type="number" id="input1Rectangulo" />
<label for="input2Rectangulo">Altura</label>
<input type="number" id="input2Rectangulo" />
</div>
<div class="card__container-respuesta">
<button type="button" id="calcularRectangulo" onclick="botonCalculoDeRectanguloArea()">Calcular Área</button>
<p id="respuestaRectangulo"></p>
</div>
`;
  } else {
    rectangulo.innerHTML = `
<div class="card__header">
<h3>Rectangulo</h3>
<div class="card__img-boton">
<img src="../img/rectangulo.png" alt="Figura de un Rectangulo" />
<button type="button" id="botonCambioRectangulo" onclick="botonCambianteRectangulo()">Área</button>
</div>
</div>
<div class="card__container-inputs">
<label for="input1Rectangulo">Base</label>
<input type="number" id="input1Rectangulo" />
<label for="input2Rectangulo">Altura</label>
<input type="number" id="input2Rectangulo" />
</div>
<div class="card__container-respuesta">
<button type="button" id="calcularRectangulo" onclick="botonCalculoDeRectanguloPerimetro()">Calcular Perímetro</button>
<p id="respuestaRectangulo"></p>
</div>
`;
  }
};

let calcularPerimetroRectangulo = (rectanguloBase, rectanguloAltura) => {
  let imagenAnimacion =
    document.getElementsByClassName("card")[2].children[0].children[1]
      .children[0];
  let respuesta = document.getElementById("respuestaRectangulo");
  let perimetroRectangulo = rectanguloBase * 2 + rectanguloAltura * 2;
  if (rectanguloBase < 0 || rectanguloAltura < 0) {
    respuesta.innerText = 0;
  } else if (rectanguloBase == "" || rectanguloAltura == "") {
    respuesta.innerText = 0;
  } else if (Number.isInteger(perimetroRectangulo)) {
    respuesta.innerText = perimetroRectangulo;
  } else if (Number.isInteger(perimetroRectangulo) == false) {
    respuesta.innerText = perimetroRectangulo.toFixed(1);
  } else {
    respuesta.innerText = 0;
  }
  imagenAnimacion.style.transform = "rotate(360deg)";
  imagenAnimacion.style.transition = "1s";
};

let calcularAreaRectangulo = (rectanguloBase, rectanguloAltura) => {
  let imagenAnimacion =
    document.getElementsByClassName("card")[2].children[0].children[1]
      .children[0];
  let respuesta = document.getElementById("respuestaRectangulo");
  let areaRectangulo = rectanguloBase * rectanguloAltura;
  if (rectanguloBase < 0 || rectanguloAltura < 0) {
    respuesta.innerText = 0;
  } else if (Number.isInteger(areaRectangulo)) {
    respuesta.innerText = areaRectangulo;
  } else if (Number.isInteger(areaRectangulo) == false) {
    respuesta.innerText = areaRectangulo.toFixed(1);
  } else {
    respuesta.innerText = 0;
  }
  imagenAnimacion.style.transform = "rotate(360deg)";
  imagenAnimacion.style.transition = "1s";
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
  if (botonCambioRombo.innerText == "Área") {
    rombo.innerHTML = `
  <div class="card__header">
  <h3>Rombo</h3>
  <div class="card__img-boton">
  <img src="../img/rombo.png" alt="Figura de un Rombo" />
  <button type="button" id="botonCambioRombo" onclick="botonCambianteRombo()">Perímetro</button>
  </div>
</div>
<div class="card__container-inputs">
  <label for="input1Rombo">Diagonal mayor</label>
  <input type="number" id="input1Rombo" />
  <label for="input2Rombo">Diagonal menor</label>
  <input type="number" id="input2Rombo" />
</div>
<div class="card__container-respuesta">
  <button type="button" id="calcularRombo" onclick="botonCalculoDeRomboArea()">Calcular Área</button>
  <p id="respuestaRombo"></p>
</div>
  `;
  } else {
    rombo.innerHTML = `
  <div class="card__header">
  <h3>Rombo</h3>
  <div class="card__img-boton">
  <img src="../img/rombo.png" alt="Figura de un Rombo" />
  <button type="button" id="botonCambioRombo" onclick="botonCambianteRombo()">Área</button>
  </div>
</div>
<div class="card__container-inputs">
  <label for="input1Rombo">lado 1</label>
  <input type="number" id="input1Rombo" />
</div>
<div class="card__container-respuesta">
  <button type="button" id="calcularRombo" onclick="botonCalculoDeRomboPerimetro()">Calcular Perímetro</button>
  <p id="respuestaRombo"></p>
</div>
  `;
  }
};

let calcularPerimetroRombo = (romboLado) => {
  let imagenAnimacion =
    document.getElementsByClassName("card")[3].children[0].children[1]
      .children[0];
  let respuesta = document.getElementById("respuestaRombo");
  let perimetroRombo = romboLado * 4;
  if (romboLado < 0) {
    respuesta.innerText = 0;
  } else if (Number.isInteger(perimetroRombo)) {
    respuesta.innerText = perimetroRombo;
  } else if (Number.isInteger(perimetroRombo) == false) {
    respuesta.innerText = perimetroRombo.toFixed(1);
  } else {
    respuesta.innerText = 0;
  }
  imagenAnimacion.style.transform = "rotate(360deg)";
  imagenAnimacion.style.transition = "1s";
};

let calcularAreaRombo = (romboDiagonalMenor, romboDiagonalMayor) => {
  let imagenAnimacion =
    document.getElementsByClassName("card")[3].children[0].children[1]
      .children[0];
  let respuesta = document.getElementById("respuestaRombo");
  let areaRombo = (romboDiagonalMayor * romboDiagonalMenor) / 2;
  if (romboDiagonalMenor < 0 || romboDiagonalMayor < 0) {
    respuesta.innerText = 0;
  } else if (Number.isInteger(areaRombo)) {
    respuesta.innerText = areaRombo;
  } else if (Number.isInteger(areaRombo) == false) {
    respuesta.innerText = areaRombo.toFixed(1);
  } else {
    respuesta.innerText = 0;
  }
  imagenAnimacion.style.transform = "rotate(360deg)";
  imagenAnimacion.style.transition = "1s";
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
  if (botonCambioRomboide.innerText == "Área") {
    romboide.innerHTML = `
  <div class="card__header">
  <h3>Romboide</h3>
  <div class="card__img-boton">
  <img src="../img/romboide.png" alt="Figura de un romboide" />
  <button type="button" id="botonCambioRomboide" onclick="botonCambianteRomboide()">Perímetro</button>
  </div>
</div>
<div class="card__container-inputs">
  <label for="input1Romboide">Base</label>
  <input type="number" id="input1Romboide" />
  <label for="input2Romboide">Altura</label>
  <input type="number" id="input2Romboide" />
</div>
<div class="card__container-respuesta">
  <button type="button" id="calcularRomboide" onclick="botonCalculoDeRomboideArea()">Calcular Área</button>
  <p id="respuestaRomboide"></p>
</div>
  `;
  } else {
    romboide.innerHTML = `
  <div class="card__header">
  <h3>Romboide</h3>
  <div class="card__img-boton">
  <img src="../img/romboide.png" alt="Figura de un romboide" />
  <button type="button" id="botonCambioRomboide" onclick="botonCambianteRomboide()">Área</button>
  </div>
</div>
<div class="card__container-inputs">
  <label for="input1Romboide">Base</label>
  <input type="number" id="input1Romboide" />
  <label for="input2Romboide">Altura</label>
  <input type="number" id="input2Romboide" />
</div>
<div class="card__container-respuesta">
  <button type="button" id="calcularRomboide" onclick="botonCalculoDeRomboidePerimetro()">Calcular Perímetro</button>
  <p id="respuestaRomboide"></p>
</div>
  `;
  }
};

let calcularPerimetroRomboide = (romboideBase, romboideAltura) => {
  let imagenAnimacion =
    document.getElementsByClassName("card")[4].children[0].children[1]
      .children[0];
  let respuesta = document.getElementById("respuestaRomboide");
  let perimetroRomboide = romboideBase * 2 + romboideAltura * 2;
  if (romboideBase < 0 || romboideAltura < 0) {
    respuesta.innerText = 0;
  } else if (romboideBase == "" || romboideAltura == "") {
    respuesta.innerText = 0;
  } else if (Number.isInteger(perimetroRomboide)) {
    respuesta.innerText = perimetroRomboide;
  } else if (Number.isInteger(perimetroRomboide) == false) {
    respuesta.innerText = perimetroRomboide.toFixed(1);
  } else {
    respuesta.innerText = 0;
  }
  imagenAnimacion.style.transform = "rotate(360deg)";
  imagenAnimacion.style.transition = "1s";
};

let calcularAreaRomboide = (romboideBase, romboideAltura) => {
  let imagenAnimacion =
    document.getElementsByClassName("card")[4].children[0].children[1]
      .children[0];
  let respuesta = document.getElementById("respuestaRomboide");
  let areaRomboide = romboideBase * romboideAltura;
  if (romboideBase < 0 || romboideAltura < 0) {
    respuesta.innerText = 0;
  } else if (Number.isInteger(areaRomboide)) {
    respuesta.innerText = areaRomboide;
  } else if (Number.isInteger(areaRomboide) == false) {
    respuesta.innerText = areaRomboide.toFixed(1);
  } else {
    respuesta.innerText = 0;
  }
  imagenAnimacion.style.transform = "rotate(360deg)";
  imagenAnimacion.style.transition = "1s";
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
  if (botonCambioTrapecio.innerText == "Área") {
    trapecio.innerHTML = `
    <div class="card__header">
    <h3>Trapecio</h3>
    <div class="card__img-boton">
    <img src="../img/trapecio.png" alt="Figura de un trapecio" />
    <button type="button" id="botonCambioTrapecio" onclick="botonCambianteTrapecio()">Perímetro</button>
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
    <button type="button" id="calcularTrapecio" onclick="botonCalculoDeTrapecioArea()">Calcular Área</button>
    <p id="respuestaTrapecio"></p>
  </div>
    `;
  } else {
    trapecio.innerHTML = `
    <div class="card__header">
    <h3>Trapecio</h3>
    <div class="card__img-boton">
    <img src="../img/trapecio.png" alt="Figura de un trapecio" />
    <button type="button" id="botonCambioTrapecio" onclick="botonCambianteTrapecio()">Área</button>
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
    <button type="button" id="calcularTrapecio" onclick="botonCalculoDeTrapecioPerimetro()">Calcular Perímetro</button>
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
  let imagenAnimacion =
    document.getElementsByClassName("card")[5].children[0].children[1]
      .children[0];
  let respuesta = document.getElementById("respuestaTrapecio");
  let perimetroTrapecio =
    TrapecioLado1 + TrapecioLado2 + TrapecioLado3 + TrapecioLado4;
  if (
    TrapecioLado1 < 0 ||
    TrapecioLado2 < 0 ||
    TrapecioLado3 < 0 ||
    TrapecioLado4 < 0
  ) {
    respuesta.innerText = 0;
  } else if (isNaN(perimetroTrapecio)) {
    respuesta.innerText = 0;
  } else if (Number.isInteger(perimetroTrapecio)) {
    respuesta.innerText = perimetroTrapecio;
  } else {
    respuesta.innerText = perimetroTrapecio.toFixed(1);
  }
  imagenAnimacion.style.transform = "rotate(360deg)";
  imagenAnimacion.style.transition = "1s";
};

let calcularAreaTrapecio = (
  trapecioBaseMenor,
  trapecioBaseMayor,
  trapecioAltura
) => {
  let imagenAnimacion =
    document.getElementsByClassName("card")[5].children[0].children[1]
      .children[0];
  let respuesta = document.getElementById("respuestaTrapecio");
  let areaTrapecio =
    (trapecioAltura * (trapecioBaseMenor + trapecioBaseMayor)) / 2;
  if (trapecioBaseMenor < 0 || trapecioBaseMayor < 0 || trapecioAltura < 0) {
    respuesta.innerText = 0;
  } else if (isNaN(areaTrapecio)) {
    respuesta.innerText = 0;
  } else if (Number.isInteger(areaTrapecio)) {
    respuesta.innerText = areaTrapecio;
  } else {
    respuesta.innerText = areaTrapecio.toFixed(1);
  }
  imagenAnimacion.style.transform = "rotate(360deg)";
  imagenAnimacion.style.transition = "1s";
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
  if (botonCambioPentagono.innerText == "Área") {
    pentagono.innerHTML = `
  <div class="card__header">
  <h3>Pentagono</h3>
  <div class="card__img-boton">
  <img src="../img/pentagono.png" alt="Figura de un pentagono" />
  <button type="button" id="botonCambioPentagono" onclick="botonCambiantePentagono()">Perímetro</button>
  </div>
</div>
<div class="card__container-inputs">
  <label for="input1Pentagono">Apotema</label>
  <input type="number" id="input1Pentagono" />
  <label for="input2Pentagono">Base</label>
  <input type="number" id="input2Pentagono" />
</div>
<div class="card__container-respuesta">
  <button type="button" id="calcularPentagono" onclick="botonCalculoDePentagonoArea()">Calcular Área</button>
  <p id="respuestaPentagono"></p>
</div>
  `;
  } else {
    pentagono.innerHTML = `
  <div class="card__header">
  <h3>Pentagono</h3>
  <div class="card__img-boton">
  <img src="../img/pentagono.png" alt="Figura de un pentagono" />
  <button type="button" id="botonCambioPentagono" onclick="botonCambiantePentagono()">Área</button>
  </div>
</div>
<div class="card__container-inputs">
  <label for="input1Pentagono">Base</label>
  <input type="number" id="input1Pentagono" />
</div>
<div class="card__container-respuesta">
  <button type="button" id="calcularPentagono" onclick="botonCalculoDePentagonoPerimetro()">Calcular Perímetro</button>
  <p id="respuestaPentagono"></p>
</div>
  `;
  }
};

let calcularPerimetroPentagono = (pentagonoBase) => {
  let imagenAnimacion =
    document.getElementsByClassName("card")[6].children[0].children[1]
      .children[0];
  let perimetroPentagono = pentagonoBase * 5;
  let resultado = document.getElementById("respuestaPentagono");
  if (pentagonoBase < 0) {
    resultado.innerText = 0;
  } else if (Number.isInteger(perimetroPentagono)) {
    resultado.innerText = perimetroPentagono;
  } else if (Number.isInteger(perimetroPentagono) == false) {
    resultado.innerText = perimetroPentagono.toFixed(1);
  } else {
    resultado.innerText = 0;
  }
  imagenAnimacion.style.transform = "rotate(360deg)";
  imagenAnimacion.style.transition = "1s";
};

let calcularAreaPentagono = (pentagonoApotema, pentagonoBase) => {
  let imagenAnimacion =
    document.getElementsByClassName("card")[6].children[0].children[1]
      .children[0];
  let perimetroPentagono = pentagonoBase * 5;
  let areaPentagono = (perimetroPentagono * pentagonoApotema) / 2;
  let resultado = document.getElementById("respuestaPentagono");
  if (pentagonoApotema < 0 || pentagonoBase < 0) {
    resultado.innerText = 0;
  } else if (Number.isInteger(areaPentagono)) {
    resultado.innerText = areaPentagono;
  } else if (Number.isInteger(areaPentagono) == false) {
    resultado.innerText = areaPentagono.toFixed(1);
  } else {
    resultado.innerText = 0;
  }
  imagenAnimacion.style.transform = "rotate(360deg)";
  imagenAnimacion.style.transition = "1s";
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
  if (botonCambioCirculo.innerText == "Área") {
    circulo.innerHTML = `
    <div class="card__header">
    <h3>Circulo</h3>
    <div class="card__img-boton">
    <img src="../img/circulo.png" alt="Figura de un circulo" />
    <button type="button" id="botonCambioCirculo" onclick="botonCambianteCirculo()">Perímetro</button>
    </div>
  </div>
  <div class="card__container-inputs">
    <label for="input1Circulo">Radio</label>
    <input type="number" id="input1Circulo" />
  </div>
  <div class="card__container-respuesta">
    <button type="button" id="calcularCirculo" onclick="botonCalculoDeCirculoArea()">Calcular Área</button>
    <p id="respuestaCirculo"></p>
  </div>
    `;
  } else {
    circulo.innerHTML = `
    <div class="card__header">
    <h3>Circulo</h3>
    <div class="card__img-boton">
    <img src="../img/circulo.png" alt="Figura de un circulo" />
    <button type="button" id="botonCambioCirculo" onclick="botonCambianteCirculo()">Área</button>
    </div>
  </div>
  <div class="card__container-inputs">
    <label for="input1Circulo">Diametro</label>
    <input type="number" id="input1Circulo" />
  </div>
  <div class="card__container-respuesta">
    <button type="button" id="calcularCirculo" onclick="botonCalculoDeCirculoPerimetro()">Calcular Perímetro</button>
    <p id="respuestaCirculo"></p>
  </div>
    `;
  }
};

let calcularPerimetroCirculo = (circuloDiametro) => {
  let imagenAnimacion =
    document.getElementsByClassName("card")[7].children[0].children[1]
      .children[0];
  let respuesta = document.getElementById("respuestaCirculo");
  let circuloPI = Math.PI;
  let perimetroCirculo = circuloDiametro * circuloPI;
  if (Number.isInteger(perimetroCirculo)) {
    respuesta.innerText = perimetroCirculo;
    console.log(perimetroCirculo);
  } else if (Number.isInteger(perimetroCirculo) == false) {
    respuesta.innerText = perimetroCirculo.toFixed(2);
    console.log(perimetroCirculo);
  } else {
    respuesta.innerText = 0;
    console.log(perimetroCirculo);
  }
  imagenAnimacion.style.transform = "rotate(360deg)";
  imagenAnimacion.style.transition = "1s";
};

let calcularAreaCirculo = (circuloRadio) => {
  let imagenAnimacion =
    document.getElementsByClassName("card")[7].children[0].children[1]
      .children[0];
  let respuesta = document.getElementById("respuestaCirculo");
  let circuloPI = Math.PI;
  let areaCirculo = circuloPI * circuloRadio ** 2;
  if (Number.isInteger(areaCirculo)) {
    respuesta.innerText = areaCirculo;
  } else if (Number.isInteger(areaCirculo) == false) {
    respuesta.innerText = areaCirculo.toFixed(2);
  } else {
    respuesta.innerText = 0;
  }
  imagenAnimacion.style.transform = "rotate(360deg)";
  imagenAnimacion.style.transition = "2s";
};

let botonCalculoDeCirculoPerimetro = () => {
  let diametro = document.getElementById("input1Circulo").value;
  calcularPerimetroCirculo(diametro);
};

let botonCalculoDeCirculoArea = () => {
  let radio = document.getElementById("input1Circulo").value;
  calcularAreaCirculo(radio);
};
