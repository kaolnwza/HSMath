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

//ลําดับอนุกรม(อนุกรมเรขาคณิต)(DEV by Ping) ไม่รู้ค่า an
function arithmetic_geometic() {
    var a1, n, r, ans //หาลําดับเรขาคณิต
    a1 = Number(document.forms["geometicForms"]["num_geometicna1"].value)//numn = n(เลขชี้กําลัง)
    n = Number(document.forms["geometicForms"]["num_geometicnn"].value)
    r = Number(document.forms["geometicForms"]["num_geometicnr"].value)
    ans = (a1 * (1 - (r ** n))) / (1 - r)//sn = a1*(1-(r**n))/1-r
    document.getElementById("geometic_ans").value = ans
}
//ลําดับอนุกรม(อนุกรมเรขาคณิต)(DEV by Ping) รู้ค่า an
function arithmetic_geometic_an() {
    var ans, a1, an, r //หาลําดับเรขาคณิต
    a1 = Number(document.forms["geometicAnForms"]["num_geometicna1"].value)//numn = n(เลขชี้กําลัง)
    an = Number(document.forms["geometicAnForms"]["num_geometicnan"].value)
    r = Number(document.forms["geometicAnForms"]["num_geometicnr"].value)
    ans = (a1 - an * r) / (1 - r)//(a-an*r)/(1-r)
    document.getElementById("geometicAn_ans").value = ans
}

