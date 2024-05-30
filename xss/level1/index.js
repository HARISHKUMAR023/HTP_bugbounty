// function changeColor() {
//     const color = prompt("Enter a color");
//     document.getElementById('heading').style.color = color;
// }
function changeColor() {
    const color = prompt("Enter a color");
    document.getElementById('heading').innerHTML = color;
}
// Path: xss/level1/index.html

// function changeColor() {
//     const color = prompt("Enter a color");
//     if (/^#([0-9a-f]{3}){1,2}$/i.test(color) || ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'].includes(color)) {
//         document.getElementById('heading').style.color = color;
//     } else {
//         alert('Invalid color');
//     }
// }
