function convfhar()
{
    var a = document.getElementById('fhar').value;
    var f = (9/5)*(parseInt(a))+32;
    document.getElementById('show').value = f.toFixed(2);
}

function covdeg()
{
    var b = document.getElementById('cels').value;
    var c = (parseInt(b)-32 )* (5/9);
    document.getElementById('show2').value = c.toFixed(2);
}