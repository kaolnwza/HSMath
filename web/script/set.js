function filter_input(val) {
    var val
    var input_com = []
    val = val.split(" ")
        .filter(x => x != "")
        .map(Number);

    for (i = 0; i < val.length; i++) {
        if (!isNaN(val[i])) {
            input_com.push(val[i]);
        }
    }
    return input_com
}
function set_all_in_one() {
    var input_set_a, input_set_b, input_set_c, set_a, set_b, set_c
    var union, intersection, different
    input_set_a = document.forms["set_all_in_one_form"]["input_set_a"].value
    input_set_b = document.forms["set_all_in_one_form"]["input_set_b"].value
    input_set_c = document.forms["set_all_in_one_form"]["input_set_c"].value
    set_a = new Set(filter_input(input_set_a))
    set_b = new Set(filter_input(input_set_b))
    set_c = new Set(filter_input(input_set_c))
    //Union
    union = Array.from(new Set([...set_a, ...set_b, ...set_c]))
    //Intersection 
    if (input_set_c == "") {
        intersection = Array.from([...set_a].filter(x => set_b.has(x)))
    }
    else {
        intersection = Array.from([...set_a].filter(x => set_b.has(x)).filter(x => set_c.has(x)))

    }
    //Different
    different = Array.from([...set_a].filter(x => !set_b.has(x)))




    document.getElementById("union_output").value = union
    document.getElementById("intersection_output").value = intersection
    document.getElementById("different_output").value = different


}