//ใช้เพื่อนับค่า want ใน array ที่ต้องการว่ามีกี่ตัว Argument: Number, array | return: Number
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

//ใช้เพื่อหา set(ไม่มีตัวซ้ำใน array) Argument: array | return: array
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

//ใช้เพื่อหาค่าตาม 3 เหลี่ยมพาสคาล ใช้ในทฤษฎีบททวินาม(Binomial Theorem) | return: array
function trianglePascal_n(num){
    var round, value, now_value
    value = [1, 1]
    for(round = 1; round <= num; round++){
        now_value = []
        for(posi = 1; posi < round; posi++){
            now_value.push(value[posi]+value[posi-1])
        }
        now_value.unshift(1)
        now_value.push(1)
        value = now_value
    }
    return value
}

//ใช้เพื่อหาค่า log ของ y ฐาน x | return: Number
function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
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
    var mostFrequency1, mostFrequency2, mostFrequency3
    var indexFre1, indexFre2
    numSet = []
    values = (document.forms["modeForms"]["values"].value).split(" ").map(Number)
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


// 14.ฟังก์ชันเอกโพซ์เนนเชียล และฟังก์ชันลอการิทึม
//Exponential
function findExponential(){
    var value, power, ans
    value = eval(document.forms["Exponential_form"]["value"].value)
    power = eval(document.forms["Exponential_form"]["power"].value)
    ans = Math.pow(value, power)
    if(1>ans>0){
        document.getElementById("featureExpo").innerHTML = "Decreasing function"
    }else if(ans>1){
        document.getElementById("featureExpo").innerHTML = "Increasing function"
    }else{
        document.getElementById("featureExpo").innerHTML = "Isn't exponential function"
    }
    document.getElementById("exponential").innerHTML = ans
    return false
}


//Logarithm(Fundamental)
function findLog(){
    var value, base
    value = document.forms["Logarithm_form"]["value_x"].value
    base = document.forms["Logarithm_form"]["value_y"].value
    if(value == "e"){
        value = 2.7182818
    }
    if(base == "e"){
        base = 2.7182818
    }
    value = eval(value)
    base = eval(base)
    document.getElementById("log").innerHTML = getBaseLog(base, value)
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
    var num, ans, divideNum, i, divide
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


//ทฤษฎีบททวินาม(Binomial Theorem)
function bioTheorem(){
    var num = Number(document.forms["Binomial_Theorem_form"]["exponent"].value)
    var i, data, aExponent, bExponent, constant
    data = []
    for(i = 0; i <= num; i++){
        aExponent = num-i
        bExponent = i
        constant = trianglePascal_n(num)
        if(i == 0){
            data.push("a<sup>" + aExponent.toString() + "</sup>")
        }else if(i == num){
            data.push("b<sup>" + bExponent.toString() + "</sup>")
        }else{
            data.push(constant[i] + "a<sup>" + aExponent.toString() + "</sup>b<sup>" + bExponent.toString() + "</sup>")
        }
    }
    document.getElementById("binomial_theorem").innerHTML = data.join(" + ")
    return false
}


//5.เมทริกซ์(Matrix)
//plus and minus matrix(2*2)
function plus_minusMatrix(){
    var matA_11, matA_12, matA_21, matA_22
    var matB_11, matB_12, matB_21, matB_22
    var plus_minus = document.forms["plus_matrix22_form"]["plus_minus"].value

    //matAB_11, matAB_12, matAB_21, matAB_22
    //input matrix A 
    matA_11 = eval(document.forms["plus_matrix22_form"]["matA_11"].value)
    matA_12 = eval(document.forms["plus_matrix22_form"]["matA_12"].value)
    matA_21 = eval(document.forms["plus_matrix22_form"]["matA_21"].value)
    matA_22 = eval(document.forms["plus_matrix22_form"]["matA_22"].value)

    //input matrix B
    matB_11 = eval(document.forms["plus_matrix22_form"]["matB_11"].value)
    matB_12 = eval(document.forms["plus_matrix22_form"]["matB_12"].value)
    matB_21 = eval(document.forms["plus_matrix22_form"]["matB_21"].value)
    matB_22 = eval(document.forms["plus_matrix22_form"]["matB_22"].value)

    if(plus_minus == "-"){
        matB_11 = 0-matB_11
        matB_12 = 0-matB_12
        matB_21 = 0-matB_21
        matB_22 = 0-matB_22
    }
    document.getElementById("22matAB_11").value = matA_11 + matB_11
    document.getElementById("22matAB_12").value = matA_12 + matB_12
    document.getElementById("22matAB_21").value = matA_21 + matB_21
    document.getElementById("22matAB_22").value = matA_22 + matB_22

    return false
}
