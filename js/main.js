$(function(){
    $('a.read_more').click(function(event){
        event.preventDefault();
        $this.parents('.synopsis').find('.more_text').show();
    });
          });
$("#carousel").carousel();
