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

//ใช้เพื่อหาค่า log ของ y ฐาน x Argument: Number, Number | return: Number
function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
}

//ใช้เพื่อหาค่าตาม 3 เหลี่ยมพาสคาล ใช้ในทฤษฎีบททวินาม(Binomial Theorem) Argument: Number | return: array
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

//ลําดับอนุกรม(ลําดับจํากัด(ลําดับเลขคณิต))(DEV by Ping)
function sequence(){
    var ans, a1, a2, n, d //หาพจน์ที่ N แบบธรรมดา an = a1+(n-1)d
    a1 = Number(document.forms["sequenceForms"]["num_sequencea1"].value) //numa1 = a1
    a2 = Number(document.forms["sequenceForms"]["num_sequencea2"].value) //numa2 = a2
    n = Number(document.forms["sequenceForms"]["num_sequencenn"].value) // numn = n
    d = a2-a1 // numd = d
    ans = a1+(n-1)*d // an = a1+(n-1)d
    document.getElementById("sequence_ans").value = ans
    return false
}

//ลําดับเรขาคณิต(DEV by Ping)
function sequence2(){
    var ans, a1, a2, a3, r, n //หาลําดับเรขาคณิต
    a1 = Number(document.forms["sequenceForms2"]["num_sequence2a1"].value) //numa1 = a1
    a2 = Number(document.forms["sequenceForms2"]["num_sequence2a2"].value) //numa2 = a2
    a3 = Number(document.forms["sequenceForms2"]["num_sequence2a3"].value) //numa3 = a3
    r = Number(document.forms["sequenceForms2"]["num_sequence2nr"].value) //numr = r
    n = Number(document.forms["sequenceForms2"]["num_sequence2nn"].value) //numn = n
    ans = a1*(r**(n-1)) //a1*(r**(n-1))
    document.getElementById("sequence2_ans").value = ans
}

//ลําดับอนุกรม(อนุกรมเลขคณิต)(DEV by Ping)
function arithmetic_sequence(){
    var ans, a1, a2, a3, n//หาลําดับอนุกรม
    a1 = Number(document.forms["arithmeticForms"]["num_arithmetica1"].value) //numa1 = a1
    a2 = Number(document.forms["arithmeticForms"]["num_arithmetica2"].value) //numa2 = a2
    a3 = Number(document.forms["arithmeticForms"]["num_arithmetica3"].value) //numa3 = a3
    n = Number(document.forms["arithmeticForms"]["num_arithmeticnn"].value) //numn = an
    ans = (numn/2)*(numa1+numn) //สูตร sn = n/2(a1+an)
    document.getElementById("arithmetic_ans").value = ans
    return false
}

//ลําดับอนุกรม(อนุกรมเรขาคณิต)(DEV by Ping)
function arithmetic_geometic(){
    var input_done, numn, numr //หาลําดับเรขาคณิต
    input_done //รอการแก้บัคโดยเก้าเดาว่าเป็น an
    numn = Number(document.forms["geometicForms"]["num_geometicnn"].value)//numn = n(เลขชี้กําลัง)
    numr = input_done[input_done.length-1]/input_done[input_done.length-2]//numr = r
    if (numr < 1){
        ans = (input_done[0]*(1-(numr**numn)))/1-numr//sn = a1*(1-(r**n))/1-r
        document.getElementById("geometic_ans").value = ans
    }else if (numr > 1){
        ans = (input_done[0]*((numr**numn)-1))/numr-1//sn = a1*((r**n)-1)/1-r
        document.getElementById("geometic_ans").value = ans
    }
}

//เซ็ต
//union
function union(){
    var input_a, input_b, input_c, ans, set_a, set_b, set_c
    input_a = (document.forms["union_set"]["union_set1"].value).split(" ").map(Number)
    input_b = (document.forms["union_set"]["union_set2"].value).split(" ").map(Number)
    input_c = (document.forms["union_set"]["union_set3"].value).split(" ").map(Number)
    set_a = new Set([input_a])
    set_b = new Set([input_b])
    set_c = new Set([input_c])
    if(input_c != ""){
        //ถ้า C ไม่ว่าง
        union1 = ([set_a, set_b])
        ans = ([union1, input_c])
        document.getElementById("union_set").innerHTML = ans_union
    }else if(input_c == ""){
        //ถ้า C ว่าง
        ans = ([set_a, set_b])
        document.getElementById("union_set").innerHTML = ans_union
    }else if(input_a == "" || input_b == "" )
        document.write("NULL")
    return false
}

//intersec
function intersec(){
    var input_a, input_b, input_c, ans, set_a, set_b, set_c
    input_a = (document.forms["intersec_set"]["intersec_set1"].value).split(" ").map(Number)
    input_b = (document.forms["intersec_set"]["intersec_set2"].value).split(" ").map(Number)
    input_c = (document.forms["intersec_set"]["intersec_set3"].value).split(" ").map(Number)
    set_a = new Set([input_a])
    set_b = new Set([input_b])
    set_c = new Set([input_c])
    if(input_c != ""){
        //ถ้า C ไม่ว่าง
       intersec1 = (set_a.filter(x => set_b.has(x)))
    }
}
