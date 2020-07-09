/*Callback Lab*/
/**See if you can guess what this will log: */
/* const foo = (param, param2) => {
    param(param2);
}

const bar = (param) => {
    console.log(param);
}

foo(bar, 'hi'); */
/**expectation: console output: hi */
/**result: console output: hi */

/**See if you can guess what this will log: */
/*const foo = (param, param2) => {
    param(param2, 'hello');
}

const bar = (param, param2) => {
    console.log(param2);
}

foo(bar, 'hi');*/
/**expectation: console output: hello */
/**result: console output: hello*/
/*const baz = (param) => {
    console.log(param.toUpperCase());
}
foo(baz, 'hello')*/
/**expectation: console output: HELLO */
/**result: console output: HELLOS*/
 
/**Electric Mixer Excercise */
const electricMixer = (attachment) => {
    console.log("This mixer is now: " + attachment());
}
electricMixer(() => {
    return "spiralizing";
});

const spiralizer = () => {
    return "spiralizing";
}
  
electricMixer(spiralizer);
const slicerDicer = () => {
    return "slicin' and dicin'";
}
  
electricMixer(spiralizer);
electricMixer(slicerDicer);

const batter = () => {
    return "batter 'em up";
}
electricMixer(batter);

/*
functionName(CALLBACK, MILLISECONDS)
setTimeout(() => {
  console.log('hi');
}, 2000);
setInterval(() => {
  console.log('hi');
}, 2000);
*/
/*Use SetInterval to display a number that increases by 1 each second (it's a clock!) */
let x = 0;
let si = setInterval(()=>{
    console.log(x++);
    if (x === 10)
        clearInterval(si);
}
    ,1000);