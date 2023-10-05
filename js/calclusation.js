
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


// pentagon Calculation is here -----------------
document.getElementById('btn-pentagon').addEventListener('click', function () {
    const pentagonP = getFiledValueById('pentagon-p-filed');
    const pentagonB = getFiledValueById('pentagon-b-filed');
    const pentagonString = (0.5 * pentagonP * pentagonB).toFixed(2);
    const pentagonIs = parseFloat(pentagonString);

    if (isNaN(pentagonIs)) {
        alert('Please Enter Number Please')
        return;
    }
    else if (pentagonIs < 0) {
        alert('Please Enter Number Please')
        return;
    }
    setElementValueById('pentagon-total', pentagonIs);
    document.getElementById('li5').style.display = 'block';
})


// ellipse Calculation is here -----------------
document.getElementById('btn-ellipse').addEventListener('click', function () {
    const ellipseA = getFiledValueById('ellipse-a-filed');
    const ellipseB = getFiledValueById('ellipse-b-filed');
    const ellipseString = (3.1416 * ellipseA * ellipseB).toFixed(2);
    const ellipseIs = parseFloat(ellipseString);

    if (isNaN(ellipseIs)) {
        alert('Please Enter Number Please')
        return;
    }
    else if (ellipseIs < 0) {
        alert('Please Enter Number Please')
        return;
    }
    setElementValueById('ellipse-total', ellipseIs);
    document.getElementById('li6').style.display = 'block';
})
