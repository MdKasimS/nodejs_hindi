let count=0;
function addElement(srVal)
{
    // alert("Salam Hindusthan !!!");
    const n= document.createElement(srVal);
    const txtVal = document.createTextNode(count++);
    n.appendChild(txtVal);
    document.getElementById("mePass").appendChild(n);
    return document.getElementById("meText").value;
}

function getSubmission()
{
    const data = document.getElementById("mySubmit");
    alert("Salam Hindusthan !!!");

    console.log(data.value);
}

getSubmission();    