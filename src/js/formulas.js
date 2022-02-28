//Triangulo

let calcularPerimetroTriangulo = () => {
  let trianguloBase;
  let trianguloAltura;
  let trianguloLado1;
  let trianguloLado2;
  let trianguloLado3;
  let perimetroTriangulo = trianguloLado1 + trianguloLado2 + trianguloLado3;
  let areaTriangulo = (trianguloBase * trianguloAltura) / 2;
  console.log(perimetroTriangulo);
};

let calcularAreaTriangulo = () => {
  let trianguloBase;
  let trianguloAltura;
  let trianguloLado1;
  let trianguloLado2;
  let trianguloLado3;
  let perimetroTriangulo = trianguloLado1 + trianguloLado2 + trianguloLado3;
  let areaTriangulo = (trianguloBase * trianguloAltura) / 2;
  console.log(areaTriangulo);
};

//Cuadrado

let calcularPerimetroCuadrado = () => {
  let cuadradoLado;
  let perimetroCuadrado = cuadradoLado * 4;
  let areaCuadrado = cuadradoLado ** 2;
  console.log(perimetroCuadrado);
};

let calcularAreaCuadrado = () => {
  let cuadradoLado;
  let perimetroCuadrado = cuadradoLado * 4;
  let areaCuadrado = cuadradoLado ** 2;
  console.log(areaCuadrado);
};

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
