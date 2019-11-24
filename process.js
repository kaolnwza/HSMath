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


//5.เมทริกซ์(Matrix)
//plus and minus matrix(2*2) & matrix(3*3)
function plus_minusMatrix(){
    var matA_11, matA_12, matA_13, matA_21, matA_22, matA_23, matA_31, matA_32, matA_33
    var matB_11, matB_12, matB_13, matB_21, matB_22, matB_23, matB_31, matB_32, matB_33
    var plus_minus = document.forms["plus_minus_matrix22_form"]["plus_minus"].value
    var member = Number(document.forms["plus_minus_matrix22_form"]["member_matrix"].value)

    //input matrix A 
    matA_11 = eval(document.forms["plus_minus_matrix22_form"]["matA_11"].value)
    matA_12 = eval(document.forms["plus_minus_matrix22_form"]["matA_12"].value)
    matA_21 = eval(document.forms["plus_minus_matrix22_form"]["matA_21"].value)
    matA_22 = eval(document.forms["plus_minus_matrix22_form"]["matA_22"].value)

    //input matrix B
    matB_11 = eval(document.forms["plus_minus_matrix22_form"]["matB_11"].value)
    matB_12 = eval(document.forms["plus_minus_matrix22_form"]["matB_12"].value)
    matB_21 = eval(document.forms["plus_minus_matrix22_form"]["matB_21"].value)
    matB_22 = eval(document.forms["plus_minus_matrix22_form"]["matB_22"].value)

    if(member == 3){
        matA_13 = eval(document.forms["plus_minus_matrix22_form"]["matA_13"].value)
        matA_23 = eval(document.forms["plus_minus_matrix22_form"]["matA_23"].value)
        matA_31 = eval(document.forms["plus_minus_matrix22_form"]["matA_31"].value)
        matA_32 = eval(document.forms["plus_minus_matrix22_form"]["matA_32"].value)
        matA_33 = eval(document.forms["plus_minus_matrix22_form"]["matA_33"].value)

        matB_13 = eval(document.forms["plus_minus_matrix22_form"]["matB_13"].value)
        matB_23 = eval(document.forms["plus_minus_matrix22_form"]["matB_23"].value)
        matB_31 = eval(document.forms["plus_minus_matrix22_form"]["matB_31"].value)
        matB_32 = eval(document.forms["plus_minus_matrix22_form"]["matB_32"].value)
        matB_33 = eval(document.forms["plus_minus_matrix22_form"]["matB_33"].value)
    }

    if(plus_minus == "-"){
        if(member == 3){
            matB_11 = 0-matB_11
            matB_12 = 0-matB_12
            matB_13 = 0-matB_13
            matB_21 = 0-matB_21
            matB_22 = 0-matB_22
            matB_23 = 0-matB_23
            matB_31 = 0-matB_31
            matB_32 = 0-matB_32
            matB_33 = 0-matB_33
        }else{
            matB_11 = 0-matB_11
            matB_12 = 0-matB_12
            matB_21 = 0-matB_21
            matB_22 = 0-matB_22
        }
    }
    if(member == 3){
        document.getElementById("matAB_11").value = matA_11 + matB_11
        document.getElementById("matAB_12").value = matA_12 + matB_12
        document.getElementById("matAB_13").value = matA_13 + matB_13

        document.getElementById("matAB_21").value = matA_21 + matB_21
        document.getElementById("matAB_22").value = matA_22 + matB_22
        document.getElementById("matAB_23").value = matA_23 + matB_23

        document.getElementById("matAB_31").value = matA_31 + matB_31
        document.getElementById("matAB_32").value = matA_32 + matB_32
        document.getElementById("matAB_33").value = matA_33 + matB_33
    }else{
        document.getElementById("matAB_11").value = matA_11 + matB_11
        document.getElementById("matAB_12").value = matA_12 + matB_12
        document.getElementById("matAB_21").value = matA_21 + matB_21
        document.getElementById("matAB_22").value = matA_22 + matB_22
    }
    return false
}
//ใช้เพื่อเปลี่ยน form ของ matrix จาก 2x2 เป็น 3x3
function form_Plus_minusMatrix(){
    size = Number(document.forms["plus_minus_matrix22_form"]["member_matrix"].value)
    if(size == 2){
        document.getElementById("plus_minus_matrix").innerHTML = "<div style='width: 100%;'><div style='width: 50%; float: left;'>matrix A (2x2)<div><input type='text' name='matA_11'> <input type='text' name='matA_12'><br><input type='text' name='matA_21'> <input type='text' name='matA_22'></div></div><div style='display: inline;'>matrix B (2x2)<div><input type='text' name='matB_11'> <input type='text' name='matB_12'><br><input type='text' name='matB_21'> <input type='text' name='matB_22'></div></div></div><div style='display: inline;'><strong>Answer</strong> matrix (2x2)<div><input id='matAB_11' placeholder='ans' readonly style='text-align: center;'><input id='matAB_12' placeholder='ans' readonly style='text-align: center;'><br><input id='matAB_21' placeholder='ans' readonly style='text-align: center;'> <input id='matAB_22' placeholder='ans' readonly style='text-align: center;'></div></div>"
    }else{
        document.getElementById("plus_minus_matrix").innerHTML = "<div style='width: 100%;'><div style='width: 50%; float: left;'>matrix A (3x3)<div><input type='text' name='matA_11'> <input type='text' name='matA_12'> <input type='text' name='matA_13'><br><input type='text' name='matA_21'> <input type='text' name='matA_22'> <input type='text' name='matA_23'><br><input type='text' name='matA_31'> <input type='text' name='matA_32'> <input type='text' name='matA_33'><br></div></div><div></div><div style='display: inline;'>matrix B (3x3)<div><input type='text' name='matB_11'> <input type='text' name='matB_12'> <input type='text' name='matB_13'><br><input type='text' name='matB_21'> <input type='text' name='matB_22'> <input type='text' name='matB_23'><br><input type='text' name='matB_31'> <input type='text' name='matB_32'> <input type='text' name='matB_33'><br></div></div></div><hr><div style='display: inline;'><strong>Answer</strong> matrix (3x3)<div><input id='matAB_11' placeholder='ans' readonly style='text-align: center;'> <input id='matAB_12' placeholder='ans' readonly style='text-align: center;'> <input id='matAB_13' placeholder='ans' readonly style='text-align: center;'><br><input id='matAB_21' placeholder='ans' readonly style='text-align: center;'> <input id='matAB_22' placeholder='ans' readonly style='text-align: center;'> <input id='matAB_23' placeholder='ans' readonly style='text-align: center;'><br><input id='matAB_31' placeholder='ans' readonly style='text-align: center;'> <input id='matAB_32' placeholder='ans' readonly style='text-align: center;'> <input id='matAB_33' placeholder='ans' readonly style='text-align: center;'><br></div></div>"
        }
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
    set_a = set(input_a)
    set_b = set(input_b)
    set_c = set(input_c)
    if(input_c != ""){
        //ถ้า C ไม่ว่าง
        union1 = ([set_a, set_b])
        ans = ([union1, input_c])
        document.getElementById("union_set").innerHTML = ans
    }else if(input_c == ""){
        //ถ้า C ว่าง
        ans = ([set_a, set_b])
        document.getElementById("union_set").innerHTML = ans
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
    set_a = set(input_a)
    set_b = set(input_b)
    set_c = set(input_c)
    if(input_c != ""){
        //ถ้า C ไม่ว่าง
       let intersection = set_a.filter(x => set_b.includes(x))
       let ans = intersection.filter(x => set_c.includes(x))
       document.getElementById("intersec_set").innerHTML = ans
    }else if(input_c == ""){
        //ถ้า C ว่าง
        let ans = set_a.filter(x => set_b.includes(x))
        document.getElementById("intersec_set").innerHTML = ans
    }else if(input_a == "" || input_b == "" )
        document.write("NULL")
    return false
}

//difference
function difference(){
    var input_a, input_b, input_c, ans, set_a, set_b, set_c
    input_a = (document.forms["difference_set"]["difference_set1"].value).split(" ").map(Number)
    input_b = (document.forms["difference_set"]["difference_set2"].value).split(" ").map(Number)
    input_c = (document.forms["difference_set"]["difference_set3"].value).split(" ").map(Number)
    set_a = set(input_a)
    set_b = set(input_b)
    set_c = set(input_c)
    if(input_c != ""){
        //ถ้า C ไม่ว่าง
        let differnt = set_a.filter(x => !set_b.includes(x))
        let ans = differnt.filter(x => !set_c.includes(x))
        document.getElementById("difference_set").innerHTML = ans
    }else if(input_c == ""){
        //ถ้า C ว่าง
        let ans = set_a.filter(x => !set_b.includes(x))
        document.getElementById("difference_set").innerHTML = ans
    }else if(input_a == "" || input_b == "" )
        document.write("NULL")
    return false
}

//การหาระยะห่างระหว่างจุดกับจุด
function distance2point() {
    var input_x1, input_x2, input_y1, input_y2, distance
    input_x1 = document.forms["distance2point"]["distance2point_x1"].value
    input_x2 = document.forms["distance2point"]["distance2point_x2"].value
    input_y1 = document.forms["distance2point"]["distance2point_y1"].value
    input_y2 = document.forms["distance2point"]["distance2point_y2"].value
    distance = ((inputx2 - inputx1) ** 2 + (inputy2 - inputy1) ** 2) ** 0.5
    //root((x2-x1)^2 + (y2-y1)^2))
    document.getElementById("distance2point_output").innerHTML = distance
}

//การหาระยะห่างระหว่างจุดกับเส้นตรง
function distance_line() {
    var input_x, input_y, input_a, input_y, input_c, distance_line
    input_x = document.forms["distance_line"]["distance_line_x"].value
    input_y = document.forms["distance_line"]["distance_line_y"].value
    input_a = document.forms["distance_line"]["distance_line_a"].value
    input_b = document.forms["distance_line"]["distance_line_b"].value
    input_c = document.forms["distance_line"]["distance_line_c"].value
    distance_line = abs(input_a * input_x + input_b * input_y + input_c) / (input_a ** 2 + input_b ** 2) ** 0.5
    // | Ax + Bx + C | / root(A^2 + B^2)
    document.getElementById("distance_line_output").innerHTML = distance_line
}

//การหาระยะห่างระหว่างเส้นคู่ขนาน
function distance_parallel() {
    var input_c1, input_c2, input_a, input_b, distance_parallel
    input_c1 = document.forms["distance_parallel"]["distance_parallel_c1"].value
    input_c1 = document.forms["distance_parallel"]["distance_parallel_c1"].value
    input_c1 = document.forms["distance_parallel"]["distance_parallel_c1"].value
    input_c1 = document.forms["distance_parallel"]["distance_parallel_c1"].valueฃ
    distance_parallel = abs(input_c1 - input_c2) / (input_a ** 2 + input_b ** 2) ** 0.5
    //| C2 - C1 | / root(A^2 + B^2)
    document.getElementById("distance_parallel_output").innerHTML = distance_parallel
}

//หาความชัน
function slope2point() {
    var input_x1, input_x2, input_y1, input_y2, slope2point_value
    input_x1 = document.forms["slope2point"]["slope2point_x1"].value
    input_x2 = document.forms["slope2point"]["slope2point_x2"].value
    input_y1 = document.forms["slope2point"]["slope2point_y1"].value
    input_y2 = document.forms["slope2point"]["slope2point_y2"].value
    slope2point_value = (input_y1 - input_y2) / (input_x1 - input_x2)
    //d(X) / d(Y), d = delta
    document.getElementById("slope2point_output") = slope2point_value
}

//หาจุดแบ่งงภายในส่วนของเส้นตรง (หาจุดกึ่งกลางระหว่างจุด)
function point_center() {
    var input_x1, input_x2, input_y1, input_y2, point_center_x, point_center_y
    input_x1 = document.forms["point_center"]["point_center_x1"].value
    input_x2 = document.forms["point_center"]["point_center_x2"].value
    input_y1 = document.forms["point_center"]["point_center_y1"].value
    input_y2 = document.forms["point_center"]["point_center_y2"].value
    point_center_x = (input_x1 + input_x2) / 2
    point_center_y = (input_y1 + input_y2) / 2
    //((x1 + x2) / 2, (y1, y2) / 2)
    document.getElementById("point_center_x_output").innerHTML = point_center_x
    document.getElementById("point_center_y_output").innerHTML = point_center_y
    //answer is (point_center_x, point_center_y) like (0, 0) or (3, 2)
}

//หาจุดตัดของงเส้นมัธยฐาน (จุด 3 จุด)
function point_center_3() {
    var input_x1, input_x2, input_x3, input_y1, input_y2, input_y3, point_center_x, point_center_y
    input_x1 = document.forms["point_center"]["point_center_x1"].value
    input_x2 = document.forms["point_center"]["point_center_x2"].value
    input_x3 = document.forms["point_center"]["point_center_x3"].value
    input_y1 = document.forms["point_center"]["point_center_y1"].value
    input_y2 = document.forms["point_center"]["point_center_y2"].value
    input_y3 = document.forms["point_center"]["point_center_y3"].value
    point_center_x = (input_x1 + input_x2) / 3
    point_center_y = (input_y1 + input_y2) / 3
    //((x1 + x2 + x3) / 3, (y1 + y2 + y3) / 3)
    document.getElementById("point_center_x_output").innerHTML = point_center_x
    document.getElementById("point_center_y_output").innerHTML = point_center_y
    //answer is (point_center_x, point_center_y) like (0, 0) or (3, 2)
}

//หาพื้นที่รูป n เหลี่ยมใดๆ
function edge_area_infinite() {

}
