
 
            $.ajax({
                    type: "GET",
                    url: "http://api.tumblr.com/v2/blog/teaganjzg.tumblr.com/posts?api_key=usc3Q0OzQ5sbRGyXF7pGR7ZknDhotKxrqakhE9jIN0284LoN1J&limit=3", 
                    dataType: "JSONP",
                    success: function(posts){
                        
                        var postings = posts.response.posts;
                        var title = '';
                        var body = '';
                        var tags = '';
                        var date = '';
                        var url = '';
                        
                        for(var i in postings)
                            {
                                var p = postings[i];
                                tags = '';
                                date = p.date;
                                url = p.post_url;
                                
                                for(var t = 0 ; p.tags[t] != null && t < 3; t++)
                                    {
                                        tags = tags + '#' +p.tags[t] + ' ';
                                    }
                                
                                if(p.type == "photo")
                                    {
                                        title = p.caption;
                                        body = p.photos[0].alt_sizes[0].url;
                                        //alert(body);
                                        $(".post-text").eq(i).display = "none";
                                        $(".post-photo").eq(i).attr('src', body);

                                    }
                                else if(p.type == "quote")
                                        {
                                            title = '- '+ p.source;
                                            body = '"'+p.text+'"';
                                            $(".post-text").eq(i).html(body);
                                        }
                                else{
                                        title = p.title;
                                        body = p.body;
                                        
                                        $(".post-text").eq(i).html(body);
                                        $(".post-photo").eq(i).display = "none";
                                }
                                $(".post-date").eq(i).html(date);
                                $(".post-title").eq(i).html(title);
                                $(".post-tags").eq(i).html(tags);
                                $(".post-link").eq(i).attr("href", url);
                                
                            }
                        
                        
                       }
    
                });

$(document).ready(function() {
    /* For the sticky navigation */
    
   
    $(".section-about").waypoint(function(direction) {
        
       
        if (direction == "down") {
           
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    },                                 
    {
      offset: '60px;'
    }
    );
    
    
   
    
    
    
    /* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    
    /* Animations on scroll */
   $('.js--wp-1').addClass("animated fadeInRightBig");
    
    $('.js--wp-2').addClass("animated fadeInRightBig");
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    
    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
       
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon');
        
        nav.slideToggle(200);
        
        if (icon.attr('name') == 'menu') {
            
            icon.attr('name','close');
        } else {
            
            icon.attr('name','menu');
        }        
    });
    
    
    
    
});



/*contact me email sending*/

 window.onload = function() {
            
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                
                event.preventDefault();
                
                emailjs.sendForm('brandt_s_gmail', 'template_aysKg84M', this) 
                    .then(function(response) {
                       console.log('SUCCESS!', response.status, response.text);
                     alert("Your message is sucessfully sent");
                    window.location.reload();
                    }, function(error) {
                       console.log('FAILED...', error);
                     window.location.reload();
                    });
                
               
                    
            });
        }




