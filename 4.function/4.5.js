function getDistance(x1, y1, x2, y2){
    let y = x2 - x1;
    let x = y2 - y1;
    
    return Math.sqrt(x * x + y * y).toFixed(2);
}
console.log(getDistance(1,1,2,2))