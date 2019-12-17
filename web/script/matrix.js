//5.เมทริกซ์(Matrix)
//plus and minus and time matrix(2*2) & matrix(3*3)
function plus_minusMatrix(){
    var matA_11, matA_12, matA_13, matA_21, matA_22, matA_23, matA_31, matA_32, matA_33
    var matB_11, matB_12, matB_13, matB_21, matB_22, matB_23, matB_31, matB_32, matB_33
    var matAB_11, matAB_12, matAB_13, matAB_21, matAB_22, matAB_23, matAB_31, matAB_32, matAB_33
    var plus_minus = document.forms["matrix_form"]["plus_minus"].value
    var member = Number(document.forms["matrix_form"]["member_matrix"].value)

    //input matrix A 
    matA_11 = eval(document.forms["matrix_form"]["matA_11"].value)
    matA_12 = eval(document.forms["matrix_form"]["matA_12"].value)
    matA_21 = eval(document.forms["matrix_form"]["matA_21"].value)
    matA_22 = eval(document.forms["matrix_form"]["matA_22"].value)

    //input matrix B
    matB_11 = eval(document.forms["matrix_form"]["matB_11"].value)
    matB_12 = eval(document.forms["matrix_form"]["matB_12"].value)
    matB_21 = eval(document.forms["matrix_form"]["matB_21"].value)
    matB_22 = eval(document.forms["matrix_form"]["matB_22"].value)

    if(member == 3){
        matA_13 = eval(document.forms["matrix_form"]["matA_13"].value)
        matA_23 = eval(document.forms["matrix_form"]["matA_23"].value)
        matA_31 = eval(document.forms["matrix_form"]["matA_31"].value)
        matA_32 = eval(document.forms["matrix_form"]["matA_32"].value)
        matA_33 = eval(document.forms["matrix_form"]["matA_33"].value)

        matB_13 = eval(document.forms["matrix_form"]["matB_13"].value)
        matB_23 = eval(document.forms["matrix_form"]["matB_23"].value)
        matB_31 = eval(document.forms["matrix_form"]["matB_31"].value)
        matB_32 = eval(document.forms["matrix_form"]["matB_32"].value)
        matB_33 = eval(document.forms["matrix_form"]["matB_33"].value)
    }

    if(plus_minus == "-"){
        if(member == 3){
            matAB_11 = matA_11 - matB_11
            matAB_12 = matA_12 - matB_12
            matAB_13 = matA_13 - matB_13
            matAB_21 = matA_21 - matB_21
            matAB_22 = matA_22 - matB_22
            matAB_23 = matA_23 - matB_23
            matAB_31 = matA_31 - matB_31
            matAB_32 = matA_32 - matB_32
            matAB_33 = matA_33 - matB_33
        }else{
            matAB_11 = matA_11 - matB_11
            matAB_12 = matA_12 - matB_12
            matAB_21 = matA_21 - matB_21
            matAB_22 = matA_22 - matB_22
        }
    }else if(plus_minus == "+"){
        if(member == 3){
            matAB_11 = matA_11 + matB_11
            matAB_12 = matA_12 + matB_12
            matAB_13 = matA_13 + matB_13
            matAB_21 = matA_21 + matB_21
            matAB_22 = matA_22 + matB_22
            matAB_23 = matA_23 + matB_23
            matAB_31 = matA_31 + matB_31
            matAB_32 = matA_32 + matB_32
            matAB_33 = matA_33 + matB_33
        }else{
            matAB_11 = matA_11 + matB_11
            matAB_12 = matA_12 + matB_12
            matAB_21 = matA_21 + matB_21
            matAB_22 = matA_22 + matB_22
        }
    }else{
        if(member == 3){
            matAB_11 = (matA_11*matB_11) + (matA_12*matB_21) + (matA_13*matB_31)
            matAB_12 = (matA_11*matB_12) + (matA_12*matB_22) + (matA_13*matB_32)
            matAB_13 = (matA_11*matB_13) + (matA_12*matB_23) + (matA_13*matB_33)

            matAB_21 = (matA_21*matB_11) + (matA_22*matB_21) + (matA_23*matB_31)
            matAB_22 = (matA_21*matB_12) + (matA_22*matB_22) + (matA_23*matB_32)
            matAB_23 = (matA_21*matB_13) + (matA_22*matB_23) + (matA_13*matB_33)

            matAB_31 = (matA_31*matB_11) + (matA_32*matB_21) + (matA_33*matB_31)
            matAB_32 = (matA_31*matB_12) + (matA_32*matB_22) + (matA_33*matB_32)
            matAB_33 = (matA_31*matB_13) + (matA_32*matB_23) + (matA_33*matB_33)
        }else{
            matAB_11 = (matA_11*matB_11) + (matA_12*matB_21)
            matAB_12 = (matA_11*matB_12) + (matA_12*matB_22)
            matAB_21 = (matA_21*matB_11) + (matA_22*matB_21)
            matAB_22 = (matA_21*matB_12) + (matA_22*matB_22)
        }
    }
    if(member == 3){
        document.getElementById("matAB_11").value = matAB_11
        document.getElementById("matAB_12").value = matAB_12
        document.getElementById("matAB_13").value = matAB_13

        document.getElementById("matAB_21").value = matAB_21
        document.getElementById("matAB_22").value = matAB_22
        document.getElementById("matAB_23").value = matAB_23

        document.getElementById("matAB_31").value = matAB_31
        document.getElementById("matAB_32").value = matAB_32
        document.getElementById("matAB_33").value = matAB_33
    }else{
        document.getElementById("matAB_11").value = matAB_11
        document.getElementById("matAB_12").value = matAB_12
        document.getElementById("matAB_21").value = matAB_21
        document.getElementById("matAB_22").value = matAB_22
    }
    return false
}

function form_Plus_minusMatrix(){
    size = Number(document.forms["matrix_form"]["member_matrix"].value)
    if(size == 2){
        document.getElementById("plus_minus_matrix").innerHTML = "<div class='row text-center'><div class='col-lg-6'>matrix A (2x2)<div class='row m-2 d-flex justify-content-center'><input type='text' name='matA_11' class='form-control' style='width: 100px;'> <input type='text' name='matA_12' class='form-control' style='width: 100px;'></div><div class='row m-2 d-flex justify-content-center'><input type='text' name='matA_21' class='form-control' style='width: 100px;'> <input type='text' name='matA_22' class='form-control' style='width: 100px;'></div></div><div class='col-lg-5'>matrix B (2x2)<div class='row m-2 d-flex justify-content-center'><input type='text' name='matB_11' class='form-control' style='width: 100px;'> <input type='text' name='matB_12' class='form-control' style='width: 100px;'></div><div class='row m-2 d-flex justify-content-center'><input type='text' name='matB_21' class='form-control' style='width: 100px;'> <input type='text' name='matB_22' class='form-control' style='width: 100px;'></div></div></div></div><hr><div class='col-lg-12 text-center pb-5'><strong>Answer</strong> matrix (2x2)<div class='row m-2 d-flex justify-content-center'><input id='matAB_11' placeholder='ans' readonly class='form-control' style='width: 100px;'> <input id='matAB_12' placeholder='ans' readonly class='form-control' style='width: 100px;'></div><div class='row m-2 d-flex justify-content-center'><input id='matAB_21' placeholder='ans' readonly class='form-control' style='width: 100px;'> <input id='matAB_22' placeholder='ans' readonly class='form-control' style='width: 100px;'></div></div></div>"
    }else{
        document.getElementById("plus_minus_matrix").innerHTML = "<div class='row'><div class='col-lg-6 text-center'>matrix A (3x3)<div class='row d-flex justify-content-center'><input type='text' name='matA_11' class='form-control m-1' style='width:40px;'> <input type='text' name='matA_12' class='form-control m-1' style='width:40px;'> <input type='text' name='matA_13' class='form-control m-1' style='width:40px;'></div><div class='row d-flex justify-content-center'><input type='text' name='matA_21' class='form-control m-1' style='width:40px;'> <input type='text' name='matA_22' class='form-control m-1' style='width:40px;'> <input type='text' name='matA_23' class='form-control m-1' style='width:40px;'></div><div class='row d-flex justify-content-center'><input type='text' name='matA_31' class='form-control m-1' style='width:40px;'> <input type='text' name='matA_32' class='form-control m-1' style='width:40px;'> <input type='text' name='matA_33' class='form-control m-1' style='width:40px;'></div></div><div class='col-lg-6 text-center'>matrix B (3x3)<div class='row d-flex justify-content-center'><input type='text' name='matB_11' class='form-control m-1' style='width:40px;'> <input type='text' name='matB_12' class='form-control m-1' style='width:40px;'> <input type='text' name='matB_13' class='form-control m-1' style='width:40px;'></div><div class='row d-flex justify-content-center'><input type='text' name='matB_21' class='form-control m-1' style='width:40px;'> <input type='text' name='matB_22' class='form-control m-1' style='width:40px;'> <input type='text' name='matB_23' class='form-control m-1' style='width:40px;'></div><div class='row d-flex justify-content-center'><input type='text' name='matB_31' class='form-control m-1' style='width:40px;'> <input type='text' name='matB_32' class='form-control m-1' style='width:40px;'> <input type='text' name='matB_33' class='form-control m-1' style='width:40px;'></div></div></div><hr><div class='col-lg-12 text-center pb-5'><strong>Answer</strong> matrix (3x3)<div class='row d-flex justify-content-center'><input id='matAB_11' placeholder='ans' readonly class='form-control m-1' style='text-align: center; width: 40px;'> <input id='matAB_12' placeholder='ans' readonly class='form-control m-1' style='text-align: center; width: 40px;'> <input id='matAB_13' placeholder='ans' readonly class='form-control m-1' style='text-align: center; width: 40px;'></div><div class='row d-flex justify-content-center'><input id='matAB_21' placeholder='ans' readonly class='form-control m-1' style='text-align: center; width: 40px;'> <input id='matAB_22' placeholder='ans' readonly class='form-control m-1' style='text-align: center; width: 40px;'> <input id='matAB_23' placeholder='ans' readonly class='form-control m-1' style='text-align: center; width: 40px;'></div><div class='row d-flex justify-content-center'><input id='matAB_31' placeholder='ans' readonly class='form-control m-1' style='text-align: center; width: 40px;'> <input id='matAB_32' placeholder='ans' readonly class='form-control m-1' style='text-align: center; width: 40px;'> <input id='matAB_33' placeholder='ans' readonly class='form-control m-1' style='text-align: center; width: 40px;'></div></div></div>"
        }
}