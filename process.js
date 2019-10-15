//7.เวกเตอร์ 2 มิติ 3 มิติ
//Vector 2D size (หาขนาดของเวกเตอร์ 2 มิติ)
//****ยังไม่กำหนดขนาดของทศนิยม เมื่อแสดงผลออกมาทศนิยมเยอะมั๊ก****
function vector2D(){
    var pointX1, pointY1, pointX2, pointY2, size
    pointX1 = Number(document.forms[""][""].value)
    pointY1 = Number(document.forms[""][""].value)
    pointX2 = Number(document.forms[""][""].value)
    pointY2 = Number(document.forms[""][""].value)
    size = ((pointX1-pointX2)**2 + (pointY1-pointY2)**2)**0.5
    document.getElementById("vector_size2D").innerHTML = size
    return false
}
//Vector 3D size
function vector3D(){
    var pointX1, pointY1, pointZ1, pointX2, pointY2, pointZ2, size
    pointX1 = Number(document.forms[""][""].value)
    pointY1 = Number(document.forms[""][""].value)
    pointZ1 = Number(document.forms[""][""].value)
    pointX2 = Number(document.forms[""][""].value)
    pointY2 = Number(document.forms[""][""].value)
    pointZ2 = Number(document.forms[""][""].value)
    size = ((pointX1-pointX2)**2 + (pointY1-pointY2)**2 + (pointZ1-pointZ2)**2)**0.5
    document.getElementById("vector_size3D").innerHTML = size
    return false
}