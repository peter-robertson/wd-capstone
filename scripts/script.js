function changeIt(imageName,objName)
{
    var obj = document.getElementById(objName);

    var imgTag = "<img src='"+imageName+"' border='0' />";

    obj.innerHTML = imgTag;

    return;
}
