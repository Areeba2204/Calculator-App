function getNumber(num)
{
    var results = document.getElementById("result");
    results.value += num;
}

function ClearResult()
{
    var getResult = document.getElementById("result");
    getResult.value = "";
}

function getResult()
{
    var results = document.getElementById("result");
    results.value= eval(results.value);
}