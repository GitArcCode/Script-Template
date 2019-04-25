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

jQuery("#myInput").keyup(myFunction);
//--------------
// let input = document.querySelector('#myInput');
// input.addEventListener('keyup', () => myFunction());
//---------------
// html: <input ... onkeyup="myFunction()"...



/*---------------------------------------------------------------
Filter_Site-Strict_Search_For_Exactly_Entered_Phrase.js
Фильтр сайта - строгий поиск по точно введенной фразе
myInput - это ид инпута (id input)   
myUL - это ид маркировачнного списока (ul) по которому будет производится поиск, тут может быть и блок div, да и хоть что.
li - это по каким тегам будет производится поиск внутри myUL
----------------------------------------------------------------
html:

<script src="https://code.jquery.com/jquery-3.0.0.min.js"> </script>
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
// https://codepen.io/ArcCode/pen/GLYPgj?editors=1010
