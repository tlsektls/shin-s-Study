$(function () {

	var swiper = new Swiper(".jsonSwiper", {
		effect: "cube",
		grabCursor: true,
		cubeEffect: {
			shadow: true,
			slideShadows: true,
			shadowOffset: 20,
			shadowScale: 0.94,
		},
		pagination: {
			el: ".swiper-pagination",
		},
	});
  if (swiper.cancelable) swiper.preventDefault();

	$.ajax({
    url: "/html/js/json.json",
    dataType: "json",
    success : function(data){
      if(data.length> 0) {
        for(let i in data) {
            // json 파일 안 가져올 요소들을 선언
          let tags = data[i].tags;
          let text = data[i].text;
          let url = data[i].url;
          console.log(text);
          $(".wrap-json .wrap-swiper .swiper-wrapper .swiper-slide").eq(i).append("<img src="+ data[i].url + " > <div><h6>" + data[i].tags + "</h6>" + "<span>" + data[i].text + "</span></div>"); 
        }
      }
    }
  });


});