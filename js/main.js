$( document ).ready(function() {

	var prodCard = $('#content_body');
	var tempCard = $('#temp_card');


	/*-----------------База товаров--------------------- */

	var productsSource = [
	{

	/*-----------------ACANA--------------------- */
		id: 0,
		manufacturer: "acana" ,
		category: "puppies" ,
		title: "Acana puppy small breed" ,
		prise: 500 ,
		weight: "2 KG",
		img: "img/prod/Acana_dog_puppy_small_breed.png" ,
		description: "Беззерновой корм для щенков собак малых пород" ,
		descriptionFull: "Полноценный и сбалансированный беззерновой холистик корм для щенков малых пород",
		value: "Acana Puppy Small Breed"
	},
	{
		id: 1,
		manufacturer: "acana" ,
		category: "sport" ,
		title: "Acana Sport & Agility" ,
		prise: 1850 ,
		weight: "11,4 KG",
		img: "img/prod/sport_and_agility-250x368.png" ,
		description: "Беззерновой корм для активных собак всех пород" ,
		descriptionFull: "Полноценный и сбалансированный холистик корм для собак с активным образом жизни.",
		value: "Acana Sport & Agility"
	},
	{
		id: 2,
		manufacturer: "acana" ,
		category: "allbreed" ,
		title: "Acana Lamb & Apple" ,
		prise: 600 ,
		weight: "2 KG",
		img: "img/prod/aka-yagnenok-yabloko-dlya-soback-vseh-porod.png" ,
		description: "Беззерновой корм для собак с ягнёнком и яблоком" ,
		descriptionFull: "Корм для собак всех возрастов и всех пород на основе мяса ягненка и яблока. Особенно подходит  для собак с чувствительным пищеварением и склонным к аллергии.",
		value: "Acana Lamb & Apple"
	},
	{
		id: 3,
		manufacturer: "acana" ,
		category: "puppies" ,
		title: "Acana Puppy & Junior" ,
		prise: 550 ,
		weight: "2 KG",
		img: "img/prod/Acana_Heritage_dog_puppy_and_junior-1-250x368.png" ,
		description: "Беззерновой корм для щенков собак средних пород" ,
		descriptionFull: "Полноценный и сбалансированный корм для щенков и юниоров средних пород.",
		value: "Acana Puppy & Junior"
	},
	{
		id: 4,
		manufacturer: "acana" ,
		category: "puppies" ,
		title: "Acana Puppy Large Breed" ,
		prise: 1980 ,
		weight: "11,4 KG",
		img: "img/prod/puppy_large_breed-250x368.png" ,
		description: "БЕЗЗЕРНОВОЙ КОРМ ДЛЯ ЩЕНКОВ СОБАК КРУПНЫХ ПОРОД" ,
		descriptionFull: "Полноценный и сбалансированный корм для щенков крупных пород.",
		value: "Acana Puppy Large Breed"
	},
	{
		id: 5,
		manufacturer: "acana" ,
		category: "sport" ,
		title: "Acana Yorkshire Pork" ,
		prise: 600 ,
		weight: "2 KG",
		img: "img/prod/ACANA_Yorkshire_Pork.png" ,
		description: "Беззерновой корм для собак с мясом йоркширского поросенка" ,
		descriptionFull: "Полнорационный и сбалансированный корм для собак всех пород и возрастов с чувствительной пищеварительной системой." ,
		value: "Acana Yorkshire Pork"
	},
	{
		id: 6,
		manufacturer: "acana" ,
		category: "large" ,
		title: "Acana Adult Large Breed" ,
		prise: 1850 ,
		weight: "11,4 KG",
		img: "img/prod/Acana_Heritage_dog_adult_large_breed.png" ,
		description: "БЕЗЗЕРНОВОЙ КОРМ ДЛЯ ВЗРОСЛЫХ СОБАК КРУПНЫХ ПОРОД" ,
		descriptionFull: "Полноценный и сбалансированный корм для взрослых собак крупных пород.",
		value: "Acana Adult Large Breed"
	},
	{
		id: 7,
		manufacturer: "acana" ,
		category: "medium" ,
		title: "Acana Adult Dog" ,
		prise: 1640 ,
		weight: "13 KG",
		img: "img/prod/acana-adult-dog.png" ,
		description: "БЕЗЗЕРНОВОЙ КОРМ ДЛЯ ВЗРОСЛЫХ СОБАК средних ПОРОД" ,
		descriptionFull: "Полноценный,  сбалансированый корм для взрослых собак всех пород. Натуральный и вкусный, он обеспечит Вашей собаке силу и здоровье.",
		value: "Acana Adult Dog"
	},
	{
		id: 8,
		manufacturer: "acana" ,
		category: "small" ,
		title: "Acana Adult Small Breed" ,
		prise: 550 ,
		weight: "2 KG",
		img: "img/prod/Acana_Heritage_dog_adult_small_breed.png" ,
		description: "БЕЗЗЕРНОВОЙ КОРМ ДЛЯ ВЗРОСЛЫХ СОБАК МАЛЫХ ПОРОД" ,
		descriptionFull: "Полноценный и сбалансированный корм, богатый качественными протеинами и жирами, с низким содержанием углеводов, для контроля над весом.",
		value: "Acana Adult Small Breed"
	},
	{
		id: 9,
		manufacturer: "acana" ,
		category: "allbreed" ,
		title: "Acana Cobb Chicken & Greens" ,
		prise: 1170 ,
		weight: "6 KG",
		img: "img/prod/chicken_greens.png" ,
		description: "БЕЗЗЕРНОВОЙ КОРМ С КУРИЦЕЙ ДЛЯ СОБАК ВСЕХ ПОРОД" ,
		descriptionFull: "Полноценный и сбалансированный корм для взрослых собак на основе мяса цыпленка.",
		value: "Acana Cobb Chicken & Greens"
	},
	{
		id: 10,
		manufacturer: "acana" ,
		category: "light" ,
		title: "Acana Light & Fit" ,
		prise: 1850 ,
		weight: "11,4 KG",
		img: "img/prod/light_and_fit.png" ,
		description: "БЕЗЗЕРНОВОЙ КОРМ ДЛЯ СОБАК С ИЗБЫТОЧНЫМ ВЕСОМ" ,
		descriptionFull: "Полноценный и сбалансированный корм для взрослых собак всех пород с избыточным весом.",
		value: "Acana Light & Fit"
	},
	{
		id: 11,
		manufacturer: "acana" ,
		category: "allbreed" ,
		title: "Acana Free-run Duck" ,
		prise: 650 ,
		weight: "2 KG",
		img: "img/prod/duck.png" ,
		description: "БЕЗЗЕРНОВОЙ КОРМ ДЛЯ СОБАК ВСЕХ ПОРОД НА ВСЕХ СТАДИЯХ ЖИЗНИ" ,
		descriptionFull: "Полноценный и сбалансированный корм для взрослых собак всех пород. Биологически Соответствующая формула идеальна даже для самых привередливых питомцев.",
		value: "Acana Free-run Duck"
	},

	/*-----------------ORIJEN--------------------- */

	{
		id: 12,
		manufacturer: "orijen" ,
		category: "puppies" ,
		title: "Orijen Puppy" ,
		prise: 800 ,
		weight: "2 KG",
		img: "img/prod/Orijen puppy.jpg" ,
		description: "Высокобелковый беззерновой корм для щенков всех пород" ,
		descriptionFull: "Полноценный, сбалансированый беззерновой холистик корм для щенков собак всех пород.",
		value: "Orijen Puppy"
	},
	{
		id: 13,
		manufacturer: "orijen" ,
		category: "puppies" ,
		title: "Orijen Puppy Large" ,
		prise: 2500 ,
		weight: "11,4 KG",
		img: "img/prod/NS-ORI_Puppy_Large__Dog_Front_Left.png" ,
		description: "Высокобелковый беззерновой корм для щенков крупных пород" ,
		descriptionFull: "Полноценный, сбалансированый беззерновой холистик корм для щенков собак всех пород.",
		value: "Orijen Puppy Large"
	},
	{
		id: 14,
		manufacturer: "orijen" ,
		category: "large" ,
		title: "Orijen Adult Dog" ,
		prise: 2550 ,
		weight: "13 KG",
		img: "img/prod/orijen-adult-dog.jpg" ,
		description: "Высокобелковый беззерновой корм для взрослых собак" ,
		descriptionFull: "Полноценный,  сбалансированый корм для взрослых собак всех пород, максимально приближенный к природному рациону питания Вашей собаки.",
		value: "Orijen Adult Dog"
	},
	{
		id: 15,
		manufacturer: "orijen" ,
		category: "light" ,
		title: "Orijen Six Fishes" ,
		prise: 1900 ,
		weight: "6 KG",
		img: "img/prod/Orijen-Dog-6-Fish.jpg" ,
		description: "Высокобелковый облегчённый корм для взрослых собак" ,
		descriptionFull: "Полноценный,  сбалансированый корм для взрослых собак всех пород, на основе шести видов морских рыб.",
		value: "Orijen Six Fishes"
	},
	{
		id: 16,
		manufacturer: "orijen" ,
		category: "allbreed" ,
		title: "Orijen Original" ,
		prise: 825 ,
		weight: "2 KG",
		img: "img/prod/NS-ORI_Original_Dog_Front_Left.png" ,
		description: "Высокобелковый сбалансированный корм для взрослых собак" ,
		descriptionFull: "Биологически соответствующий корм для собак всех пород и всех стадий жизни.",
		value: "Orijen Original"
	},

	/*-----------------OVEN BACED--------------------- */

	{
		id: 17,
		manufacturer: "ovenbaced" ,
		category: "allbreed" ,
		title: "Oven Baked Chiken" ,
		prise: 400 ,
		weight: "2,27 KG",
		img: "img/prod/Grainchienfree.jpg" ,
		description: "БЕЗЗЕРНОВОЙ КОРМ ДЛЯ СОБАК ВСЕХ ПОРОД И ВОЗРАСТОВ С КУРИЦЕЙ" ,
		descriptionFull: "Беззерновая формула корма Grain-free Oven-Baked не содержит зерновых продуктов и состоит из 57% животного протеина.",
		value: "Oven Baked Chiken"
	},
	{
		id: 18,
		manufacturer: "ovenbaced" ,
		category: "light" ,
		title: "Oven Baked Fish" ,
		prise: 450 ,
		weight: "2,27 KG",
		img: "img/prod/Grainfreefish.jpg" ,
		description: "БЕЗЗЕРНОВОЙ КОРМ ДЛЯ СОБАК ВСЕХ ПОРОД И ВОЗРАСТОВ С РЫБОЙ" ,
		descriptionFull: "Беззерновая формула корма Grain-free Oven-Baked не содержит зерновых продуктов и состоит из 57% животного протеина.",
		value: "Oven Baked Fish"
	},
	{
		id: 19,
		manufacturer: "ovenbaced" ,
		category: "small" ,
		title: "Oven Baked Small Breed" ,
		prise: 450 ,
		weight: "2,27 KG",
		img: "img/prod/Grainsmallchikt.jpg" ,
		description: "БЕЗЗЕРНОВОЙ КОРМ ДЛЯ СОБАК МАЛЫХ ПОРОД ВСЕХ ВОЗРАСТОВ С КУРИЦЕЙ" ,
		descriptionFull: "Беззерновая формула корма Grain-free Oven-Baked не содержит зерновых продуктов и состоит из 57% животного протеина.",
		value: "Oven Baked Small Breed"
	},
	{
		id: 20,
		manufacturer: "ovenbaced" ,
		category: "small" ,
		title: "Oven Baked Small Breed" ,
		prise: 450 ,
		weight: "2,27 KG",
		img: "img/prod/Grainfreechiek.jpg" ,
		description: "БЕЗЗЕРНОВОЙ КОРМ ДЛЯ СОБАК МАЛЫХ ПОРОД ВСЕХ ВОЗРАСТОВ С РЫБОЙ" ,
		descriptionFull: "Беззерновая формула корма Grain-free Oven-Baked не содержит зерновых продуктов и состоит из 57% животного протеина.",
		value: "Oven Baked Small Breed"
	},
	{
		id: 21,
		manufacturer: "ovenbaced" ,
		category: "medium" ,
		title: "Oven Baked Adult" ,
		prise: 1620 ,
		weight: "12,25 KG",
		img: "img/prod/moyen-chicken.jpg" ,
		description: "Холистик корм ДЛЯ ВЗРОСЛЫХ СОБАК С КУРИЦЕЙ" ,
		descriptionFull: "Oven Baked Tradition обеспечивает собак питательным и натуралным кормом, в котором учтены все нужды собачьего организма.",
		value: "Oven Baked Adult"
	},

	/*-----------------SABA--------------------- */

	{
		id: 22,
		manufacturer: "saba" ,
		category: "small" ,
		title: "Saba Beef and Rise sm" ,
		prise: 260 ,
		weight: "1,5 KG",
		img: "img/prod/сух-взросл-МП-говяд-с-рисом-12-кг.jpg" ,
		description: "Холистик корм ДЛЯ ВЗРОСЛЫХ СОБАК МЕЛКИХ ПОРОД" ,
		descriptionFull: "Холистик корм для взрослых собак мелких пород",
		value: "Saba Beef and Rise sm"
	},
	{
		id: 23,
		manufacturer: "saba" ,
		category: "allbreed" ,
		title: "Saba Grain Free Duck" ,
		prise: 720 ,
		weight: "4 KG",
		img: "img/prod/сух-без-зерна-утка-с-овощами-12-кг.jpg" ,
		description: "Беззерновой КОРМ SABA УТКА С ОВОЩАМИ для всех пород" ,
		descriptionFull: "Беззерновой корм SABA утка с овощами для всех пород",
		value: "Saba Grain Free Duck"
	},
	{
		id: 24,
		manufacturer: "saba" ,
		category: "large" ,
		title: "Saba Beef and Rise lg" ,
		prise: 1480 ,
		weight: "12 KG",
		img: "img/prod/сух-взросл-говяд-с-рисом-12-кг.jpg" ,
		description: "Холистик корм ДЛЯ ВЗРОСЛЫХ СОБАК крупных ПОРОД" ,
		descriptionFull: "Холистик корм для взрослых собак крупных пород",
		value: "Saba Beef and Rise lg"
	},
	{
		id: 25,
		manufacturer: "saba" ,
		category: "medium" ,
		title: "Saba Turkey With Rice" ,
		prise: 260 ,
		weight: "1,5 KG",
		img: "img/prod/сух-взросл-индейка-с-рисом-12-кг.jpg" ,
		description: "Холистик корм SABA ИНДЕЙКА С РИСОМ" ,
		descriptionFull: "Холистик корм SABA Индейка с рисом",
		value: "Saba Turkey With Rice"
	},
	{
		id: 26,
		manufacturer: "saba" ,
		category: "puppies" ,
		title: "Saba Puppy Turkey With Rice" ,
		prise: 285 ,
		weight: "1,5 KG",
		img: "img/prod/pappyindris12-kg.jpg" ,
		description: "Холистик корм SABA для щенков ИНДЕЙКА С РИСОМ",
		descriptionFull: "Холистик корм SABA для щенков Индейка с рисом",
		value: "Saba Puppy Turkey With Rice"
	},
	{
		id: 27,
		manufacturer: "saba" ,
		category: "sport" ,
		title: "Saba Grain Free Pork" ,
		prise: 840 ,
		weight: "4 KG",
		img: "img/prod/сух-без-зерна-кабан-с-клюквой-12-кг.jpg" ,
		description: "Беззерновой КОРМ SABA с мясом кабана и клюквой для всех пород",
		descriptionFull: "Беззерновой корм SABA с мясом кабана и клюквой для всех пород",
		value: "Saba Grain Free Pork"
	},

	];

/*-----------------Шаблонизатор--------------------- */

	function filler (root, temp, s){
		s.forEach( function fill (item){
			var body = $(tempCard.html());
			body.find('.prod__card_title').text(item.title);
			body.find('.prod__card_prise').text(item.prise + " UAH");
			body.find('.prod__card_img').attr('src', item.img);
			body.find('.prod__card_description').text(item.description);
			body.find('.prod__card_description_full').text(item.descriptionFull);
			body.addClass('id_' + item.id 
								+ ' all_manuf all_categ active_manuf ' 
								+ item.manufacturer 
								+ '_manuf ' 
								+ item.category 
								+ '_categ');
			body.attr("data-id", item.id);
			root.append(body);
		});
	};

	filler(prodCard, tempCard, productsSource);


/*--------- Выбор анимации (Animation select)----------- */

			var anim 
        	var elem 
        	var speed 

        	function hideElements (elem, anim, speed) {
        		var speed = $('#anim_speed_selection').prop('value');
        		var anim = $('#anim_type_selection').prop('value');
        		if (anim =='slide'){
        			$(elem).slideUp(speed);
        		}
        		else if (anim =='hide'){
        			$(elem).hide(speed);
        		}
        		else {
        			$(elem).fadeOut(speed);
        		}	
        	}

        	function showElements (elem, anim, speed) {
        		
        		var speed = $('#anim_speed_selection').prop('value');
        		var anim = $('#anim_type_selection').prop('value');
        		if (anim =='slide'){
        			$(elem).slideDown(speed);
        		}	
        		else if (anim =='hide'){
		          	$(elem).show(speed);
		        }
        		else {
        			$(elem).fadeIn(speed);
		        }
        	}

/*-----------------Фильтр по производителю (Manufacturer Filter)--------------------- */

	$(function () {
		var newSelect = '';
		$('.content_filter_main ul li a').click(function(){
			elem = $('.content_body div');

			hideElements (elem, anim, speed);
			$('.content_filter_main ul li a').removeClass('current_manuf');
			$(this).addClass('current_manuf');

			$('.content_body div').removeClass('active_manuf');

			newSelect = $(this).attr('rel');
			filterTemp = newSelect;

			elem = $('.content_body div:not(.'+ newSelect +')');
			hideElements (elem, anim, speed)
			elem = $('.' + newSelect).addClass('active_manuf');
			showElements (elem, anim, speed)


			showElements (elem, anim, speed);
			return false;
		});
	});

	/*-----------------Фильтр по категориям (Category filter)--------------------- */

	$(function () {
		var newSelect = '';

		$('.side__filter ul li a').click(function(){
			$('.side__filter ul li a').removeClass('current_categ');
			$(this).addClass('current_categ');

			newSelect = $(this).attr('rel');
			elem = $('.active_manuf');

			showElements (elem, anim, speed);
			$('.active_manuf:not(.'+ newSelect +')').css('display', 'none');

			return false; 
		});
	});

	/*-----------------Показать сервисное меню (Show servise menu)--------------------- */

	$('.fa').click(function(){
		$('.service__menu_items').slideToggle('slow');
	});

	/*-----------------Показать кнопку удаления товара (Show del btn)-----*/

	$('#del_btn_activation').on( 'click', function () {
		$('.del__button_card').slideToggle('slow');
	});

	/*-----------------POPUP карточка товара --------------------- */

	$('#content_body').on( 'click', ".prod__card_img", function () {

		var choise = $(this).parent('div');
		var goodId = choise.attr('data-id');
		var goodSrc = productsSource[goodId];
		var popUp = $('.pop__up_wrapper');

		document.body.style.overflow = 'hidden';
		$('.popup_bg').addClass('close_active_pop').fadeTo(300, 1);
		$('.close__button_card ').addClass('close_active_pop');

		var template = $('.pop__up_temp').html();
		
		if (choise.hasClass('just_added')) {
				var thisImg = choise.find('img').attr('src');
				popUp.find('.pop__up_img').attr('src', thisImg);
		} else {
				popUp.find('.pop__up_img').attr('src', goodSrc.img);
		};

		popUp.find('.pop_up_title').text(goodSrc.title);
		popUp.find('.pop__up_description').text(goodSrc.descriptionFull);
		popUp.find('.pop__up_value').text(goodSrc.weight);
		popUp.find('.pop__up_price').text(goodSrc.prise + " UAH");
		popUp.attr('data-id', goodId);
		$('body').append(popUp);

		popUp.css('display', 'flex');

		$('.close_active_pop').on('click', function(e) {
			e.preventDefault();
			$('.popup_bg').animate({opacity:'hide'}, 300);
			document.body.style.overflow = '';
			$('.pop__up_wrapper').css('display', 'none');
		});
	});
	
	/*----------------- Удаление карточки (Dell card)--------------------- */

	$('#content_body').on( 'click', '.del__button_card', function (e) {
		
		event.stopPropagation();
		var card = $(this).parent();
		var cardId = card.attr('data-id');

		delete productsSource[cardId];

		card.hide('slow');
		setTimeout(function () {
			card.remove();
		}, 1000);
		getDragable();
		return false;
	});

	/*----------------- Добавление товара (Add goods)--------------------- */
	
	$('#add_card_btn').click( function() {
		$('.popup_bg').fadeTo(500, 1);
		$('.addCard__form').fadeIn(500);
		document.body.style.overflow = 'hidden';
	});

	$('#form_submit_btn').click( function (e) {
		var file = $('.addCard__form').find('[type="file"]')[0].files[0];
		e.stopPropagation();

		var temp = {};
		var priseParse = $('#form_prise').val();

		temp.id = productsSource.length;
		temp.manufacturer = $('#form_manufacturer').val();
		temp.category = $('#form_category').val();
		temp.title = $('#form_title').val();
		temp.prise = parseInt(priseParse);
		temp.weight = $('#form_value').val() + ' KG';
		temp.description = $('#form_description').val();
		temp.description = $('#form_descriptionFull').val();
		temp.descriptionFull = $('#form_descriptionFull').val();
		temp.value = $('#form_title').val();

		productsSource.push(temp);

		$('.content_body div').remove();

		filler(prodCard, tempCard, productsSource);

		var reader = new FileReader();
			reader.onload = function (e) {
			$('body').find('.content_body :last-child > img' ).attr("src", e.target.result);    
			};
			if(file) 
			reader.readAsDataURL(file);

		$('body').find('.content_body :last-child').addClass('just_added');
		$('.content_filter_main ul li a').removeClass('current_manuf');
		$('[rel="all_manuf"]').addClass('current_manuf');
		$('.addCard__form').animate({opacity:'hide'}, 500);
		$('.popup_bg').animate({opacity:'hide'}, 500);

		document.body.style.overflow = '';

		getDragable();

	});
		$('.close_add_card_pop').on('click', function(e) {
			e.preventDefault();
			$('.addCard__form').animate({opacity:'hide'}, 500);
			$('.popup_bg').animate({opacity:'hide'}, 500);
			document.body.style.overflow = '';
		});

		$('.popup_bg').on('click', function(){
			$('.close_add_card_pop').trigger('click');
		})

	/*----------------- Слайдер (Slider)--------------------- */

	var slideNow = 1;
	var slideCount = $('#slidewrapper').children().length;
	var slideInterval = 5000;
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

	    $('#nav-btns').on( 'click', '.slide-nav-btn', function() {
	        navBtnId = $(this).index();

	        if (navBtnId + 1 != slideNow) {
	            translateWidth = -$('#viewport').width() * (navBtnId);
	            $('#slidewrapper').css({
	                'transform': 'translate(' + translateWidth + 'px, 0)',
	                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
	                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
	            });
	            slideNow = navBtnId + 1;
	            $('.slide-nav-current').removeClass('slide-nav-current');
	        	$('#nav-btns').children().eq(slideNow - 1).addClass('slide-nav-current');
	        };
	    });
	});


	function nextSlide() {
	    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
	        $('#slidewrapper').css('transform', 'translate(0, 0)');
	        slideNow = 1;
	        $('.slide-nav-current').removeClass('slide-nav-current');
	        $('#nav-btns').children().eq(slideNow - 1).addClass('slide-nav-current');
	    } else {
	        translateWidth = -$('#viewport').width() * (slideNow);
	        $('.slide-nav-current').removeClass('slide-nav-current');
	        $('#nav-btns').children().eq(slideNow).addClass('slide-nav-current');
	        $('#slidewrapper').css({
	            'transform': 'translate(' + translateWidth + 'px, 0)',
	            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
	            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
	        });
	        slideNow++;
	    };
	};

	function prevSlide() {
	    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
	        translateWidth = -$('#viewport').width() * (slideCount - 1);
	        $('#slidewrapper').css({
	            'transform': 'translate(' + translateWidth + 'px, 0)',
	            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
	            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
	        });
	        slideNow = slideCount;
	        $('.slide-nav-current').removeClass('slide-nav-current');
	        $('#nav-btns').children().eq(slideNow - 1).addClass('slide-nav-current');

	    } else {
	        translateWidth = -$('#viewport').width() * (slideNow - 2);
	        $('#slidewrapper').css({
	            'transform': 'translate(' + translateWidth + 'px, 0)',
	            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
	            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
	        });
	        slideNow--;
	        $('.slide-nav-current').removeClass('slide-nav-current');
	        $('#nav-btns').children().eq(slideNow - 1).addClass('slide-nav-current');
	    };
	};

/*----------------- Добавление слайда (Add slide)--------------------- */

	$('#add_slide_btn').on('click', function () {

		document.body.style.overflow = 'hidden';
		$('.popup_bg').fadeTo(500, 1);
		$('.adding__slide_form').fadeIn(500);
	});

		$('#adding__slide_submit').on('click', function (e) {
			event.stopPropagation();
			var file = $('.adding__slide_form').find('[type="file"]')[0].files[0];
			$('#slidewrapper').append('<li class="slide"><img src="" class="slide-img"></li>');

			var reader = new FileReader();
			reader.onload = function (e) {      
				$('#slidewrapper > li:last-child > img').attr("src", e.target.result);
			};

		    if(file) {
		    	reader.readAsDataURL(file);
			};
			$('#nav-btns').append('<li class="slide-nav-btn"></li>');

			slideCount ++;

			$('#slidewrapper').css('width', '' + 100 * slideCount + '%');
			$('#slidewrapper li').css('width', + 100 / slideCount + '%');
			$('.popup_bg').css('display', 'none');
			$('.adding__slide_form').css('display', 'none');

			document.body.style.overflow = '';
		});

		$('.close_add_slide_pop').on('click', function(e) {
				e.preventDefault();
				$('.adding__slide_form').animate({opacity:'hide'}, 500);
				$('.popup_bg').animate({opacity:'hide'}, 500);
				document.body.style.overflow = '';
		});
		
		$('.popup_bg').on('click', function(){
		$('.close_add_slide_pop').trigger('click');
	});

/*----------------- Корзина--------------------- */

	var totalPrise = 0;
	var totalCount = 0;

	function getDragable(){
	  $('.content_body div').draggable({
		helper: 'clone',
		revert: 'invalid',
		opacity: 0.8,
		containment: $('body'),
		drag: function(event, ui){
			if (!$('.cart_modal').hasClass('cart_active')){
				$('.cart_wrapper').trigger('click');
			}}
		})
	};
	getDragable();

	$('.cart_modal').droppable({
		activeClass: 'cart_active_class_rdagg',
		accept: '.prod__card',
		drop: function (event, ui) {
			$('.cart_title_empty').css('display', 'none');
			var clone = ui.draggable.clone();
			var goodId = clone.attr('data-id');
			var goodproductsSource = productsSource[goodId];

			$('.cart_modal > ol').append('<li></li>')
			$('.cart_modal > ol > li').last()
			.append(goodproductsSource.title + '</br>' + goodproductsSource.prise + ' UAH')
			.append($('#remove_From_Chart').clone().css('display', 'block'))
			.attr('data-cart-id', goodId)
			.addClass('good_in_cart')

			totalPrise += goodproductsSource.prise;
			totalCount++

			$('.cart_counter').text(totalCount);
			$('#totalPrise').text(totalPrise);
		}
	});

/*----------------- Удаление товара из корзины--------------------- */

	$('.cart_modal').on('click', '#remove_From_Chart', function(event){
		var deletedGoodId = $(this).closest('li').attr('data-cart-id');

		totalPrise -= productsSource[deletedGoodId].prise;
		totalCount--;
		$('.cart_counter').text(totalCount);
		$('#totalPrise').text(totalPrise);
		$(this).closest('li').remove();

		if (!$("li").is(".good_in_cart")) {
			$('.cart_title_empty').css('display', 'block');
		}
	});

/*----------------- Показать\спрятать корзину--------------------- */

	$('.cart_wrapper').on('click', function () {
		if ($('.cart_modal').hasClass('cart_active')) {
			$('.cart_modal').fadeTo(500, 0)
							.removeClass('cart_active')
							setTimeout(function(){
							$('.cart_modal').css('display', 'none')}, 500)
		} 
		else {
		$('.cart_modal').fadeTo(500, 1).addClass('cart_active');
		};
	});

	$('.cart_modal > .close__button_card').on( 'click', function (e) {
		event.preventDefault();
		$('.cart_modal').fadeTo(500, 0).removeClass('cart_active');
		setTimeout(function(){
			$('.cart_modal').css('display', 'none')}, 500);		
	});

/*----------------- Добавление товара в корзину по кнопке --------------------- */

	$('#content_body').on('click', '.prod__card_addchart', function addGoodToChart (e) {
		event.preventDefault();
		$('.cart_title_empty').css('display', 'none');
		var choise = $(this.closest('div'));
		var goodId = choise.attr('data-id');
		var goodproductsSource = productsSource[goodId];
		
		$('.cart_modal > ol').append('<li></li>')
		$('.cart_modal > ol > li').last()
		.append(goodproductsSource.title + '</br>' + goodproductsSource.prise + ' UAH')
		.append($('#remove_From_Chart').clone().css('display', 'block'))
		.attr('data-cart-id', goodId)
		.addClass('good_in_cart')

		totalPrise += goodproductsSource.prise;
		totalCount++

		$('.cart_counter').text(totalCount);
		$('#totalPrise').text(totalPrise);
	});

/*----------------- Добавление товара в корзину по кнопке из попапа --------------------- */

	$('.pop__up_wrapper').on('click', '.prod__card_addchart', function (e) {
		event.preventDefault();
		$('.cart_title_empty').css('display', 'none');

		var choise = $('.pop__up_wrapper');
		var goodId = choise.attr('data-id');
		var goodproductsSource = productsSource[goodId];
		
		$('.cart_modal > ol').append('<li></li>')
		$('.cart_modal > ol > li').last()
		.append(goodproductsSource.title + '</br>' + goodproductsSource.prise + ' UAH')
		.append($('#remove_From_Chart').clone().css('display', 'block'))
		.attr('data-cart-id', goodId)
		.addClass('good_in_cart')

		totalPrise += goodproductsSource.prise;
		totalCount++

		$('.cart_counter').text(totalCount);
		$('#totalPrise').text(totalPrise);
	});

/*----------------- Поиск--------------------- */

	
	$('#autocomplete_search').on('focus', function(){
		$(this).attr('placeholder', '');
	});
	$('#autocomplete_search').on('blur', function(){
		$(this).attr('placeholder', 'Search...');
		$(this).val('')
	});
	$('#autocomplete_search').autocomplete({
		minLength: 0,
		source: productsSource,
		focus: function( event, ui ) {
			$( "#autocomplete_search" ).val( ui.item.title );
			return false;
		},
		select: function( event, ui ) {
			$('[data-id='+ui.item.id+'] > img').trigger('click');
		}
	});
});