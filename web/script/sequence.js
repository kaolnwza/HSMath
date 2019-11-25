//ลําดับอนุกรม(ลําดับจํากัด(ลําดับเลขคณิต))(DEV by Ping)
function sequence() {
    var ans, a1, n, d //หาพจน์ที่ N แบบธรรมดา an = a1+(n-1)d
    a1 = Number(document.forms["sequenceForms"]["num_sequencea1"].value)
    d = Number(document.forms["sequenceForms"]["num_sequenced"].value)
    n = Number(document.forms["sequenceForms"]["num_sequencenn"].value)
    ans = a1 + (n - 1) * d // an = a1+(n-1)d
    document.getElementById("sequence_ans").value = ans

}

//ลําดับเรขาคณิต(DEV by Ping)
function sequence2() {
    var ans, a1, r, n //หาลําดับเรขาคณิต
    a1 = Number(document.forms["sequenceForms2"]["num_sequence2a1"].value) //numa1 = a1
    r = Number(document.forms["sequenceForms2"]["num_sequence2nr"].value) //numr = r
    n = Number(document.forms["sequenceForms2"]["num_sequence2nn"].value) //numn = n
    ans = a1 * (r ** (n - 1)) //a1*(r**(n-1))
    document.getElementById("sequence2_ans").value = ans
}

//ลําดับอนุกรม(อนุกรมเลขคณิต)(DEV by Ping)
function arithmetic_sequence() {
    var ans, a1, an, n//หาลําดับอนุกรม
    a1 = Number(document.forms["arithmeticForms"]["num_arithmetica1"].value) //numa1 = a1
    an = Number(document.forms["arithmeticForms"]["num_arithmetican"].value) //numa3 = a3
    n = Number(document.forms["arithmeticForms"]["num_arithmeticnn"].value) //numn = an
    ans = (n / 2) * (a1 + an) //สูตร sn = n/2(a1+an)
    document.getElementById("arithmetic_ans").value = ans
}

//ลําดับอนุกรม(อนุกรมเรขาคณิต)(DEV by Ping)
function arithmetic_geometic() {
    var input_done, numn, numr //หาลําดับเรขาคณิต
    input_done //รอการแก้บัคโดยเก้าเดาว่าเป็น an
    numn = Number(document.forms["geometicForms"]["num_geometicnn"].value)//numn = n(เลขชี้กําลัง)
    numr = input_done[input_done.length - 1] / input_done[input_done.length - 2]//numr = r
    if (numr < 1) {
        ans = (input_done[0] * (1 - (numr ** numn))) / 1 - numr//sn = a1*(1-(r**n))/1-r
        document.getElementById("geometic_ans").value = ans
    } else if (numr > 1) {
        ans = (input_done[0] * ((numr ** numn) - 1)) / numr - 1//sn = a1*((r**n)-1)/1-r
        document.getElementById("geometic_ans").value = ans
    }
}

