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

//15.วิธีเรียงสับเปลี่ยน, ความน่าจะเป็น, ทฤษฎีบทวินาม
//วิธีเรียงสับเปลี่ยน
//สับเปลี่ยนเชิงเส้น ไม่ซ้ำกันเลย (Linear Permutation)
function linearPer1(){
    var num, ans, i
    ans = 1
    i = 1
    num = Number(document.forms[""][""].value)
    for (1; i <= num; i++ ){
        ans *= i
    }
    document.getElementById("linear_per1").innerHTML = ans
    return false
}
//สับเปลี่ยนเชิงเส้น มีตัวซ้ำ
function linearPer2(){
    var num, ans, divideNum, i, devide
    ans = 1
    i = 1
    devide = 1
    num = Number(document.forms["permutation_similar"]["fac"].value)
    divideNum = document.forms["permutation_similar"]["fac_devide"].value
    divideNum = divideNum.split(",")
    for (1; i <= num; i++ ){
        ans *= i
    }
    for(x in divideNum){
        i = 1
        for (1; i<=Number(divideNum[x]); i++){
            devide *= i
        }
    }
    ans /= devide
    document.getElementById("linear_per2").innerHTML = ans
    return false
}