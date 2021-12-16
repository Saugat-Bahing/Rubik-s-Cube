// Generate array
const scene = document.querySelector(".scene");

function ArrGen() {
    let Arr = [];
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            for (let k = -1; k < 2; k++) {
                Arr.push([i, j, k])
            }
        }
    }
    return Arr
}

function createChild(parent, i) {
    let clas = "cube" + String(i);
    createdElement = document.createElement("div");
    createdElement.classList.add(clas);
    parent.appendChild(createdElement);
}

function CreateDivs(scene) {
    for (let i = 0; i < 27; i++) {
        createChild(scene, i)
    }
}

function createFace(parent, j) {
    let claas = "face" + String(j);
    let createdFace = document.createElement('div');
    createdFace.classList.add(claas);
    parent.appendChild(createdFace);
}

function insertFace() {
    let clas;
    let div;
    for (let i = 0; i < 27; i++) {
        clas = "cube" + String(i);
        div = document.getElementsByClassName(clas)[0];
        for (let j = 0; j < 6; j++) {
            createFace(div, j);
        }
    }
}


function CubeGen(scene) {
    let childs = scene.childNodes;
    CreateDivs(scene);
    insertFace();
}

function paintColor() {
    let clas;
    let div;
    let face;
    for (let i = 18; i < 27; i++) {
        clas = "cube" + String(i);
        div = document.getElementsByClassName(clas)[0];
        face = div.childNodes[4];
        face.classList.add("backWhite")
    }
    for (let i = 0; i < 9; i++) {
        clas = "cube" + String(i);
        div = document.getElementsByClassName(clas)[0];
        face = div.childNodes[5];
        face.classList.add("backYellow")
    }
    let arr=[0, 1, 2, 9, 10, 11, 18, 19, 20];
    arr.forEach((element) =>{
        clas = "cube" + String(element);
        div = document.getElementsByClassName(clas)[0];
        face = div.childNodes[0];
        face.classList.add("backOrange")
    })
    let arr1=[2, 5, 8, 11, 14, 17, 20, 23, 26];
    arr1.forEach((element) =>{
        clas = "cube" + String(element);
        div = document.getElementsByClassName(clas)[0];
        face = div.childNodes[3];
        face.classList.add("backGreen")
    })
    let arr2=[0, 3, 6, 9, 12, 15, 18, 21, 24];
    arr2.forEach((element) =>{
        clas = "cube" + String(element);
        div = document.getElementsByClassName(clas)[0];
        face = div.childNodes[2];
        face.classList.add("backBlue");
    })
    let arr3=[6, 7, 8, 15, 16, 17, 24, 25, 26];
    arr3.forEach((element) =>{
        clas = "cube" + String(element);
        div = document.getElementsByClassName(clas)[0];
        face = div.childNodes[1];
        face.classList.add("backRed");
    })
}

CubeGen(scene);
paintColor();
Cube = ArrGen();
console.log(Cube);
