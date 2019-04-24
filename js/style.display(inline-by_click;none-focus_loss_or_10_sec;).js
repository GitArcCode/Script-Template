var elements = document.getElementsByClassName('copy');
for (var i = 0; i < elements.length; i++) {
  elements[i].onclick = function() {
    var style = this.closest('.right_function').getElementsByClassName("image_copy")[0].style;
    style.display = 'inline';
	//---10sec------
	if (this.timerId) clearInterval(this.timerId);
    this.timerId = setTimeout(function() {
      style.display = 'none';
    },10000);
    //---------
  }
}
//---потеря фокуса------
window.onblur = function() {
  var elements = document.getElementsByClassName('image_copy');
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = 'none';
  }
}
 //---------



/*-------------------------------
меняет стиль дисплей при клике на inline, при потере фокуса или по достижению 10 секунд на none
пример:

<div class="right_function" id="function_2">
	<code class="copy" id="function_2_copy"><em>number</em> = function_2();	</code>
	<img src="https://clck.ru/FfFcV"class="image_copy" style="display:none">
	<br>
	<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
</div>

http://www.cyberforum.ru/javascript-beginners/thread2438979.html#post13504239
-------------------------------*/
// https://codepen.io/anon/pen/mgzLYp?editors=1010
// https://codepen.io/ArcCode/pen/VNEqzj?editors=1010