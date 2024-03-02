function solve(val)
{
    var v = document.getElementById('res');
    v.value += val;
}
function result()
{
    var num1 = document.getElementById('res').value;
    var num2 = eval(num1);
    document.getElementById('res').value = num2;
}


function Clear()
{
    var u = document.getElementById('res');
    u.value = '';
}
function back()
{
    var e = document.getElementById('res');
    e.value = e.value.slice(0,-1);
}