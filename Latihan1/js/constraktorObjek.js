// menggunakan operator new
// consep oop
function convertColor(r,g,b){
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function(){
        const {r,g,b} = this; // lakukan distrakturing
        return `rgb(${r},${g},${b})`;
    }
    color.hex = function(){
        const {r,g,b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
        
    return color;
}

function Color(r,g,b){
    this.r = r;
    this.g = g;
    this.b = b;
}
// gunakan function seteperti biasa jangan menggunakan arrow function
// agar this nya mengacu pada objek yang baru dibuat dapat berjalan
Color.prototype.rgb = function(){
    const {r,g,b} = this; // lakukan distrakturing
    return `rgb(${r},${g},${b})`;
}

Color.prototype.rgba = function(a=0.3){
    const {r,g,b} = this;
    return `rgba(${r},${g},${b},${a})`;
}
let warna1 = new Color(25,140,60);
document.body.style.backgroundColor = warna1.rgba();
console.log(warna1.rgb());
console.log(warna1.rgba(0.5));
console.log(convertColor(warna1.r,warna1.g,warna1.b).rgb())
console.log(convertColor(warna1.r,warna1.g,warna1.b).hex())
