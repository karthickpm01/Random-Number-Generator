let generatebtn = document.getElementById("generate");

function randomNum()
{
    let min = document.getElementById("min");
    let max = document.getElementById("max");
    let minvalue =Number(min.value);
    let maxvalue =Number(max.value);
    if(minvalue>maxvalue)
    {
        minvalue = minvalue + minvalue;
        maxvalue = minvalue - maxvalue;
        minvalue = minvalue - maxvalue;
        min.value = minvalue;
        max.value = maxvalue;

    }
    let num = Math.floor(Math.random() * (maxvalue - minvalue + 1)) + minvalue;
    document.getElementById("result").innerText = num;
}
window.addEventListener("load",randomNum());
generatebtn.addEventListener("click",randomNum);
