function myFunction() {
    const words = document.querySelector('#myInput').value.toUpperCase().trim().split(/\s+/g);
    document.querySelectorAll('#myUL li').forEach(li => {
        const text = li.textContent.toUpperCase();
 
        if (words.every(x => text.indexOf(x) > -1)) {
            li.style.display = '';
        } else {
            li.style.display = 'none';
        }
    });
}
 
jQuery("#myInput").keyup(myFunction);



/*---------------------------------------------------------------
Filter_Site-For_Individual_Phrases_From_Word.js
Фильтр сайта - для отдельных фраз из слова
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
get - найдет вариант 1,2
set - найдет вариант 3,5
get Info - найдет вариант 1
----------------------------------------------------------------*/
// http://www.cyberforum.ru/javascript-beginners/thread2441685.html
// https://codepen.io/ArcCode/pen/qwJLOW?editors=1010


