//Google Form URL Post
$(function() {
  $('#submit').on('click', function() {

    // NAME
    var name = $('#demo_name').val() || 'NA';
    // EMAIL
    var email = $('#demo_mail').val() || 'NA';
    // MESSAGE
    var msg = $('#demo_textarea').val() || 'NA';
    
    // post
    var data = {
      'entry.201935047': name,
      'entry.958683433': email,
      'entry.686514542': msg
    };
    $.ajax({
      type: 'POST',
      url: 'https://docs.google.com/forms/u/2/d/e/1FAIpQLSfzI5LocgAdDtzJOGzVn7FpdiaYGNacl1JrBT0u0ixzMKYk1Q/formResponse',
      data: data,
      contentType: 'application/json',
      dataType: 'jsonp',
      complete: function() {
        alert('Message has sent. Thanks!');
      }
    });
  });
});

// Animation Envelop
$('#submit').click(function() {
  $('.mail__letter').toggleClass('move');
  $('.mail__top').toggleClass('closed');
  $('.form__btn--invisible').toggleClass('visible');
  $('.form__btn--visible').toggleClass('invisible');
});

$('input').focus(function() {
  $(this).parent().addClass('active');
  $('input').focusout(function() {
    if($(this).val() == '') { $(this).parent().removeClass('active');
    } else { $(this).parent().addClass('active');
    }
  })
});