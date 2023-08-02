// script.js
$(document).ready(function() {
    $('.checkbox').on('click', function() {
        const listItem = $(this).parent('li');
        if ($(this).prop('checked')) {
            listItem.addClass('true');
        } else {
            listItem.removeClass('true');
        }
    });
});
