
// Triangle Calculation is here -----------------
document.getElementById('btn-triangle').addEventListener('click', function () {
    const triangleB = getFiledValueById('tri-b-filed');
    const triangleH = getFiledValueById('tri-h-filed');
    const triangleString = (0.5 * triangleB * triangleH).toFixed(2);
    const triangleIs = parseFloat (triangleString);

    if (isNaN(triangleIs)) {
        alert('Please Enter Number Please')
        return;
    }
    else if (triangleIs < 0) {
        alert('Please Enter Number Please')
        return;
    }

    setElementValueById('triangle-total', triangleIs);
    
    document.getElementById('li1').style.display = 'block';
})


// rectangle Calculation is here -----------------
document.getElementById('btn-rectangle').addEventListener('click', function () {
    const rectangleW = getFiledValueById('rac-w-filed');
    const rectangleL = getFiledValueById('rac-l-filed');
    const rectangleString = (rectangleW * rectangleL).toFixed(2);
    const rectangleIs = parseFloat(rectangleString);

    if (isNaN(rectangleIs)) {
        alert('Please Enter Number Please')
        return;
    }
    else if (rectangleIs < 0) {
        alert('Please Enter Number Please')
        return;
    }
    setElementValueById('rectangle-total', rectangleIs);
    document.getElementById('li2').style.display = 'block';
})


// parallelogram Calculation is here -----------------
document.getElementById('btn-parallelogram').addEventListener('click', function () {
    const parallelogramB = getFiledValueById('paralle-b-filed');
    const parallelogramH = getFiledValueById('paralle-h-filed');
    const parallelogramString = (parallelogramB * parallelogramH).toFixed(2);
    const parallelogramIs = parseFloat(parallelogramString);

    if (isNaN(parallelogramIs)) {
        alert('Please Enter Number Please')
        return;
    }
    else if (parallelogramIs < 0) {
        alert('Please Enter Number Please')
        return;
    }
    setElementValueById('parallelogram-total', parallelogramIs);
    document.getElementById('li3').style.display = 'block';
})


// rhombus Calculation is here -----------------
document.getElementById('btn-rhombus').addEventListener('click', function () {
    const rhombusD1 = getFiledValueById('rhombus-d1-filed');
    const rhombusD2 = getFiledValueById('rhombus-d2-filed');
    const rhombusString = (0.5 * rhombusD1 * rhombusD2).toFixed(2);
    const rhombusIs = parseFloat(rhombusString);

    if (isNaN(rhombusIs)) {
        alert('Please Enter Number Please')
        return;
    }
    else if (rhombusIs < 0) {
        alert('Please Enter Number Please')
        return;
    }
    setElementValueById('rhombus-total', rhombusIs);
    document.getElementById('li4').style.display = 'block';
})


// rhombus Calculation is here -----------------
document.getElementById('btn-rhombus').addEventListener('click', function () {
    const rhombusD1 = getFiledValueById('rhombus-d1-filed');
    const rhombusD2 = getFiledValueById('rhombus-d2-filed');
    const rhombusString = (0.5 * rhombusD1 * rhombusD2).toFixed(2);
    const rhombusIs = parseFloat(rhombusString);

    if (isNaN(rhombusIs)) {
        alert('Please Enter Number Please')
        return;
    }
    else if (rhombusIs < 0) {
        alert('Please Enter Number Please')
        return;
    }
    setElementValueById('rhombus-total', rhombusIs);
    document.getElementById('li4').style.display = 'block';
})
