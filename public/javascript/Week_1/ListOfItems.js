var strDef = "";
function addString(str)
{
    strDef = strDef.concat(" ", str);
    document.getElementById("list").innerHTML = strDef;
}