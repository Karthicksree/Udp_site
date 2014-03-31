
ready = function(){
$(document).ready(function(){

 if($("#contact_name").length > 0) {
    var contact_name = new LiveValidation('contact_name', { onlyOnBlur: true });
    contact_name.add( Validate.Presence );
  }


  if($("#contact_email").length > 0) {
    var contact_email = new LiveValidation('contact_email', { onlyOnBlur: true });
    contact_email.add( Validate.Presence );
    contact_email.add( Validate.Email );
  }

  if($("#contact_message").length > 0) {
    var contact_message = new LiveValidation('contact_message', { onlyOnBlur: true });
    contact_message.add( Validate.Presence );
    contact_message.add( Validate.Length, { minimum: 100, maximum: 500 } );
  }

  });

};

$(document).ready(ready);
$(document).on('page:load', ready);


