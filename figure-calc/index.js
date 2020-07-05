function toRadian(deg) {
    return (Math.PI * deg) / 180;
}

function toDegrees(rad) {
    return rad * (180 / Math.PI);
}

function calculateParalelogram() {
    let bSide = document.getElementById('prgBside').valueAsNumber;
    let aSide = document.getElementById('prgAside').valueAsNumber;
    let angleValue = document.getElementById('prgAngle').valueAsNumber;
    let xСathetus = aSide * Math.cos(toRadian(angleValue)),
        h = aSide * Math.sin(toRadian(angleValue));
    let topRightPointX = bSide + xСathetus + 10;
    let topRightPointY = 140 - h;
    const angle = 'M10 140 H ' + (bSide + 10) + ' L ' + topRightPointX + ' ' + topRightPointY +
        ' H ' + (topRightPointX - bSide) + ' Z';
    document.getElementById('paralelogram').setAttribute('d', angle);
    document.getElementById('prgH').innerHTML = h.toFixed(2);
    document.getElementById('prgArea').innerHTML = (h * bSide).toFixed(2);
};

function calculateCircle() {
    let r = document.getElementById('circleRadius').valueAsNumber;
    document.getElementById('circle').setAttribute('r', r);
    document.getElementById('circleArea').innerHTML = (Math.PI * (r * r)).toFixed(2);
    document.getElementById('circleL').innerHTML = (2 * Math.PI * r).toFixed(2);
};

function calculateElips() {
    let horisontalR = document.getElementById('horisontalRadius').valueAsNumber;
    let verticalR = document.getElementById('verticalRadius').valueAsNumber;
    document.getElementById('elipse').setAttribute('rx', horisontalR);
    document.getElementById('elipse').setAttribute('ry', verticalR);
    document.getElementById('elipsArea').innerHTML = (
        Math.PI *
        horisontalR *
        verticalR
    ).toFixed(2);
    document.getElementById('elipsL').innerHTML = (
        Math.PI *
        (horisontalR + verticalR)
    ).toFixed(2);
};

function calculateSquare() {
    let a = document.getElementById('squareValue').valueAsNumber;
    document.getElementById('square').setAttribute('width', a);
    document.getElementById('square').setAttribute('height', a);
    document.getElementById('squareDiagonal').innerHTML = (a * Math.sqrt(2)).toFixed(2);
    document.getElementById('squareArea').innerHTML = a * a;
};

function calculateRectangle() {
    let a = document.getElementById('rectangleA').valueAsNumber;
    let b = document.getElementById('rectangleB').valueAsNumber;
    document.getElementById('rectangle').setAttribute('width', a);
    document.getElementById('rectangle').setAttribute('height', b);
    document.getElementById('rectangleDiagonal').innerHTML = (Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))).toFixed(2);
    document.getElementById('rectangleArea').innerHTML = (a * b);
};

function calculateTriangle() {
    let sideA = document.getElementById('valueTriangleA').valueAsNumber;
    let sideB = document.getElementById('valueTriangleB').valueAsNumber;
    let sideC = Math.sqrt(
        Math.pow(sideA, 2) + Math.pow(sideB, 2)).toFixed(2);
    let h = (sideA * sideB) / sideC;
    const angle = 'M10 10 V ' + (sideA + 10) + ' H ' + (sideB + 10) + ' Z';
    let angleA = toDegrees(Math.atan(sideA / sideB));
    document.getElementById('triangle').setAttribute('d', angle);
    document.getElementById('triangleA').innerHTML = angleA.toFixed(2);
    document.getElementById('triangleB').innerHTML = (90 - angleA).toFixed(2);
    document.getElementById('triangleArea').innerHTML = ((sideA * sideB) / 2).toFixed(2);
    document.getElementById('sideC').innerHTML = sideC;
    document.getElementById('triangleH').innerHTML = h.toFixed(2);

};

function calculateAll() {
    calculateParalelogram();
    calculateCircle();
    calculateElips();
    calculateSquare();
    calculateRectangle();
    calculateTriangle();
}
document.getElementById('btnCalculate').addEventListener('click', () => {
    calculateAll();
});

document.getElementById('instant').addEventListener('change', e => {
    if (e.target.checked) {
        document.querySelector("body").addEventListener('change', calculateAll, false);
        document.getElementById('btnCalculate').disabled = true;
    } else {
        removeListener();
        document.getElementById('btnCalculate').disabled = false;
    }
});

function removeListener() {
    document.querySelector("body").removeEventListener('change', calculateAll, false);
}