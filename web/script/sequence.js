//equation by **kao** what wrong tell me fast
//ลําดับอนุกรม(ลําดับจํากัด(ลําดับเลขคณิต))(DEV by Ping)
function sequence() {
    var ans, a1, n, d, eqa //หาพจน์ที่ N แบบธรรมดา an = a1+(n-1)d
    a1 = Number(document.forms["sequenceForms"]["num_sequencea1"].value)
    d = Number(document.forms["sequenceForms"]["num_sequenced"].value)
    n = Number(document.forms["sequenceForms"]["num_sequencenn"].value)
    an = Number(document.forms["sequenceForms"]["num_sequencean"].value)
    //a1 ว่าง ANS = an - (n-1)*d
    if (a1 == "" && d != "" && n != "" && an != "") { ans = an - (n - 1) * d; eqa = "an - (n - 1) * d" }
    //d ว่าง ANS = (an - a1)/(n-1)
    else if (a1 != "" && d == "" && n != "" && an != "") { ans = (an - a1) / (n - 1); eqa = "(an - a1) / (n - 1)" }
    //n ว่าง ANS = (an+d-a1)/d
    else if (a1 != "" && d != "" && n == "" && an != "") { ans = (an + d - a1) / d; eqa = "(an + d - a1) / d" }
    //an ว่าง ANS = a1 + (n-1)*d
    else if (a1 != "" && d != "" && n != "" && an == "") { ans = a1 + (n - 1) * d; eqa = "a1 + (n - 1) * d" }
    else { alert("ใส่ข้อมูลไม่ถูกต้อง") }

    //an = a1+(n-1)d
    document.getElementById("sequence_ans").value = ans
    document.getElementById("sequence_equa").value = eqa

}
// find log
function findlog(x, y) {
    return Math.log(y) / Math.log(x);
}

//ลําดับเรขาคณิต(DEV by Ping)
function sequence2() {
    var ans, a1, r, n, eqa //หาลําดับเรขาคณิต
    a1 = Number(document.forms["sequenceForms2"]["num_sequence2a1"].value) //numa1 = a1
    r = Number(document.forms["sequenceForms2"]["num_sequence2nr"].value) //numr = r
    n = Number(document.forms["sequenceForms2"]["num_sequence2nn"].value) //numn = n
    an = Number(document.forms["sequenceForms2"]["num_sequence2nan"].value) //numn = n
    //a1 ว่าง ans = an / (r ** (n - 1))
    if (a1 == "" && r != "" && n != "" && an != "") { ans = an / (r ** (n - 1)); eqa = "an / (r ** (n - 1))" }
    //r ว่าง ans = (a1/an)**(1/(n-1))
    else if (a1 != "" && r == "" && n != "" && an != "") { ans = (an / a1) ** (1 / (n - 1)); eqa = "(a1 / an) ** (1 / (n - 1))" }
    //n ว่าง ans = log(an/a1, base=r) + 1
    else if (a1 != "" && r != "" && n == "" && an != "") { ans = findlog(r, an / a1) + 1; eqa = "log(an / a1, base = r) + 1" }
    //an ว่าง ans = a1 * r ** (n-1)
    else if (a1 != "" && r != "" && n != "" && an == "") { ans = a1 * (r ** (n - 1)); eqa = "a1 * r ** (n-1)" }
    else { alert("ใส่ข้อมูลไม่ถูกต้อง") }
    //rn = a1*(r**(n-1))

    document.getElementById("sequence2_ans").value = ans
    document.getElementById("sequence2_equa").value = eqa
}

//ลําดับอนุกรม(อนุกรมเลขคณิต)(DEV by Ping)
function arithmetic_sequence() {
    var ans, a1, an, n, eqa//หาลําดับอนุกรม
    a1 = Number(document.forms["arithmeticForms"]["num_arithmetica1"].value)
    an = Number(document.forms["arithmeticForms"]["num_arithmetican"].value)
    n = Number(document.forms["arithmeticForms"]["num_arithmeticnn"].value)
    sn = Number(document.forms["arithmeticForms"]["num_arithmeticnsn"].value)
    //a1 ว่าง ans = sn / (n / 2) - an
    if (a1 == "" && an != "" && n != "" && sn != "") { ans = sn / (n / 2) - an; eqa = "sn / (n / 2) - an" }
    //an ว่าง ans = sn / (n / 2) - a1
    else if (a1 != "" && an == "" && n != "" && sn != "") { ans = sn / (n / 2) - a1; eqa = "sn / (n / 2) - a1" }
    //n ว่าง ans = sn / (a1 + an) * 2
    else if (a1 != "" && an != "" && n == "" && sn != "") { ans = sn / (a1 + an) * 2; eqa = "sn / (a1 + an) * 2" }
    //sn ว่าง
    else if (a1 != "" && an != "" && n != "" && sn == "") { ans = (n / 2) * (a1 + an); eqa = " (n / 2) * (a1 + an)" }
    else { alert("ใส่ข้อมูลไม่ถูกต้อง") }
    //สูตร sn = (n / 2) * (a1 + an)
    document.getElementById("arithmetic_ans").value = ans
    document.getElementById("arithmetic_equa").value = eqa
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
