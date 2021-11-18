$( function() {
    $( ".datepicker" ).datepicker();
  } );

const items = document.querySelector('.list');

document.querySelectorAll('img[data-view]').forEach(item => {
    item.addEventListener('click', () => {
        const view = item.dataset.view;
        items.dataset.temp = view;
    });
});