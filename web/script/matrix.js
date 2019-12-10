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
