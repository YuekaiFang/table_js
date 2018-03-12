/* =========================================================
Documented by Yuekai Fang
Design for massive table.
if have any question, please email edwardfang110@163.com
@Copyright Yuekai Fang
 */

(function () {

    window.ini = magictable = function (tableid,diver) {
        var table = document.getElementById(tableid);
        var divin = document.getElementById(diver);
        divin.innerHTML = divin.innerHTML + "<div class=\"btn-group\">\n" +
            "<button class=\"btn btn-info btn-sm\" type=\"button\" onclick=\"selectAllTable(\'"+ tableid + "\')\" id=\"selectxd\">全选</button>\n" +
            "<button class=\"btn btn-info btn-sm dropdown-toggle\" type=\"button\" id=\""+ diver +"\" data-toggle=\"dropdown\"\n" +
            "aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
            "详情\n" +
            "<span class=\"caret\"></span>\n" +
            " </button>\n" +
            "<ul class=\"dropdown-menu\" aria-labelledby=\""+ diver +"\" id = \"" + diver + "area\">";
        var j;
        for (j= 0;j <= table.rows[0].cells.length;j++){
            var title = table.rows[0].cells[j].innerText;
            if (table.rows[0].cells[j].classList.contains("col-show")){
                document.getElementById(diver + "area").innerHTML = document.getElementById(diver + "area").innerHTML + "<li><label><input type=\"checkbox\" class=\"checkboxes tablechecks\" checked = \"checked\" onclick=\"hidecolumn("+ j +",\'"+ tableid +"\')\">" + title + "</label></li>";
            } else if (table.rows[0].cells[j].classList.contains("col-hide")){
                var i;
                for (i = 0; i < table.rows.length; i++) {
                    table.rows[i].cells[j].style.display = "none";
                }
                document.getElementById(diver + "area").innerHTML = document.getElementById(diver + "area").innerHTML + "<li><label><input type=\"checkbox\" class=\"checkboxes tablechecks\" onclick=\"hidecolumn("+ j +",\'"+ tableid +"\')\">" + title + "</label></li>";
            }
        }
    };

})();

function hidecolumn(column, tableid) {
    var table = document.getElementById(tableid);
    var i;
    for (i = 0; i < table.rows.length; i++) {
        if (table.rows[i].cells[column].style.display == "none") {
            table.rows[i].cells[column].style.display = "table-cell";
        } else {
            table.rows[i].cells[column].style.display = "none";
        }
    }
}

var display = 0;

function selectAllTable(tableid) {
    var table = document.getElementById(tableid);
    var i;
    var j;
    for (j = 0; j < table.rows[0].cells.length; j++) {
        for (i = 0; i < table.rows.length; i++) {
            if (display == 1 && (table.rows[0].cells[j].classList.contains("col-show") || table.rows[0].cells[j].classList.contains("col-hide"))) {
                table.rows[i].cells[j].style.display = "none";
            } else if (display == 0 && (table.rows[0].cells[j].classList.contains("col-show") || table.rows[0].cells[j].classList.contains("col-hide"))){
                table.rows[i].cells[j].style.display = "table-cell";
            }
        }
    }
    if (display == 1) {
        display = 0;
        document.getElementById("selectxd").innerHTML = "全选";
        $('.checkboxes').each(function () {
            this.checked = false;
        })
    } else if (display == 0) {
        display = 1;
        document.getElementById("selectxd").innerHTML = "隐藏";
        $('.checkboxes').each(function () {
            this.checked = true;
        })
    }
};




