$(document).ready(function() {
  var inputVal = ''
  dateFunction()
  function dateFunction() {
    $.get(
      '/api/homepage/card_list.php',
      {
        search: inputVal
      },
      function(data) {
        var indexCont = JSON.parse(data)
        rebderCard(indexCont)
      }
    )
  }

  $('#search').keydown(function(e) {
    if (e.keyCode == 13) {
      inputVal = $('#search').val()
      console.log(inputVal)
      dateFunction()
    }
  })

  function rebderCard(cardList) {
    console.log(cardList)
    var cardUl = $('.content')
    cardUl.empty()
    $('#movieTmpl')
      .tmpl(cardList)
      .appendTo(cardUl)

    // siblings
    // cardUl.empty()
    // var cardCont = ''
    // for (var i = 0; i < cardList.length; i++) {
    //   var bodyCard = cardList[i]
    //   cardCont +=
    //     "<li><img src='" +
    //     bodyCard.thumb +
    //     "' alt=''>" +
    //     "<div class='content-li-right'>" +
    //     "<div class='li-right-top'>" +
    //     "<div class='ye-span'></div>" +
    //     "<p><a href='cardDetail.html?itemid=" +
    //     bodyCard.itemid +
    //     "'>" +
    //     bodyCard.title +
    //     '</a></p></div> ' +
    //     "<p><a href='cardDetail.html?itemid=" +
    //     bodyCard.itemid +
    //     "'>" +
    //     bodyCard.introduce +
    //     '</a></p>' +
    //     '</div></li>'
    // }
    // cardUl.prepend(cardCont)
  }
})
