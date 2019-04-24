function show_hide(id) {
    var div = document.getElementById(id);
    if(div.style.display == 'block') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
}




/*---------------------------------------------------------------------------------
Изменить Класс Кнопки При Нажатии на кнопку. Показать / Скрыть блок:
--------------------------------------------------------------------
html:
-----
<script type="text/javascript">
function show_hide(id) {
    var div = document.getElementById(id);
    if(div.style.display == 'block') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
}
</script>
<style>
	#key1{border:1px solid rgb(15, 46, 184);}
</style>

<input type="button" onclick="show_hide('key1')" class="no">
<div id="key1" style="display:none">
слово слово <br>слово слово <br>слово слово <br>слово слово <br>слово слово <br>
слово слово <br>слово слово <br>слово слово <br>слово слово <br>слово слово <br>
слово слово <br>слово слово <br>слово слово <br>слово слово <br>слово слово <br>слово слово <br>
слово слово <br>слово слово <br>слово слово <br>слово слово <br>слово слово <br>
слово слово <br>слово слово <br>слово слово <br>слово слово <br>слово слово <br>слово слово <br>
слово слово <br>слово слово <br>слово слово <br>слово слово <br>слово слово <br>
</div>
---------------------------------------------------------------------------------*/
// https://codepen.io/anon/pen/bJmMLM
// https://codepen.io/ArcCode/pen/MRPZjP