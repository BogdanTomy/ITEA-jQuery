
	var prodCard = $('#content_body');
	var tempCard = $('#temp_card');


	/*-----------------База товаров--------------------- */

	var sourse = [
	{ /*-----------------ACANA--------------------- */
		id: 0,
		manufacturer: "acana" ,
		category: "puppies" ,
		title: "Acana puppy small breed" ,
		prise: "500 UAH" ,
		value: "2 KG",
		img: "img/prod/Acana_dog_puppy_small_breed.png" ,
		description: "Беззерновой корм для щенков собак малых пород" ,
		descriptionFull: "Полноценный и сбалансированный беззерновой холистик корм для щенков малых пород"
	},
	{
		id: 1,
		manufacturer: "acana" ,
		category: "sport" ,
		title: "ACANA SPORT & AGILITY" ,
		prise: "1850 UAH" ,
		value: "11,4 KG",
		img: "img/prod/sport_and_agility-250x368.png" ,
		description: "Беззерновой корм для активных собак всех пород" ,
		descriptionFull: "Полноценный и сбалансированный холистик корм для собак с активным образом жизни."
	},
	{
		id: 2,
		manufacturer: "acana" ,
		category: "allbreed" ,
		title: "ACANA LAMB & APPLE" ,
		prise: "600 UAH" ,
		value: "2 KG",
		img: "img/prod/aka-yagnenok-yabloko-dlya-soback-vseh-porod.png" ,
		description: "Беззерновой корм для собак с ягнёнком и яблоком" ,
		descriptionFull: "Корм для собак всех возрастов и всех пород на основе мяса ягненка и яблока. Особенно подходит  для собак с чувствительным пищеварением и склонным к аллергии."
	},
	{
		id: 3,
		manufacturer: "acana" ,
		category: "puppies" ,
		title: "ACANA PUPPY & JUNIOR" ,
		prise: "550 UAH" ,
		value: "2 KG",
		img: "img/prod/Acana_Heritage_dog_puppy_and_junior-1-250x368.png" ,
		description: "Беззерновой корм для щенков собак средних пород" ,
		descriptionFull: "Полноценный и сбалансированный корм для щенков и юниоров средних пород."
	},
	{
		id: 4,
		manufacturer: "acana" ,
		category: "puppies" ,
		title: "ACANA PUPPY LARGE BREED" ,
		prise: "1980 UAH" ,
		value: "11,4 KG",
		img: "img/prod/puppy_large_breed-250x368.png" ,
		description: "БЕЗЗЕРНОВОЙ КОРМ ДЛЯ ЩЕНКОВ СОБАК КРУПНЫХ ПОРОД" ,
		descriptionFull: "Полноценный и сбалансированный корм для щенков крупных пород."
	},
	{
		id: 5,
		manufacturer: "acana" ,
		category: "sport" ,
		title: "ACANA YORKSHIRE PORK" ,
		prise: "600 UAH" ,
		value: "2 KG",
		img: "img/prod/ACANA_Yorkshire_Pork.png" ,
		description: "Беззерновой корм для собак с мясом йоркширского поросенка" ,
		descriptionFull: "Полнорационный и сбалансированный корм для собак всех пород и возрастов с чувствительной пищеварительной системой."
	},
	{
		id: 6,
		manufacturer: "acana" ,
		category: "large" ,
		title: "ACANA ADULT LARGE BREED" ,
		prise: "1850 UAH" ,
		value: "11,4 KG",
		img: "img/prod/Acana_Heritage_dog_adult_large_breed.png" ,
		description: "БЕЗЗЕРНОВОЙ КОРМ ДЛЯ ВЗРОСЛЫХ СОБАК КРУПНЫХ ПОРОД" ,
		descriptionFull: "Полноценный и сбалансированный корм для взрослых собак крупных пород."
	},
	{
		id: 7,
		manufacturer: "acana" ,
		category: "medium" ,
		title: "ACANA ADULT DOG" ,
		prise: "1640 UAH" ,
		value: "13 KG",
		img: "img/prod/acana-adult-dog.png" ,
		description: "БЕЗЗЕРНОВОЙ КОРМ ДЛЯ ВЗРОСЛЫХ СОБАК средних ПОРОД" ,
		descriptionFull: "Полноценный,  сбалансированый корм для взрослых собак всех пород. Натуральный и вкусный, он обеспечит Вашей собаке силу и здоровье."
	},
	{
		id: 8,
		manufacturer: "acana" ,
		category: "small" ,
		title: "ACANA ADULT SMALL BREED" ,
		prise: "550 UAH" ,
		value: "2 KG",
		img: "img/prod/Acana_Heritage_dog_adult_small_breed.png" ,
		description: "БЕЗЗЕРНОВОЙ КОРМ ДЛЯ ВЗРОСЛЫХ СОБАК МАЛЫХ ПОРОД" ,
		descriptionFull: "Полноценный и сбалансированный корм, богатый качественными протеинами и жирами, с низким содержанием углеводов, для контроля над весом."
	},
	{
		id: 9,
		manufacturer: "acana" ,
		category: "allbreed" ,
		title: "ACANA COBB CHICKEN & GREENS" ,
		prise: "1170 UAH" ,
		value: "6 KG",
		img: "img/prod/chicken_greens.png" ,
		description: "БЕЗЗЕРНОВОЙ КОРМ С КУРИЦЕЙ ДЛЯ СОБАК ВСЕХ ПОРОД" ,
		descriptionFull: "Полноценный и сбалансированный корм для взрослых собак на основе мяса цыпленка."
	},
	{
		id: 10,
		manufacturer: "acana" ,
		category: "light" ,
		title: "ACANA LIGHT & FIT" ,
		prise: "1850 UAH" ,
		value: "11,4 KG",
		img: "img/prod/light_and_fit.png" ,
		description: "БЕЗЗЕРНОВОЙ КОРМ ДЛЯ СОБАК С ИЗБЫТОЧНЫМ ВЕСОМ" ,
		descriptionFull: "Полноценный и сбалансированный корм для взрослых собак всех пород с избыточным весом."
	},
	{
		id: 11,
		manufacturer: "acana" ,
		category: "allbreed" ,
		title: "ACANA FREE-RUN DUCK" ,
		prise: "650 UAH" ,
		value: "2 KG",
		img: "img/prod/duck.png" ,
		description: "БЕЗЗЕРНОВОЙ КОРМ ДЛЯ СОБАК ВСЕХ ПОРОД НА ВСЕХ СТАДИЯХ ЖИЗНИ" ,
		descriptionFull: "Полноценный и сбалансированный корм для взрослых собак всех пород. Биологически Соответствующая формула идеальна даже для самых привередливых питомцев."
	},

	/*-----------------ORIJEN--------------------- */

	{
		id: 12,
		manufacturer: "orijen" ,
		category: "puppies" ,
		title: "Orijen puppy" ,
		prise: "800 UAH" ,
		value: "2 KG",
		img: "img/prod/Orijen puppy.jpg" ,
		description: "Высокобелковый беззерновой корм для щенков всех пород" ,
		descriptionFull: "Полноценный, сбалансированый беззерновой холистик корм для щенков собак всех пород."
	},
	{
		id: 13,
		manufacturer: "orijen" ,
		category: "puppies" ,
		title: "Orijen PUPPY LARGE" ,
		prise: "2500 UAH" ,
		value: "11,4 KG",
		img: "img/prod/NS-ORI_Puppy_Large__Dog_Front_Left.png" ,
		description: "Высокобелковый беззерновой корм для щенков крупных пород" ,
		descriptionFull: "Полноценный, сбалансированый беззерновой холистик корм для щенков собак всех пород."
	},
	{
		id: 14,
		manufacturer: "orijen" ,
		category: "large" ,
		title: "Orijen adult dog" ,
		prise: "2550 UAH" ,
		value: "13 KG",
		img: "img/prod/orijen-adult-dog.jpg" ,
		description: "Высокобелковый беззерновой корм для взрослых собак" ,
		descriptionFull: "Полноценный,  сбалансированый корм для взрослых собак всех пород, максимально приближенный к природному рациону питания Вашей собаки."
	},
	{
		id: 15,
		manufacturer: "orijen" ,
		category: "light" ,
		title: "Orijen six fishes" ,
		prise: "1900 UAH" ,
		value: "6 KG",
		img: "img/prod/Orijen-Dog-6-Fish.jpg" ,
		description: "Высокобелковый облегчённый корм для взрослых собак" ,
		descriptionFull: "Полноценный,  сбалансированый корм для взрослых собак всех пород, на основе шести видов морских рыб."
	},
	{
		id: 16,
		manufacturer: "orijen" ,
		category: "allbreed" ,
		title: "Orijen original" ,
		prise: "825 UAH" ,
		value: "2 KG",
		img: "img/prod/NS-ORI_Original_Dog_Front_Left.png" ,
		description: "Высокобелковый сбалансированный корм для взрослых собак" ,
		descriptionFull: "БИОЛОГИЧЕСКИ СООТВЕТСТВУЮЩИЙ КОРМ ДЛЯ СОБАК ВСЕХ ПОРОД И ВСЕХ СТАДИЙ ЖИЗНИ."
	},

	/*-----------------OVEN BACED--------------------- */

	{
		id: 17,
		manufacturer: "ovenbaced" ,
		category: "allbreed" ,
		title: "OVEN BAKED Chiken" ,
		prise: "400 UAH" ,
		value: "2,27 KG",
		img: "img/prod/Grainchienfree.jpg" ,
		description: "БЕЗЗЕРНОВОЙ КОРМ ДЛЯ СОБАК ВСЕХ ПОРОД И ВОЗРАСТОВ С КУРИЦЕЙ" ,
		descriptionFull: "Беззерновая формула корма FREE Oven-Baked НЕ СОДЕРЖИТ зерновых продуктов и состоит из 57% животного протеина."
	},
	{
		id: 18,
		manufacturer: "ovenbaced" ,
		category: "light" ,
		title: "OVEN BAKED Fish" ,
		prise: "450 UAH" ,
		value: "2,27 KG",
		img: "img/prod/Grainfreefish.jpg" ,
		description: "БЕЗЗЕРНОВОЙ КОРМ ДЛЯ СОБАК ВСЕХ ПОРОД И ВОЗРАСТОВ С РЫБОЙ" ,
		descriptionFull: "Беззерновая формула корма FREE Oven-Baked НЕ СОДЕРЖИТ зерновых продуктов и состоит из 57% животного протеина."
	},
	{
		id: 19,
		manufacturer: "ovenbaced" ,
		category: "small" ,
		title: "OVEN BAKED Small breed" ,
		prise: "450 UAH" ,
		value: "2,27 KG",
		img: "img/prod/Grainsmallchikt.jpg" ,
		description: "БЕЗЗЕРНОВОЙ КОРМ ДЛЯ СОБАК МАЛЫХ ПОРОД ВСЕХ ВОЗРАСТОВ С КУРИЦЕЙ" ,
		descriptionFull: "Беззерновая формула корма FREE Oven-Baked НЕ СОДЕРЖИТ зерновых продуктов и состоит из 57% животного протеина."
	},
	{
		id: 20,
		manufacturer: "ovenbaced" ,
		category: "small" ,
		title: "OVEN BAKED Small breed" ,
		prise: "450 UAH" ,
		value: "2,27 KG",
		img: "img/prod/Grainfreechiek.jpg" ,
		description: "БЕЗЗЕРНОВОЙ КОРМ ДЛЯ СОБАК МАЛЫХ ПОРОД ВСЕХ ВОЗРАСТОВ С РЫБОЙ" ,
		descriptionFull: "Беззерновая формула корма FREE Oven-Baked НЕ СОДЕРЖИТ зерновых продуктов и состоит из 57% животного протеина."
	},
	{
		id: 21,
		manufacturer: "ovenbaced" ,
		category: "medium" ,
		title: "OVEN BAKED adult" ,
		prise: "1620 UAH" ,
		value: "12,25 KG",
		img: "img/prod/moyen-chicken.jpg" ,
		description: "Холистик корм ДЛЯ ВЗРОСЛЫХ СОБАК С КУРИЦЕЙ" ,
		descriptionFull: "Oven Baked Tradition обеспечивает собак питательным и натуралным кормом, в котором учтены все нужды собачьего организма."
	},

	/*-----------------SABA--------------------- */

	{
		id: 22,
		manufacturer: "saba" ,
		category: "small" ,
		title: "Saba Beef and rise" ,
		prise: "260 UAH" ,
		value: "1,5 KG",
		img: "img/prod/сух-взросл-МП-говяд-с-рисом-12-кг.jpg" ,
		description: "Холистик корм ДЛЯ ВЗРОСЛЫХ СОБАК МЕЛКИХ ПОРОД" ,
		descriptionFull: "..."
	},
	{
		id: 23,
		manufacturer: "saba" ,
		category: "allbreed" ,
		title: "Saba grain free duck" ,
		prise: "720 UAH" ,
		value: "4 KG",
		img: "img/prod/сух-без-зерна-утка-с-овощами-12-кг.jpg" ,
		description: "Беззерновой КОРМ SABA УТКА С ОВОЩАМИ для всех пород" ,
		descriptionFull: "..."
	},
	{
		id: 24,
		manufacturer: "saba" ,
		category: "large" ,
		title: "Saba Beef and rise" ,
		prise: "1480 UAH" ,
		value: "12 KG",
		img: "img/prod/сух-взросл-говяд-с-рисом-12-кг.jpg" ,
		description: "Холистик корм ДЛЯ ВЗРОСЛЫХ СОБАК крупных ПОРОД" ,
		descriptionFull: "..."
	},
	{
		id: 25,
		manufacturer: "saba" ,
		category: "medium" ,
		title: "Saba turkey with rice" ,
		prise: "260 UAH" ,
		value: "1,5 KG",
		img: "img/prod/сух-взросл-индейка-с-рисом-12-кг.jpg" ,
		description: "Холистик корм SABA ИНДЕЙКА С РИСОМ" ,
		descriptionFull: "..."
	},
	{
		id: 26,
		manufacturer: "saba" ,
		category: "puppies" ,
		title: "Saba puppy turkey with rice" ,
		prise: "285 UAH" ,
		value: "1,5 KG",
		img: "img/prod/pappyindris12-kg.jpg" ,
		description: "Холистик корм SABA для щенков ИНДЕЙКА С РИСОМ",
		descriptionFull: "..."
	},
	{
		id: 27,
		manufacturer: "saba" ,
		category: "sport" ,
		title: "Saba grain free pork" ,
		prise: "840 UAH" ,
		value: "4 KG",
		img: "img/prod/сух-без-зерна-кабан-с-клюквой-12-кг.jpg" ,
		description: "Беззерновой КОРМ SABA с мясом кабана и клюквой для всех пород",
		descriptionFull: "..."
	},

	];

/*-----------------Шаблонизатор--------------------- */

	function filler (root, temp, s){

		s.forEach( function fill (item){

			var body = $(tempCard.html());

			body.find('.prod__card_title').text(item.title);

			body.find('.prod__card_prise').text(item.prise);

			body.find('.prod__card_img').attr('src', item.img);

			body.find('.prod__card_description').text(item.description);

			body.find('.prod__card_description_full').text(item.descriptionFull);

			body.addClass('id_' + item.id + ' all_manuf all_categ active_manuf ' + item.manufacturer + '_manuf ' + item.category + '_categ');

			root.append(body);
		});
	}

	filler(prodCard, tempCard, sourse);

/*-----------------Фильтр по производителю (Manufacturer Filter)--------------------- */


	$(function () {
		var newSelect = '';

		$('.content_filter_main ul li a').click(function(){

			$('.content_body').fadeTo(200, 0);
			$('.content_filter_main ul li a').removeClass('current_manuf');
			$(this).addClass('current_manuf');

			$('.content_body div').removeClass('active_manuf');

			newSelect = $(this).attr('rel');

			filterTemp = newSelect;

			$('.content_body div:not(.'+ newSelect +')').hide("slow");
			$('.' + newSelect).addClass('active_manuf').show("slow");

			$(".content_body").fadeTo(1000, 1);


			return false;

		});

	});

	/*-----------------Фильтр по категориям (Category filter)--------------------- */

	$(function () {
		var newSelect = '';

		$('.side__filter ul li a').click(function(){

			$('.content_body').fadeTo(200, 0);
			$('.side__filter ul li a').removeClass('current_categ');
			$(this).addClass('current_categ');

			newSelect = $(this).attr('rel');

				$('.active_manuf').show();
				$('.active_manuf:not(.'+ newSelect +')').hide("slow");

			$(".content_body").fadeTo(1000, 1);

			return false; 

		});

	});

	/*-----------------Показать сервисное меню (Show servise menu)--------------------- */
	$('.fa').click(function(){
		$('.service__menu_items').slideToggle('slow');
	});

	/*-----------------POPUP карточка товара --------------------- */

	/*------v.1.0---- */

	$('.content_body').on( 'click.div', function () {

		console.log(this);

		var choise = ($(this).clone());

		var popupBg = $('.popup_bg'); 
		$('.popup_bg').fadeTo(500, 1);
		choise.append(tempCard);
		$(this).addClass('active_pop');

		var testThis = $(this);

		document.body.style.overflow = 'hidden';

		popupBg.click(function() {
			$('.popup_bg').animate({opacity:'hide'}, 500);
			testThis.removeClass('active_pop');
			document.body.style.overflow = '';
		});
		});
	

	/*----------------- Удаление карточки (Dell card)--------------------- */

	$('.del__button_card').click( function (e) {
		
		event.stopPropagation();
		
		var card = $(this).parent();

		card.hide('slow');

		setTimeout(function () {
			card.remove();
		}, 1000);

		return false;
	});

	/*----------------- Добавление товара (Add goods)--------------------- */
	
	$('#add_card_btn').click( function() {
		$('.popup_bg').fadeTo(500, 1);
		$('.addCard__form').fadeIn(500);
		document.body.style.overflow = 'hidden';
		$('#form_submit_btn').click( function (e) {

			e.stopPropagation();

			var temp = {};

			temp.id = sourse.length + 1;
			temp.manufacturer = $('#form_manufacturer').val();
			temp.category = $('#form_category').val();
			temp.title = $('#form_title').val();
			temp.prise = $('#form_prise').val() + ' UAH';
			temp.value = $('#form_value').val() + ' KG';
			temp.description = $('#form_description').val();
			temp.description = $('#form_descriptionFull').val();
			temp.descriptionFull = $('#form_descriptionFull').val();

			sourse.push(temp);

			$('.content_body div').remove();

			filler(prodCard, tempCard, sourse);

			$('.addCard__form').animate({opacity:'hide'}, 500);

			$('.popup_bg').animate({opacity:'hide'}, 500);

			document.body.style.overflow = '';

		});
	});



	/*--------- Функция для скрытия елементов (Elem. Hideout function)----------- */


	/*----------------- Слайдер (Slider)--------------------- */



var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function() {
    var switchInterval = setInterval(nextSlide, slideInterval);

    $('#viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('#next-btn').click(function() {
        nextSlide();
    });

    $('#prev-btn').click(function() {
        prevSlide();
    });

    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
    });
});


function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}

/*----------------- Добавление слайда (Add slide)--------------------- */

$('#add_slide_btn').on('click', function () {

document.body.style.overflow = 'hidden';

$('.popup_bg').fadeTo(500, 1);

$('.adding__slide_form').fadeIn(500);

$('#adding__slide_submit').on('click', function () {
	alert('Submit');
})

});



function addSlide (picName) {

}