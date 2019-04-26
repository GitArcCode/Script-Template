
	$(document).ready(function() {

		var element = $(".fixed_block");
		var height_el = element.offset().top;
		
		//getStyle = document.getElementById('left_Sidebar').style.display //*
		//document.getElementById('left_Sidebar').style.display='block'; //*
		
		$(".fixed_block_position").css({
			"width": element.outerWidth(),//!!!
			"height": element.outerHeight()//!!!
		});

		//document.getElementById('left_Sidebar').style.display = getStyle; //*

		$(window).scroll(function() {
			
			if($(window).scrollTop() > height_el) {
			
				element.addClass("fixed");

			} else {
			
				element.removeClass("fixed");

			}

		});

	});
	

// * для того, что бы при скрытии блока не ломалось

/*-----------------------------------------------------------
ЗАФИКСИРОВАТЬ БЛОК ПРИ ПРОКРУТКЕ:
--------
(window) - окно браузера, от него отщитывается скролл.
если скролл надо отсчитывать от блока, то заменить на блок ("#id")или (".класс")

«.fixed_block» здесь – это класс элемента,
который нужно зафиксировать при прокрутке, 
а «.fixed_block_position» - класс обертки.

Простой пример:
<div class="fixed_block_position">
	<div class="fixed_block">
		Ваше содержимое для фиксации. Ссылки, текст, изображение и прочее.
	</div>
</div>

И стили:
<style>
	.fixed {
		position: fixed;
		z-index: 99;
		top: 0;
	}
</style>
-------------------------------------
https://www.pandoge.com/moduli_i_skripty/tri-varianta-fiksacii-elementa-na-sayte-na-css-jquery
-----------------------------------------------------------------------*/
// https://codepen.io/ArcCode/pen/QPZJzM?editors=1010
