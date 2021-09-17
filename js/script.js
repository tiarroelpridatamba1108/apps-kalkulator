function result() {

    var operators_If = document.getElementsByName("math_Operators");
    var first_TextBox_Value = document.getElementById("number1_TextBox").value;
    var no_two = document.getElementById("number2_TextBox").value;
    var no_third = document.getElementById("number3_TextBox").value;

    if (first_TextBox_Value == "") {
        var math_Results = "<span class='warning'>masukkan nilai pertama</span>";
        document.getElementById('math_Results').innerHTML = math_Results;
        return false;
    } else if (no_two == "") {
        var math_Results = "<span class='warning'>masukkan nilai kedua</span>";
        document.getElementById('math_Results').innerHTML = math_Results;
        return false;
    } else if (no_third == "") {
        var math_Results = "<span class='warning'>masukkan nilai ketiga</span>";
        document.getElementById('math_Results').innerHTML = math_Results;
        return false;
    }

    if (operators_If[0].checked == true) {
        sum = parseInt(first_TextBox_Value) + parseInt(no_two) + parseInt(no_third);
        results = "<b style='color:black;'> <span class='pesan'> Hasil " + first_TextBox_Value + " + " + no_two +
            " + " + no_third + " : " + sum + "</p></span>";
        document.getElementById('math_Results').innerHTML = results;
        return false;
    } else if (operators_If[1].checked == true) {
        diff = parseInt(first_TextBox_Value) - parseInt(no_two) - parseInt(no_third);
        results = "<span class='pesan'> Hasil " +
            first_TextBox_Value + " - " + no_two + " - " + no_third + " : " + diff + "</b></span>";
        document.getElementById('math_Results').innerHTML = results;
        return false;
    } else if (operators_If[2].checked == true) {
        product = parseInt(first_TextBox_Value) * parseInt(no_two) * parseInt(no_third);
        results = "<span class='pesan'> Hasil " +
            first_TextBox_Value + " * " + no_two + " * " + no_third + " : " + product + "</b></span>";
        document.getElementById('math_Results').innerHTML = results;
        return false;
    } else if (operators_If[3].checked == true) {
        quotient = parseInt(first_TextBox_Value) / parseInt(no_two) / parseInt(no_third);
        results = "<span class='pesan'> Hasil " +
            first_TextBox_Value + " / " + no_two + " / " + no_third + " : " + quotient + "</b></span>";
        document.getElementById('math_Results').innerHTML = results;
        return false;
    } else {
        var math_Results = "<span class='warning'>Pilih Operator Matematika</span>";
        document.getElementById('math_Results').innerHTML = math_Results;
        return false;
    }
    return true;
}

function reset_Operators() {
    document.getElementById('math_Results').innerHTML = '';
}

function clear() {
    document.getElementById('math_Results').innerHTML = "";
    first_TextBox_Value = "";
    no_two = "";
    no_third = "";
    first_TextBox_Value.focus();
}