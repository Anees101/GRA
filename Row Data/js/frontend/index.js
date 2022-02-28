define(['jquery', 'bootstrap', 'frontend', 'form', 'template','jqprint','swiper'], function ($, undefined, Frontend, Form, Template,jqprint,swiper) {

    var Controller = {
        index: function () {

            // var mySwiper = new swiper('.swiper-container',{
            //     effect : 'coverflow',
            //     loop:true,
            //     slidesPerView: 4,
            //     centeredSlides: true,
            //     coverflowEffect: {
            //       rotate: 0,
            //       stretch: 0,
            //       depth: 0,
            //       modifier: 0,
            //       slideShadows : false
            //     },
            //     autoplay:true,//等同于以下设置
            //     /*autoplay: {
            //         delay: 3000,
            //         stopOnLastSlide: false,
            //         disableOnInteraction: true,
            //     },*/
            //     navigation: {
            //         nextEl: '.swiper-button-next',
            //         prevEl: '.swiper-button-prev',
            //     },
            //     // scrollbar: {
            //     //     el: '.swiper-scrollbar',
            //     // },
            // });

            $('#search_btn').click(function(){
                var id=$('#certid_input').val();
                url="/index/index/cert_info?&id="+id;
                $.get(url,function(result){
                  result=JSON.parse(result);
                  if (result['code']==1) {
                    console.log(result);
                    layer.msg('Search succeeded. Please check the information.');
                    var data=result['data'];
                    
                    // console.log(data['custom_number']==null);
                    if(data['custom_number'] != '' && data['custom_number'] != null){
                        $('#val1').text(data['custom_number']);
                        $('#val19').text(data['custom_number']);
                    }else{
                        $('#val1').text(data['id']);
                        $('#val19').text(data['id']);
                    }
                    $('#val2').text(data['description']);
                    $('#val3').text(data['laboratory_area']);

                    $('#val4').text(data['measurements']);
                    $('#val5').text(data['carat']+'carat');
                    $('#val6').text(data['color']);
                    $('#val7').text(data['clarity']);
                    $('#val8').text(data['cutting']);
                    $('#val9').text(data['cut']);

                    $('#val10').text(data['depth']);
                    $('#val11').text(data['table']);
                    $('#val12').text(data['crown_height_angle']);
                    $('#val13').text(data['pavilion_depth_angle']);
                    $('#val14').text(data['girdle_thickness']);
                    $('#val15').text(data['culet']);

                    $('#val16').text(data['polish']);
                    $('#val17').text(data['synmetry']);

                    $('#val18').text(data['fluorescence']);

                  }else{
                    console.log(result);
                    Layer.alert('No results, please check your numbers.');
                  }
                });
            });
        },

    };
    return Controller;
});