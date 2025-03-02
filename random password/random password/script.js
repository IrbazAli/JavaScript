const password = document.getElementById("password");
const length = 12;
let pass = "";

const chr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
function namem() {
    pass = "";
    for (let i = 0; i < length/2 ; i++) {
        const num = Math.floor(Math.random() * (10));
        const char = Math.floor(Math.random() * chr.length);
        createPass(num, char);
    }
    password.value = pass;
    console.log(pass);
}
function createPass(num, char) {
    pass += num + chr[char];
}
function copyPass(){
    password.select();
    document.execCommand("copy");
}
