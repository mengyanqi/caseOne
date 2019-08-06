$(document).ready(function() {
  $('input').focus(function() {
    $(this).addClass('border')
  })

  var inputVal = ''
  obtain()
  function obtain() {
    $.get(
      '/api/homepage/case_list.php',
      {
        search: inputVal
      },
      function(data) {
        var indexCont = JSON.parse(data)
        // console.log(indexCont);
        renderCaseList(indexCont.case_list)
      }
    )
  }

  $('#successInput').keydown(function(e) {
    if (e.keyCode == 13) {
      inputVal = $('#successInput').val()
      console.log(inputVal)
      obtain()
    }
  })
  //成功案例

  function renderCaseList(success) {
    $('.success-cont').empty()
    var caseCont =
      "<div class='success-cont-glory'>" +
      "<p><img src='img/success_case_logo.png' alt=''>2019十大品牌荣誉榜单</p>" +
      "<div class='cuccess-cont-glory-footer'>" +
      "<div class='ccgf-font'>" +
      '<p>中国${catname}</p>' +
      '<p>${addtime}</p>' +
      '</div>' +
      "<div class='ccgf-right'>" +
      "<a href='caseDate.html?sid=${sid}'><button>去看看</button></a>" +
      '</div></div ></div >'
    $.template('myContent', caseCont)
    $.tmpl('myContent', success).appendTo('.success-cont')

    //   var caseCont = ''
    //   for (var i = 0; i < success.length; i++) {
    //     var casData = success[i]
    //     caseCont +=
    //       "<div class='success-cont-glory'>" +
    //       "<p><img src='img/success_case_logo.png' alt=''>2019十大品牌荣誉榜单</p>" +
    //       "<div class='cuccess-cont-glory-footer'>" +
    //       "<div class='ccgf-font'>" +
    //       '<p>中国' +
    //       casData.catname +
    //       '</p>' +
    //       '<p>' +
    //       casData.addtime +
    //       '</p>' +
    //       '</div>' +
    //       "<div class='ccgf-right'>" +
    //       "<a href='caseDate.html?sid=" +
    //       casData.sid +
    //       "'><button>去看看</button></a>" +
    //       '</div></div ></div >'
    //   }
    //   successDiv.empty()
    //   successDiv.prepend(caseCont)
  }
})
