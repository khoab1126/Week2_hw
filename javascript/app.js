$(document).ready(function() {
  $('form').submit(function() {
   if ($('#inputBox').val() !== '') {
            let text = $('#inputBox').val();
            var newLiText = $('<li>' + text + '</li>');
          newLiText.on('click', function() {
                $(this).remove(); // Attach the event handler *before* adding the element
            });
            $('ul').prepend(newLiText); // To put the new task at the top of the list
            $('#inputBox').val('');
            return false; // So the change persists
        };
    });

    $('ul').sortable();
  });

