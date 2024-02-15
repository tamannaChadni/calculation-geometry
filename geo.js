// objective : get base, height of a triangle, calculate the area by using the provided formula and then display the area...
// step 1 - get base value;
// step 2 - get height value
// triangle

function calculateTriangle() {
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);

    // console.log( typeof base);


    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleBaseHeight = triangleHeightInput.value;
    const height = parseFloat(triangleBaseHeight);
    
    // console.log(height);

    const area = 0.5 * base * height;
    // console.log('area of the triangle is:', area);
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
    
}
// Rectangle

function calculateRectangle() {
    const rectangleWeightInput = document.getElementById('rectangle-weight');
    const rectangleWeightText = rectangleWeightInput.value;
    const weight = parseFloat(rectangleWeightText);

    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText );

    const area = weight * length;
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
    
}

// Parallelogram

function calculateParallelogram() {
    const ParallelogramBasetInput = document.getElementById('Parallelogram-base');
    const ParallelogramBasetText = ParallelogramBasetInput.value;
    const base = parseFloat(ParallelogramBasetText);

    const ParallelogramHeightInput = document.getElementById('Parallelogram-height');
    const ParallelogramHeightText = ParallelogramHeightInput.value;
    const height = parseFloat(ParallelogramHeightText );

    const area = base * height;
    const ParallelogramAreaSpan = document.getElementById('Parallelogram-area');
    ParallelogramAreaSpan.innerText = area;
    
}

// Rhombus

function calculateRhombus() {
    const  rhombusBased1 = document.getElementById('rhombus-base');
    const  rhombusBaseText =  rhombusBased1.value;
    const d1 = parseFloat( rhombusBaseText);

    const rhombusBased2 = document.getElementById('rhombus-height');
    const rhombusBaseText2 = rhombusBased2.value;
    const d2 = parseFloat(rhombusBaseText2 );

    const area =0.5* d1 * d2;
    const rhombusAreaSpan = document.getElementById('rhombus-area');
    rhombusAreaSpan.innerText = area;
    
}

// Pentagon
function calculatePentagon() {
    const pentagonBasetInput = document.getElementById('pentagon-base');
    const pentagonBasetText = pentagonBasetInput.value;
    const p = parseFloat(pentagonBasetText);

    const pentagonHeightInput = document.getElementById('pentagon-height');
    const pentagonHeightText = pentagonHeightInput.value;
    const b = parseFloat(pentagonHeightText );

    const area = 0.5 * p * b;
    const pentagonAreaSpan = document.getElementById('pentagon-area');
    pentagonAreaSpan.innerText = area;
    
}
// Ellipse
function calculateEllipse() {
    const ellipseBaseInputA = document.getElementById('ellipse-base');
    const ellipseBaseTextA = ellipseBaseInputA.value;
    const a = parseFloat(ellipseBaseTextA);

    const ellipseBaseInputB = document.getElementById('ellipse-height');
    const ellipseBaseTextB = ellipseBaseInputB.value;
    const b = parseFloat(ellipseBaseTextB );

    const area = 3.14 * a * b;
    const ellipseAreaSpan = document.getElementById('ellipse-area');
    ellipseAreaSpan.innerText = area;
    
}