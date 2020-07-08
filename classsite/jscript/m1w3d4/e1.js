const output = document.getElementById('output');

const startLoop = (x,y,z) => {
    output.innerHTML = '';
    for (let i = z; i < x; i+=y)
        output.innerHTML += `${i}<br>`;
}

const reset = () => output.innerHTML = 'Click Me!';