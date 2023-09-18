/*for (let i = 0; i < 3; i++){

    $('.tab-button').eq(i).on('click', function() {
      tab(i)
    })
  
  };
*/

$('.list').click(function(e) {

    tab(e.target.dataset.id)

})

  function tab(num) {
      $('.tab-button').removeClass('orange');
      $('.tab-button').eq(num).addClass('orange');
      $('.tab-content').removeClass('show');
      $('.tab-content').eq(num).addClass('show');
  }