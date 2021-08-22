var count_num = 0;


function increase() {
    count_num++;
document.getElementById("count_show").innerHTML = count_num;
}

function decrease() {
    if (count_num >0 ) {
        
    count_num--;
    document.getElementById("count_show").innerHTML = count_num;
    }

}

function reset() {
    count_num = 0;
    document.getElementById("count_show").innerHTML = count_num;
}
