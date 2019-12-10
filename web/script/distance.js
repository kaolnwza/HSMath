//การหาระยะห่างระหว่างจุดกับจุด
function distance2point() {
    var input_x1, input_x2, input_y1, input_y2, distance
    input_x1 = Number(document.forms["distance2point_form"]["distance2point_x1"].value)
    input_x2 = Number(document.forms["distance2point_form"]["distance2point_x2"].value)
    input_y1 = Number(document.forms["distance2point_form"]["distance2point_y1"].value)
    input_y2 = Number(document.forms["distance2point_form"]["distance2point_y2"].value)
    distance = Math.sqrt((input_x2 - input_x1) ** 2 + (input_y2 - input_y1) ** 2)
    //root((x2-x1)^2 + (y2-y1)^2))
    document.getElementById("distance2point_output").value = distance
}

//การหาระยะห่างระหว่างจุดกับเส้นตรง
function distance_line() {
    var input_x, input_y, input_a, input_y, input_c, distance_line
    input_x = Number(document.forms["distance_line_form"]["distance_line_x"].value)
    input_y = Number(document.forms["distance_line_form"]["distance_line_y"].value)
    input_a = Number(document.forms["distance_line_form"]["distance_line_a"].value)
    input_b = Number(document.forms["distance_line_form"]["distance_line_b"].value)
    input_c = Number(document.forms["distance_line_form"]["distance_line_c"].value)
    distance_line = Math.abs(input_a * input_x + input_b * input_y + input_c) / (input_a ** 2 + input_b ** 2) ** 0.5
    // | Ax + Bx + C | / root(A^2 + B^2)
    document.getElementById("distance_line_output").value = distance_line
}

//การหาระยะห่างระหว่างเส้นคู่ขนาน
function distance_parallel() {
    var input_c1, input_c2, input_a, input_b, distance_parallel
    input_c1 = Number(document.forms["distance_parallel_form"]["distance_parallel_c1"].value)
    input_c1 = Number(document.forms["distance_parallel_form"]["distance_parallel_c1"].value)
    input_c1 = Number(document.forms["distance_parallel_form"]["distance_parallel_c1"].value)
    input_c1 = Number(document.forms["distance_parallel_form"]["distance_parallel_c1"].value)
    distance_parallel = abs(input_c1 - input_c2) / (input_a ** 2 + input_b ** 2) ** 0.5
    //| C2 - C1 | / root(A^2 + B^2)
    document.getElementById("distance_parallel_output").value = distance_parallel
}

//หาความชัน
function slope2point() {
    var input_x1, input_x2, input_y1, input_y2, slope2point_value
    input_x1 = Number(document.forms["slope2point_form"]["slope2point_x1"].value)
    input_x2 = Number(document.forms["slope2point_form"]["slope2point_x2"].value)
    input_y1 = Number(document.forms["slope2point_form"]["slope2point_y1"].value)
    input_y2 = Number(document.forms["slope2point_form"]["slope2point_y2"].value)
    slope2point_value.map(Number) = (input_y1 - input_y2) / (input_x1 - input_x2)
    //d(X) / d(Y), d = delta
    document.getElementById("slope2point_output") = slope2point_value.map(Number)
}

//หาจุดแบ่งงภายในส่วนของเส้นตรง (หาจุดกึ่งกลางระหว่างจุด)
function point_center() {
    var input_x1, input_x2, input_y1, input_y2, point_center_x, point_center_y
    input_x1 = Number(document.forms["point_center_form"]["point_center_x1"].value)
    input_x2 = Number(document.forms["point_center_form"]["point_center_x2"].value)
    input_y1 = Number(document.forms["point_center_form"]["point_center_y1"].value)
    input_y2 = Number(document.forms["point_center_form"]["point_center_y2"].value)
    point_center_x = (input_x1 + input_x2) / 2
    point_center_y = (input_y1 + input_y2) / 2
    //((x1 + x2) / 2, (y1, y2) / 2)
    document.getElementById("point_center_x_output").value = point_center_x
    document.getElementById("point_center_y_output").value = point_center_y
    //answer is (point_center_x, point_center_y) like (0, 0) or (3, 2)
}

//หาจุดตัดของงเส้นมัธยฐาน (จุด 3 จุด)
function point_center_3() {
    var input_x1, input_x2, input_x3, input_y1, input_y2, input_y3, point_center_x, point_center_y
    input_x1 = Number(document.forms["point_center_form"]["point_center_x1"].value)
    input_x2 = Number(document.forms["point_center_form"]["point_center_x2"].value)
    input_x3 = Number(document.forms["point_center_form"]["point_center_x3"].value)
    input_y1 = Number(document.forms["point_center_form"]["point_center_y1"].value)
    input_y2 = Number(document.forms["point_center_form"]["point_center_y2"].value)
    input_y3 = Number(document.forms["point_center_form"]["point_center_y3"].value)
    point_center_x = (input_x1 + input_x2) / 3
    point_center_y = (input_y1 + input_y2) / 3
    //((x1 + x2 + x3) / 3, (y1 + y2 + y3) / 3)
    document.getElementById("point_center_x_output").value = point_center_x
    document.getElementById("point_center_y_output").value = point_center_y
    //answer is (point_center_x, point_center_y) like (0, 0) or (3, 2)
}

//หาจุดศูนย์กลางและรัศมี (h,k) and r^2 ***dont forget to sign below
function circle_position() {
    input_h = Number(document.forms["circle_position_form"]["circle_position_h"].value)
    input_k = Number(document.forms["circle_position_form"]["circle_position_k"].value)
    input_r = Number(document.forms["circle_position_form"]["circle_position_r"].value)
    position_h = swap_plus_minus(input_h)
    position_k = swap_plus_minus(input_k)
    r_value = input_r ** 2
    //(x - h)^2 + (y - k)^2 = ^2 <== locked equaltion DON'T change + or - ***(sign this word on html)***
    document.getElementById("position_h_output").value = position_h
    document.getElementById("position_k_output").value = position_k
    document.getElementById("r_value_output").value = r_value
    //answer is (h, k) and r
}
