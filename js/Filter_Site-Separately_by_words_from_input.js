function myFunction() {
    const words = document.getElementById('myInput').value.toUpperCase().trim().split(/\s+/g);
    document.querySelectorAll('#myUL > li').forEach(li => {
        li.style.display = words.some(x => li.textContent.toUpperCase().indexOf(x) > -1) ? '' : 'none';
    });
}
jQuery("#myInput").keyup(myFunction);
//--------------
// let input = document.querySelector('#myInput');
// input.addEventListener('keyup', () => myFunction());
//---------------
// html: <input ... onkeyup="myFunction()"...


/*---------------------------------------------------------------
Filter_Site-Separately_by_words_from_input.js
Фильтр сайта-отдельно по словам от ввода
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

get - найдет вариант 1,2
set - найдет вариант 3,5
get Info - найдет вариант 1,2,3,4,5
----------------------------------------------------------------*/
// http://www.cyberforum.ru/javascript-beginners/thread2441685.html
// https://codepen.io/ArcCode/pen/vMVvOG?editors=1010



