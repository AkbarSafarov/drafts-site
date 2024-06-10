$(function(){

    let tmenu = $('.product_panel_wr'),
        tmenuOffset = $('#text_body').offset();

    $(window).scroll(function(){
        if (($(window).scrollTop() > tmenuOffset.top)) {
            tmenu.addClass('fixed'); 
        } else {
            tmenu.removeClass('fixed');
        };
    }); 

	$('.slider_block_pr').each(function(){
	    const slider = $(this).find('.swiper');
	    const sliderId = slider.data('id');
	    const sliderClass = '.' + sliderId;
	    const arrow = slider.data('arrow');    

	    const newProductsSwiper = new Swiper(sliderClass, {
			loop: true,
			slidesPerView: 4,
            spaceBetween: 0,
			navigation: {
			    nextEl: '.swiper-' + arrow + '-next',
			    prevEl: '.swiper-' + arrow + '-prev',
			},
			breakpoints: {
                0: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                980: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
                1100: {
                  slidesPerView: 4,
                  spaceBetween: 0,
                },
            },
			lazy: true
	    });
	})

    $('.slider_game_pr').each(function(){
        const slider = $(this).find('.swiper');
        const sliderId = slider.data('id');
        const sliderClass = '.' + sliderId;
        const arrow = slider.data('arrow');    

        const newProductsSwiper = new Swiper(sliderClass, {
            loop: true,
            slidesPerView: 6,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-' + arrow + '-next',
                prevEl: '.swiper-' + arrow + '-prev',
            },
            breakpoints: {
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                560: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                980: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1100: {
                  slidesPerView: 6,
                  spaceBetween: 30,
                },
            },
            lazy: true
        });
    })
	
	var $body = $(document.body),
      	$html = $(document.documentElement);

    function formPopup($btn,$wrap){

    var closeForm = $('.formExtraWrapper .close-form'),
            formWrap = $($wrap),
            formBtn = $($btn),
            formOpened = 'opened',
            overflowHidden = 'oveflowHidden';

        closeForm.on('click', function() {
            formWrap.removeClass(formOpened);
            $html.removeClass(overflowHidden);
        });
        formBtn.on('click', function(event) {
            formWrap.addClass(formOpened);
            $html.toggleClass(overflowHidden);
            event.preventDefault();
        });

        $html.on('keyup', function(event) {
            if (formWrap.hasClass(formOpened) && event.keyCode == 27) {
                formWrap.removeClass(formOpened);
                $html.removeClass(overflowHidden);
            }
        });
        $body.on('click touchstart', function(a) {
            if ($(a.target).closest('.formExtraWrapper').length || $(a.target).closest(formBtn).length) return;
            if (formWrap.hasClass(formOpened)) {
                formWrap.removeClass(formOpened);
                $html.removeClass(overflowHidden);
            }
        });
    }

	formPopup('.form_btn','.form_popup');

    function thpopup() {
        const wrap = $('.form-popup-wrapper.th_block');

        $('.form-popup-wrapper.opened').removeClass('opened');
        wrap.addClass('opened');
        $html.removeClass('oveflowHidden');

        $('.form-popup-wrapper.th_block').find('.close-form').on('click', function() {
            wrap.removeClass('opened');
        });

        $html.on('keyup', function(event) {
            if (wrap.hasClass('opened') && event.keyCode == 27) {
                wrap.removeClass('opened');
            }
        });
    }

    var menuBtn = $('.burger'),
        menuWrapper = $('.menu_burger'),
        menuClose = $('.menuClose'),        
        openedMenu = 'opened',
        overflowHidden = 'oveflowHidden';

    menuBtn.on("click", function(event) {
        menuWrapper.toggleClass(openedMenu);
        menuBtn.toggleClass(openedMenu);
        $html.toggleClass(overflowHidden);
        $html.toggleClass('open_menu');
    });
    menuClose.on("click", function(event) {
        menuWrapper.removeClass(openedMenu);
        menuBtn.removeClass(openedMenu);
        $html.removeClass(overflowHidden);
        $html.removeClass('open_menu');
    });

    $(document).on('click touchstart', function(e){
        if( $(e.target).closest(menuBtn).length || $(e.target).closest(menuWrapper).length) 
          return;
        if (menuBtn.hasClass(openedMenu)){
            menuWrapper.removeClass(openedMenu);
            menuBtn.removeClass(openedMenu);
            $html.removeClass(overflowHidden);
            $html.removeClass('open_menu');
        }
    });

	$('.slider_block_bg').each(function(){
	    const slider = $(this).find('.swiper');
	    const sliderId = slider.data('id');
	    const sliderClass = '.' + sliderId;
	    const arrow = slider.data('arrow');    

	    const newProductsSwiper = new Swiper(sliderClass, {
			slidesPerView: "auto",
            spaceBetween: 28,
	      	navigation: {
	            nextEl: '.swiper-' + arrow + '-next',
	            prevEl: '.swiper-' + arrow + '-prev',
	          },
	      	lazy: true,
            effect: "fade"
	    });
  	})	


    $('.works_gall_wr').each(function(){
        const slider = $(this).find('.swiper');
        const sliderId = slider.data('id');
        const sliderClass = '.' + sliderId;
        const arrow = slider.data('arrow');    

        const newProductsSwiper = new Swiper(sliderClass, {
            slidesPerView: "auto",
            spaceBetween: 0,
            lazy: true,
            scrollbar: {
                el: ".swiper-scrollbar",
                hide: false,
            },
        });
    })  


    lightGallery(document.getElementById('mySwiper_gal'), {
        animateThumb: false,
        zoomFromOrigin: false,
        allowMediaOverlap: true,
        toggleThumb: false,
        selector: 'a'
    });

    lightGallery(document.querySelector('.text_page_content'), {
        animateThumb: false,
        zoomFromOrigin: false,
        allowMediaOverlap: true,
        toggleThumb: false,
        selector: 'a.gall_image'
    });

    let totalSumm = 0;

    $('.configurator_page .add_c').on('click', function(){
        const parent = $(this).parents('.c_prod');
        const price = +parent.find('.price span').text().replace('.', '');
        const nameParent = $('.c_left .c_left_title.active > span').text() + ':';
        const nameproduct = parent.find('.name').text();
        const listLength = $('.c_list_prod .item').length;

        let itemFound = false;

        if(listLength > 0) {
            $('.c_list_prod .item').each(function() {
                const itemName = $(this).find('.name').text();

                if(itemName === nameParent) {
                    $(this).append(`<div class="prod">${nameproduct}</div>`);
                    itemFound = true;
                    return false; 
                }
            });
        }

        if (!itemFound) {
            $('.c_list_prod').append(`
                <div class="item">
                    <div class="name">${nameParent}</div>
                    <div class="prod">${nameproduct}</div>
                </div>
            `);
        }

        totalSumm +=price;

        const formattedTotalSumm = totalSumm.toLocaleString('de-DE', { minimumFractionDigits: 0 });

        $('.c_total .total span').text(formattedTotalSumm);
    })
});

document.addEventListener('DOMContentLoaded', function() {
    function tabsBlock() {
        const tabBlocks = document.querySelectorAll('.configurator_page');
        const tabActive = 'active';
        
        if(!tabBlocks.length) return;

        tabBlocks.forEach(function(tabBlock) {
            const tabTitles = tabBlock.querySelectorAll('.c_left .c_left_title');
            const tabBodies = tabBlock.querySelectorAll('.c_center .c_center_body');

            tabTitles.forEach(function(tabTitle, index) {
                tabTitle.addEventListener('click', function(e) {
                    e.preventDefault();
                    tabTitles.forEach(function(t) { t.classList.remove(tabActive); });
                    tabTitle.classList.add(tabActive);

                    tabBodies.forEach(function(b) { b.classList.remove(tabActive); });
                    tabBodies[index].classList.add(tabActive);
                });
            });

            function moveContentForSmallScreens() {
                if (window.innerWidth <= 980) {
                    tabTitles.forEach(function(tabTitle, index) {
                        const tabBody = tabBodies[index];
                        if (!tabTitle.querySelector('.c_center_body')) {
                            tabTitle.appendChild(tabBody);
                        }
                    });
                } else {
                    const rightContainer = tabBlock.querySelector('.c_center');
                    tabBodies.forEach(function(tabBody) {
                        if (rightContainer && !rightContainer.contains(tabBody)) {
                            rightContainer.appendChild(tabBody);
                        }
                    });
                }
            }

            window.addEventListener('resize', moveContentForSmallScreens);
            moveContentForSmallScreens();
        });
    }

    tabsBlock();
});


