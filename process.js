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

//ลําดับอนุกรม(อนุกรมเรขาคณิต)(DEV by Ping)
function arithmetic_geometic(){
    var input_done, numn, numr //หาลําดับเรขาคณิต
    input_done
    numn = Number(document.forms["geometicForms"]["num_geometicnn"].value)
    numr = input_done[input_done.length-1]/input_done[input_done.length-2]
    if (numr < 1){
        ans = (numa1*(1-(numr**numn)))/1-numr
        document.getElementById("geometic_ans").innerHTML = ans
    }else if (numr > 1){
        ans = (numa1*((numr**numn)-1))/numr-1
        document.getElementById("geometic_ans").innerHTML = ans
    }
}

//สถิติ
function static() {
    var input;
    var med = 0,
        mode,
        xbar = 0,
        sam = 0;
    var input_notdone,
        input_done = [];
    var sd_sigma,
        sd_saved = 0,
        sd_s,
        sd_up2;

    // part of input
    input = document.forms["input_form"]["inputval"].value
        .split(" ")
        .filter(val => val != "")
        .map(Number);

    for (i = 0; i < input.length; i++) {
        if (!isNaN(input[i])) {
            input_done.push(input[i]);
        }
    }
    // end of input part

    // xbar
    sam = 0;
    xbar = 0;
    for (i = 0; i < input_done.length; i++) {
        sam = sam + input_done[i];
    }
    xbar = sam / input_done.length;
    // end of xbar

    // median
    if (input_done.length % 2 !== 0) {
        med = input_done[Math.floor(input_done.length / 2)];
    } else if (input_done.length % 2 === 0) {
        med =
            (input_done[Math.floor(input_done.length / 2) - 1] +
                input_done[Math.floor(input_done.length / 2)]) /
            2;
    }
    // end of median

    // S.D.(sigma)
    for (i = 0; i < input_done.length; i++) {
        sd_saved = sd_saved + (input_done[i] - xbar) ** 2;
    }
    sd_sigma = (sd_saved / input_done.length) ** 0.5;
    // end of S.D.(sigma)

    // S.D.(s)
    sd_s = (sd_saved / (input_done.length - 1)) ** 0.5;
    // end of S.D.(s)

    // S.D. up 2
    sd_up2 = sd_saved / input_done.length;
    // end of S.D. up 2

    //Mode
    function count(want, array) {
        var i;
        var count = 0
        for (i in array) {
            if (array[i] == want) {
                count++;
            }
        }
        return count
    }

    function set(array) {
        var i, check, newArray;
        newArray = []
        for (i in array) {
            check = newArray.includes(array[i])
            if (!check) {
                newArray.push(array[i])
            }
        }
        return newArray
    }

    var values, valueSet, i_val, numSet, total;
    var mostFrequency1, mostFrequency2, mostFrequency3;
    var indexFre1, indexFre2;
    numSet = []
    values = input_done;
    valueSet = set(values)
    for (i_val in valueSet) {
        total = count(valueSet[i_val], values)
        numSet.push(total);
    }
    mostFrequency1 = Math.max(...numSet)
    indexFre1 = numSet.indexOf(mostFrequency1)
    numSet[indexFre1] = 0;
    mostFrequency2 = Math.max(...numSet)
    indexFre2 = numSet.indexOf(mostFrequency2)
    numSet[indexFre2] = 0
    if (valueSet.length == 2) {
        if (mostFrequency1 > mostFrequency2) {
            document.getElementById("mode_id").value = valueSet[indexFre1]
        } else if (mostFrequency1 == mostFrequency2) {
            document.getElementById("mode_id").value = valueSet[indexFre1].toString() + " and " + valueSet[indexFre2].toString()
        } else {
            document.getElementById("mode_id").value = "Don't have mode"
        }
    } else {
        mostFrequency3 = Math.max(...numSet)
        if (mostFrequency1 > mostFrequency2) {
            document.getElementById("mode_id").value = valueSet[indexFre1]
        } else if (mostFrequency1 == mostFrequency2 && mostFrequency1 > mostFrequency3) {
            document.getElementById("mode_id").value = valueSet[indexFre1].toString() + " and " + valueSet[indexFre2].toString()
        } else {
            document.getElementById("mode_id").value = "Don't have mode"
        }
    }

    document.getElementById("xbar_id").value = xbar;
    document.getElementById("med_id").value = med;
    document.getElementById("sd_sigma_id").value = sd_sigma;
    document.getElementById("sd_s_id").value = sd_s;
    document.getElementById("sd_up2_id").value = sd_up2;
    document.getElementById("sorted_id").value = String(
        input_done.sort()
    ).split(",");
    document.getElementById("count_id").value = input_done.length;
    document.getElementById("sum_id").value = input_done.reduce(
        (x1, x2) => x1 + x2
    );
    document.getElementById("max_val_id").value =
        input_done[input_done.length - 1];
    document.getElementById("min_val_id").value = input_done[0];
    //document.getElementById("mode_id").value = ;
    document.getElementById("tss").value = test;
}
