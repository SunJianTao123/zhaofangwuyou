$(function() {
    $(" #cell").click(function() {
        // alert(1);
        var a = 60;
        var i = 1;
        var timer = setInterval(function() {
            cell.innerHTML = "(" + (a - i) + ")重发";
            i++;
            if (a - i == 0) {
                clearInterval(timer);
                cell.innerHTML = "重新发送";
            }
        }, 1000)

    })
})