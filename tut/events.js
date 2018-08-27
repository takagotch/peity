$('select').change(function(){
  var text = $(this).val() + '/' + 5

  $(this)
    .siblings('span.graph')
    .text(text)
    .change()

  $('#notice').text('Chart updated: ' + text)
}).change()

$('span.graph').peity('pie')

