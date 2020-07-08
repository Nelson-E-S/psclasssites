/*get elements*/
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const oper = document.getElementById('oper');
const ans = document.getElementById('answer');

/*math functions*/
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const quo = (x, y) => x / y;
const mul = (x, y) => x * y;

/*excercise vars*/
let a = 0;
let b = 0;
let c = 0;
/*assigner*/
const setAB = () => {
    a = Number(num1.value);
    b = Number(num2.value);
}

/*do actions*/
const doAdd = () => {
        oper.innerHTML = "sum";
        setAB();
        c = add(a,b);
        ans.innerHTML = c;
};
const doSub = () => {
    oper.innerHTML = "subtraction";
    setAB();
    c = sub(a,b);
    ans.innerHTML = c;
};
const doQuo = () => {
    oper.innerHTML = "qoutient";
    setAB();
    c = quo(a,b);
    ans.innerHTML = c;
};
const doMul = () => {
    oper.innerHTML = "product";
    setAB();
    c = mul(a,b);
    ans.innerHTML = c;
};
const doClear = () => {
    oper.innerHTML = "blank";
    ans.innerHTML = "blank";
    num1.value = '';
    num2.value = '';
    a = 0;
    b = 0;
    c = 0;
}