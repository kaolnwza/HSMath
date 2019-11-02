function forMap(value){
    return Number(value)
}

function count(want, array){
    var i;
    var count = 0
    for(i in array){
        if(array[i] == want){
            count++;
        }
    }
    return count
}

function set(array){
    var i, check, newArray;
    newArray = []
    for(i in array){
        check = newArray.includes(array[i])
        if(!check){
            newArray.push(array[i])
        }
    }
    return newArray
}

function loveYou(){
    var person1 = document.forms["twoPerson"]["person1"].value;
    var person2 = document.forms["twoPerson"]["person2"].value;
    var answer = person1+" love "+person2
    document.getElementById("love").value = answer;
    return false
}


// Calculation page
function plusJs(){
    var a, b, c;
    a = Number(document.forms["plusForms"]["numAPlus"].value);
    b = Number(document.forms["plusForms"]["numBPlus"].value);
    c = a+b;
    document.getElementById("plus").innerHTML = c;
    return false
}
function minusJs(){
    var a, b, c;
    a = Number(document.forms["minusForms"]["numAMinus"].value);
    b = Number(document.forms["minusForms"]["numBMinus"].value);
    c = a-b;
    document.getElementById("minus").innerHTML = c;
    return false
}


//7.เวกเตอร์ 2 มิติ 3 มิติ
//Vector 2D size (หาขนาดของเวกเตอร์ 2 มิติ)
function vector2D(){
    var pointX1, pointY1, pointX2, pointY2, size
    pointX1 = Number(document.forms["vertor2DForms"]["pointx1"].value)
    pointY1 = Number(document.forms["vertor2DForms"]["pointy1"].value)
    pointX2 = Number(document.forms["vertor2DForms"]["pointx2"].value)
    pointY2 = Number(document.forms["vertor2DForms"]["pointy2"].value)
    size = ((pointX1-pointX2)**2 + (pointY1-pointY2)**2)**0.5
    document.getElementById("vector_size2D").innerHTML = size
    return false
}


//Vector 3D size
function vector3D(){
    var pointX1, pointY1, pointZ1, pointX2, pointY2, pointZ2, size
    pointX1 = Number(document.forms["vertor3DForms"]["pointx1"].value)
    pointY1 = Number(document.forms["vertor3DForms"]["pointy1"].value)
    pointZ1 = Number(document.forms["vertor3DForms"]["pointz1"].value)
    pointX2 = Number(document.forms["vertor3DForms"]["pointx2"].value)
    pointY2 = Number(document.forms["vertor3DForms"]["pointy2"].value)
    pointZ2 = Number(document.forms["vertor3DForms"]["pointz2"].value)
    size = ((pointX1-pointX2)**2 + (pointY1-pointY2)**2 + (pointZ1-pointZ2)**2)**0.5
    document.getElementById("vector_size3D").innerHTML = size
    return false
}


//10.สถิติ
//Mode
function mode(){
    var values, valueSet, i, numSet, total
    numSet = []
    values = (document.forms["modeForms"]["values"].value).split(" ").map(forMap)
    valueSet = set(values)
    for(i in valueSet){
        total = count(valueSet[i], values)
        numSet.push(total)
    }
    //ข้างบนถูกหมดแล้ว
    Math.max(...numSet) //หาค่าที่มากที่สุดใน Array
    //ถ้าจำนวนค่ามากสุด ใน numSet มากกว่า 2 แสดงว่าไม่มี mode
    //ยังไม่เสร็จ เดี๋ยวทำต่อ
    document.getElementById("mode").innerHTML = numSet
    return false
}




//15.วิธีเรียงสับเปลี่ยน, ความน่าจะเป็น, ทฤษฎีบทวินาม
//วิธีเรียงสับเปลี่ยน
//สับเปลี่ยนเชิงเส้น ไม่ซ้ำกันเลย (Linear Permutation)
function linearPer1(){
    var num, ans, i
    ans = 1
    i = 1
    num = Number(document.forms["permutation_not_similar"]["fac"].value)
    for (1; i <= num; i++){
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
    divide = 1
    num = Number(document.forms["permutation_similar"]["fac"].value)
    divideNum = document.forms["permutation_similar"]["fac_divide"].value
    divideNum = divideNum.split(",")
    for (1; i <= num; i++ ){
        ans *= i
    }
    for(x in divideNum){
        i = 1
        for (1; i<=Number(divideNum[x]); i++){
            divide *= i
        }
    }
    ans /= divide
    document.getElementById("linear_per2").innerHTML = ans
    return false
}


//สับเปลี่ยนวงกลม
function circlePer(){
    var num, ans, i
    num = Number(document.forms["circle_permutation"]["num"].value)-1
    ans = 1
    for (i = 1; i <= num; i++){
        ans *= i
    }
    document.getElementById("circle_per").innerHTML = ans
    return false
}


//ความน่าจะเป็น
function  probability(){
    var numProbability, numE, numS //numE ความน่าจะเป็นของเหตุการณ์ที่สนใจ numS ความน่าจะเป็นของเหตุการณ์ทั้งหมด
    numE = Number(document.forms["probabilityForms"]["num_event"].value)
    numS = Number(document.forms["probabilityForms"]["num_sample_space"].value)
    numProbability = numE/numS
    document.getElementById("probability_ans").innerHTML = numProbability
    return false
}
