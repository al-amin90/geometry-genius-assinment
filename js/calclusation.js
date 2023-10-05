
// Triangle Calculation is here -----------------
document.getElementById('btn-triangle').addEventListener('click', function () {
    const triangleB = getFiledValueById('tri-b-filed');
    const triangleH = getFiledValueById('tri-h-filed');
    const triangleIs = triangleB * triangleH;

    if (isNaN(triangleIs)) {
        alert('Please Enter Number Please')
        return;
    }
    else if (triangleIs < 0) {
        alert('Please Enter Number Please')
        return;
    }
    setElementValueById('triangle-total', triangleIs);
    document.querySelector('li').classList.remove("hidden");
})

// Triangle Calculation is here -----------------
document.getElementById('btn-triangle').addEventListener('click', function () {
    const triangleB = getFiledValueById('tri-b-filed');
    const triangleH = getFiledValueById('tri-h-filed');
    const triangleIs = triangleB * triangleH;

    if (isNaN(triangleIs)) {
        alert('Please Enter Number Please')
        return;
    }
    else if (triangleIs < 0) {
        alert('Please Enter Number Please')
        return;
    }
    setElementValueById('triangle-total', triangleIs);
    document.querySelector('li').classList.remove("hidden");
})