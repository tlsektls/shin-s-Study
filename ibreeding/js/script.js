$(document).ready(function() {
  // ****************  swipers
	const swiper1 = new Swiper(".swiper", {
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: '.swiper-pagination',
		},
		loop: true,
		slidesPerView: 3,
		spaceBetween: 10,
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			768: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			1200: {
				slidesPerView: 1,
				spaceBetween: 10
			},
		}
	});

	// AOS
	AOS.init({
    // disable on internet explorer
    // disable:  function msieversion() {
    //   return !!(window.navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.match(/Trident.*rv\:11\./))
    //   }

  })


  // our service
    function sticky() {
      if (window.innerWidth >= 1200) {
        const controller = new ScrollMagic.Controller();
        const serviceHeight = document.querySelector('.service');

        function stickyScroll() {
          let _scrollTop = window.scrollY || document.documentElement.scrollTop;
  
          document.querySelector('.service .col-left').style.height = fixingHieght;
  
          if (_scrollTop >= serviceContainer.offsetTop) {
            document
              .querySelector('.service .col-left')
              .classList.remove('addsticky');
          } else {
            document
              .querySelector('.service .col-left')
              .classList.add('addsticky');
          }
        }
    }
  }




    // function actualResizeHandler() {
    //   if (window.innerWidth >= 1200) {
        // const controller = new ScrollMagic.Controller();
  
        // const serviceContainer = document.querySelector('.service');
        // let fixingHieght = document.querySelector('.service .col-right').clientHeight;
  
        // let ticking = false;
  
        // function stickyServiceTitleOnScroll() {
        //   let _scrollTop = window.scrollY || document.documentElement.scrollTop;
  
        //   document.querySelector(
        //     '.service .col-left',
        //   ).style.height = fixingHieght;
  
        //   if (_scrollTop >= serviceContainer.offsetTop) {
        //     document
        //       .querySelector('.-service .col-left .col-inner')
        //       .classList.remove('top-status');
        //   } else {
        //     document
        //       .querySelector('.service .col-left .col-inner')
        //       .classList.add('top-status');
        //   }
        // }
  
        // window.addEventListener('scroll', () => {
        //   // last_known_scroll_position = window.scrollY;
  
        //   if (!ticking) {
        //     window.requestAnimationFrame(() => {
        //       stickyServiceTitleOnScroll();
        //       // stickySectionOnScroll(last_known_scroll_position);
        //       ticking = false;
        //     });
  
        //     ticking = true;
        //   }
        // });
  
        // new ScrollMagic.Scene({
        //   triggerElement: serviceContainer,
        //   triggerHook: 0,
        //   duration: fixingHieght - 300,
        //   reverse: true,
        // })
        //   .setClassToggle(serviceContainer, 'custom-sticky')
        //   .addTo(controller);
  //     }
    // }
 //  })();

});