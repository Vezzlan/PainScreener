var numQues = 9, numChoi = 2, numChoi1 = 5, answers = Array(9);
function getScore (a, id) {
    var c = 0, 
    d = 0, e, b; 
    for (i = 0; i < numQues; i++) {
    if (8 > i) {
        e = i * numChoi;
        for (j = 0; j < numChoi; j++)
            if (b = a.elements[e + j],b.checked && 1 == b.value){
            c++;
            3 < i && d++;
            break;
        }
    }
    if (7 < i) {
        e = i * numChoi;
        for (j = 0; j < numChoi1; j++) 
        if (b = a.elements[e + j],b.checked){
            if (3 == b.value) {
                c++;
                d++;
                break;
            } if (4 == b.value) {
                c++;
                d++;
                break;
            }
        }
    }
} 

a.percentage = c;
a.percentage1 = d;
if ("3" < d)
    a.solutions = "Hög risk. Du bör ta kontakt med en fysioterapeut.";
else if ("3" < c && (a.solutions = "Medium risk. Det finns risk för att smärtan blir långvarig. Du bör överväga att uppsöka en fysioterapeut."),
"4" > c)a.solutions = "Låg risk. Du bör fortsätta som du gör. Fortsätt att vara aktiv och avvakta med att träffa en fysioterapeut.";

var div = document.getElementById(id);
    div.style.display = div.style.display == "none" ? "block" : "block";

document.getElementById("answer").innerHTML = a.solutions};