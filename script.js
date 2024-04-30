document.getElementById("calculate").onclick = function rectangle(){
    let length = parseFloat(document.getElementById("length").value);
    let width = parseFloat(document.getElementById("width").value);
    let area = length * width
    let perimeter = (length + width) * 2
    document.getElementById("area").textContent="Area:" + area;
    document.getElementById("perimeter").textContent="Perimeter:" + perimeter;
   }


function hello(name) {
    console.log("hello" + name);
}
hello("alex");

function areaAndPerimeter( length , width){
    

    let area = length * width
    let perimeter = (length + width) * 2

    console.log("area" + area)
    console.log("perimeter" + perimeter)
}
area_and_perimeter(10 , 14)
console.log(2==2)
console.log(2=="2")
console.log(2==="2")
for (let num = 0; num<=0; num++){
    console.log(num)
}