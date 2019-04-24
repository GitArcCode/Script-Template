function selectText(elementId) {
var doc = document,
text = doc.getElementById(elementId),
range,
selection;
if (doc.body.createTextRange) {
range = document.body.createTextRange();
range.moveToElementText(text);
range.select();
} else if (window.getSelection) {
selection = window.getSelection();
range = document.createRange();
range.selectNodeContents(text);
selection.removeAllRanges();
selection.addRange(range);
}}
$(".copy").click(function() {
selectText(this.id);
document.execCommand("copy");
/*------------------------------------------------------*/
window.getSelection().removeAllRanges();//Снять выделение
/*------------------------------------------------------*/
});



/*-----------------------------------------------------------------
СКОПИРОВАТЬ В БУФЕР ОБМЕНА ПО КЛИКУ / jQuery.

у скопируемого должно обязательно быть id и сласс
id у всех разное, класс у всех одинаковый ".copy"
если id повторится, то скопируется текст с первого id

Пример:
html:

<div id = "text1" class="copy"> Ваш текст1 </div>
<div id = "text2" class="copy"> Ваш текст2 </div>
<div id = "text3" class="copy"> Ваш текст3 </div>
<div id = "text4" class="copy"> Ваш текст4 </div>
<div id = "text5" class="copy"> Ваш текст5 </div>
-----------------------------------------------------
https://dlod.ru/vydelit-i-kopirovat-po-kliku-jquery
http://www.cyberforum.ru/javascript-beginners/thread2438589.html#post13504884
-----------------------------------------------------------------*/
// https://codepen.io/anon/pen/zXmLaJ?editors=1010
// https://codepen.io/ArcCode/pen/ZZqVbq?editors=1010