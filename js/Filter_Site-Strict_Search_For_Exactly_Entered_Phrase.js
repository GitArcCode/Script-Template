function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('myUL');
    li = ul.getElementsByTagName('li');
  
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName('a')[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else
            li[i].style.display = "none";
    }
}
let input = document.querySelector('#myInput');
let elements = document.querySelectorAll('#myUL li');
input.addEventListener('keyup', () => myFunction(input.value, elements));



/*---------------------------------------------------------------
Filter_Site-Strict_Search_For_Exactly_Entered_Phrase.js
Фильтр сайта - строгий поиск по точно введенной фразе
myInput - это ид инпута (id input)   
myUL - это ид маркировачнного списока (ul) по которому будет производится поиск, тут может быть и блок div, да и хоть что.
li - это по каким тегам будет производится поиск внутри myUL
----------------------------------------------------------------
html:

<input type="text" id="myInput" placeholder="Search">
 
<ul id="myUL">
    <li><a href="#"> getFunctionInfoValue, </a></li>
    <li><a href="#"> getFunctionValue, </a></li>
    <li><a href="#"> setFunctionInfoValue, </a></li>
    <li><a href="#"> Placeat FunctionInfoValuem voluptatibus</a></li>
    <li><a href="#"> setFunctionInfoValue</a></li>
    <li><a href="#"> axime sed, illum veniam harum quos? Rerum consectetur</a></li>
</ul>
----------------------------------------------------------------*/
// http://www.cyberforum.ru/javascript-beginners/thread2441685.html
// https://codepen.io/anon/pen/oOaMwV?editors=1010
// https://codepen.io/ArcCode/pen/GLYPgj?editors=1010