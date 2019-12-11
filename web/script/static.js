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
    
    // sorting input_donne
        input_done.sort(function(a, b){return a-b});
    
    // xbar
    sam = 0;
    xbar = 0;
    for (i = 0; i < input_done.length; i++) {
        sam = sam + input_done[i];
    }
    xbar = sam / input_done.length;

    // median
    if (input_done.length % 2 !== 0) {
        med = input_done[Math.floor(input_done.length / 2)];
    } else if (input_done.length % 2 === 0) {
        med =
            (input_done[Math.floor(input_done.length / 2) - 1] +
                input_done[Math.floor(input_done.length / 2)]) /
            2;
    }

    // S.D.(sigma)
    for (i = 0; i < input_done.length; i++) {
        sd_saved = sd_saved + (input_done[i] - xbar) ** 2;
    }
    sd_sigma = (sd_saved / input_done.length) ** 0.5;

    // S.D.(s)
    sd_s = (sd_saved / (input_done.length - 1)) ** 0.5;

    // S.D. up 2
    sd_up2 = sd_saved / input_done.length;

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
    document.getElementById("sorted_id").value = String(input_done).split(",");
    document.getElementById("count_id").value = input_done.length;
    document.getElementById("sum_id").value = input_done.reduce(
        (x1, x2) => x1 + x2
    );
    document.getElementById("max_val_id").value =
        input_done[input_done.length - 1];
    document.getElementById("min_val_id").value = input_done[0];
}
