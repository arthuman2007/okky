// This is a manifest file that'll be compiled into application.js.
//
// Any JavaScript file within this directory can be referenced here using a relative path.
//
// You're free to add application-wide JavaScript to this file, but it's generally better 
// to create separate JavaScript files as needed.
//
//= require jquery
//= require bootstrap
//= require libs/bootstrap-tagsinput
//= require libs/summernote
//= require libs/summernote-ko-KR
//= require libs/spin
//= require libs/jquery.spin
//= require libs/placeholder_polyfill.jquery
//= require libs/mustache
//= require libs/jquery.timeago
//= require libs/jquery.timeago-ko-KR
//= require apps/utils
//= require_self


if (typeof jQuery !== 'undefined') {
	(function($) {
        $('.timeago').timeago();

        $('[data-toggle="tooltip"]').tooltip();

        $.fn.spin.presets = {
            tiny: { lines: 8, length: 1, width: 2, radius: 4, color:'#56595c' },
            small: { lines: 11, length: 0, width: 3, radius: 10, shadow: true, hwaccel: true, color:'#56595c' },
            large: { lines: 10, length: 8, width: 4, radius: 8, color:'#56595c' }
        };

        $.ajaxSetup({
            statusCode: {
                401: function() {
                    location.href = contextPath+'/login/auth?redirectUrl='+encodedURL;
                }
            }
        });
        
        $('.sidebar-header').click(function() {
            if($('.sidebar').is('.open')) {
                $('.sidebar').removeClass('open');
                $('.sidebar-category-nav').removeClass('open');
            } else {
                $('.sidebar').addClass('open');
                $('.sidebar-category-nav').addClass('open');
            }
        });
        
        $('html, body').click(function(e) {
            if(!$(e.target).is('.sidebar-header  *, .nav-main *, .sidebar-category-nav *, #search-google-form *')) {
                $('.sidebar').removeClass('open');
                $('.sidebar-category-nav').removeClass('open');
            }
            
            if(!$(e.target).is('#search-google *, #search-google-popover *')) {
                $('#search-google').popover('hide');
            }
        });

        $.extend($.summernote.options, {toolbar :  [
            ['style', ['style']],
            ['font', ['bold', 'italic', 'underline', 'strikethrough', 'clear']],
            ['color', ['color']],
            ['para', ['ul', 'ol']],
            ['table', ['table']],
            ['insert', ['codeBlock', 'link', 'picture', 'video', 'hr']],
            ['view', ['codeview']],
            ['help', ['help']]
        ]});

	})(jQuery);
}