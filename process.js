//7.เวกเตอร์ 2 มิติ 3 มิติ
//Find vector size (หาขนาดของเวกเตอร์)
function vectorSize(){
    var pointX1, pointY1, pointX2, pointY2, size
    pointX1 = Number(document.forms[""][""].value)
    pointY1 = Number(document.forms[""][""].value)
    pointX2 = Number(document.forms[""][""].value)
    pointY2 = Number(document.forms[""][""].value)
    size = ((pointX1-pointX2)**2 + (pointY1-pointY2)**2)**0.5
    document.getElementById("vector_size").innerHTML = size
    return false
}