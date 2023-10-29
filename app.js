function fnCheckAll(Element){
    for(let e of document.querySelectorAll('.checkbox>input[type=checkbox]'))
    e.checked = Element.checked;
}
function DeleteItem(Element){
    Element.parentElement.parentElement.remove();
}
function fnUpdateAmountItem(Element){
    var rowElement = Element.parentElement.parentElement;
    var num = Element.value;
    var price = rowElement.querySelectorAll('span')[2].innerText;
    var total = num*parseFloat(price);
    row.querySelectorAll('span')[3].innerText = total +"$";
}
for(let e of document.getElementsByClassName('delete'))
    e.addEventListener('click', function(){DeleteItem(this)});