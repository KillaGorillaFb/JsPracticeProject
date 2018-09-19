function showVal() 
{
    console.log(document.getElementById('name').value);
    alert("Hello");
}

document.getElementById('theButton').addEventListener("click", showVal);

var myTxtBx = document.getElementById('name');
myTxtBx.addEventListener("focus", newFunction);

function newFunction(){
    myTxtBx.style.backgroundColor = "grey";
}

var secondButton = document.getElementById('buttonTwo');
secondButton.addEventListener("click", function(){
    var divText = document.getElementById('theDiv').innerHTML;
    divText += " new stuff";
    document.getElementById('theDiv').innerHTML = divText;

    alert(divText);

} )

document.getElementById('lists').addEventListener('click', 
function(){
    var listItems = document.getElementsByTagName('li');
    var item = document.getElementById('addAnItem').value;

    for (let i = 0; i < listItems.length; i++)
    {
        console.log(listItems[i].innerHTML);
    }
    document.getElementById('theList').innerHTML 
    += "<li>" + item + "</li>"
})

