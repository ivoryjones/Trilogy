(function () {
  
  'use strict';
  
  var pop_up_video = $('#pop_up_video'),
    pop_up_video_iframe = $('#pop_up_video_iframe'),
    close_pop_up_video_id = $('#pop_up_video_bg'),
  	open_pop_up_video_id = $('#open_pop_up_video'),
  	mobile_open_pop_up_video_id = $('#mobile_open_pop_up_video');

  	// Pop-up Video
  	
  	var close_pop_up_video = function(event){
  		event.preventDefault();
  		pop_up_video_iframe.attr('src', '');
  		pop_up_video.css('display', 'none');
  	};
  	close_pop_up_video_id.on('click', close_pop_up_video);
  	
  	
  	var open_pop_up_video = function(event){
  		event.preventDefault();
  		pop_up_video_iframe.attr('src', 'carolina.mp4');
  		pop_up_video.css('display', 'block');
  	};
  	
    open_pop_up_video_id.on('click', open_pop_up_video);    
    mobile_open_pop_up_video_id.on('click', open_pop_up_video);
                                   
}());

(function () {
  
  'use strict';
  
  var pop_up_video_chris = $('#pop_up_video_chris'),
    pop_up_video_iframe_chris = $('#pop_up_video_iframe_chris'),
    close_pop_up_video_id_chris = $('#pop_up_video_bg_chris'),
  	open_pop_up_video_id_chris = $('#open_pop_up_video_chris'),
  	mobile_open_pop_up_video_id_chris = $('#mobile_open_pop_up_video_chris');

  	// Pop-up Video
  	
  	var close_pop_up_video_chris = function(event){
  		event.preventDefault();
  		pop_up_video_iframe_chris.attr('src', '');
  		pop_up_video_chris.css('display', 'none');
  	};
  	close_pop_up_video_id_chris.on('click', close_pop_up_video_chris);
  	
  	
  	var open_pop_up_video_chris = function(event){
  		event.preventDefault();
  		pop_up_video_iframe_chris.attr('src', 'chris.mp4');
  		pop_up_video_chris.css('display', 'block');
  	};
  	
    open_pop_up_video_id_chris.on('click', open_pop_up_video_chris);    
    mobile_open_pop_up_video_id_chris.on('click', open_pop_up_video_chris);
                                   
}());