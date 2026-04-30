// window.alert("Hola Eusebiuz")

// document.getElementById("h1").textContent = "Hellooooooo";
document.getElementById("test").textContent = "El Pai de tu pai! "


/* Todo esto desde linea 7 son String y practicas IMPORTANTE 
*/
let str1 = "Hello\nWorld";
let str2 = `Hello World`;



for (let char of 'Hola') {
    console.log(char)
};

console.log('javascript'.toLocaleUpperCase());
console.log(`JAVASCRIPT`.toLocaleLowerCase());

let str4 = "luzzana";
console.log(str4.slice(0,5));
console.log


// let newStr = str5[0].toLocaleUpperCase() + str5.slice(1);

function ucFisrt(str5) {
    if (!str5) return str5;

    return str5[0].toLocaleUpperCase() + str5.slice(1);
}

console.log(ucFisrt("kevin"));

function checkSpam(str) {
    let lowerStr = str.toLocaleLowerCase();
    return lowerStr.includes('viagra') || 
    lowerStr.includes('xxx');
}
console.log(checkSpam('compra ViAgRA ahora'));
console.log(checkSpam('xxxxx gratis'));
console.log(checkSpam('coneja inocente'));

function truncate(str0, maxlength) {
    return (str0.length > maxlength) ?
        str0.slice(0, maxlength - 1) + '...' : str0;

}
console.log(truncate("Lo que me gustaría contar sobre este tema es:", 20));

function extractCurrencyValue(str9){
    return +str9.slice(1);
}
console.log(extractCurrencyValue('$120') === 120);

let strg = "Tu Puedes ";
let updateStrg = strg.repeat(4);

console.log(updateStrg);




function isOld(num) {
    if (num >= 17){
        return "You can drink and get a DUI";
    } else {
        return "Sorry, you shloud learn how to jerk off first <3"
    }
}

function checkAge() {
    let edad = document.getElementById("edad").value;
    let resultado = isOld(edad);
    document.getElementById("resultado").textContent = resultado;
}

