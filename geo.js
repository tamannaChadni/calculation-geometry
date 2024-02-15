// objective : get base, height of a triangle, calculate the area by using the provided formula and then display the area...
// step 1 - get base value;
// step 2 - get height value
// triangle

function calculateTriangle(params) {
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