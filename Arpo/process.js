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
    var mostFrequency1, mostFrequency2, mostFrequency3
    var indexFre1, indexFre2
    numSet = []
    values = (document.forms["modeForms"]["values"].value).split(" ").map(forMap)
    valueSet = set(values)
    for(i in valueSet){
        total = count(valueSet[i], values)
        numSet.push(total)
    }
    mostFrequency1 = Math.max(...numSet)
    indexFre1 = numSet.indexOf(mostFrequency1)
    numSet[indexFre1] = 0
    mostFrequency2 = Math.max(...numSet)
    indexFre2 = numSet.indexOf(mostFrequency2)
    numSet[indexFre2] = 0
    if(valueSet.length == 2){
        if(mostFrequency1 > mostFrequency2){
            document.getElementById("mode").innerHTML = valueSet[indexFre1]
        }else if(mostFrequency1 == mostFrequency2){
            document.getElementById("mode").innerHTML = valueSet[indexFre1].toString() + " and " + valueSet[indexFre2].toString()
        }else{
            document.getElementById("mode").innerHTML = "Don't have mode"
        }
    }else{
        mostFrequency3 = Math.max(...numSet)
        if(mostFrequency1 > mostFrequency2){
            document.getElementById("mode").innerHTML = valueSet[indexFre1]
        }else if(mostFrequency1 == mostFrequency2 && mostFrequency1 > mostFrequency3){
            document.getElementById("mode").innerHTML = valueSet[indexFre1].toString() + " and " + valueSet[indexFre2].toString()
        }else{
            document.getElementById("mode").innerHTML = "Don't have mode"
        }
    }
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

//ลําดับอนุกรม(ลําดับจํากัด)(DEV by Ping)
function sequence(){
    var ans, numa1, numa2, numn, numd //หาพจน์ที่ N แบบธรรมดา
    numa1 = Number(document.forms["sequenceForms"]["num_sequencea1"].value)
    numa2 = Number(document.forms["sequenceForms"]["num_sequencea2"].value)
    numd = numa2-numa1
    ans = numa1+(numn-1)*numd
    document.getElementById("sequence_ans").innerHTML = ans
    return false
}

//ลําดับอนุกรม(อนุกรมเลขคณิต)(DEV by Ping)
function arithmetic_sequence(){
    var ans, numa1, numa2, numa3, numn//หาลําดับอนุกรม
    numa1 = Number(document.forms["arithmeticForms"]["num_arithmetica1"].value)
    numa2 = Number(document.forms["arithmeticForms"]["num_arithmetica2"].value)
    numa3 = Number(document.forms["arithmeticForms"]["num_arithmetica3"].value)
    numn = Number(document.forms["arithmeticForms"]["num_arithmeticnn"].value)
    ans = (numn/2)*(numa1+numn)
    document.getElementById("arithmetic_ans").innerHTML = ans
    return false
}
