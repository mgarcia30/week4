// This code runs when the page loads
$(function() {

  $(".list").on("click", function(event) {
    event.preventDefault()
    var listelement = $(this)
    console.log(listelement)
    //added below code, added parent to remove div
    listelement.parent().fadeOut()
  })

})
