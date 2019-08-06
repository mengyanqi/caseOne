$(document).ready(function() {
  var sid = utils.getQueryString('sid')
  console.log(sid)
  $.get('/api/homepage/case_details.php?sid=' + sid, function(data) {
    var indexCont = JSON.parse(data)
    // console.log(indexCont)
    caseDetails(indexCont)
    listInfo(indexCont.catInfo)
  })

  function caseDetails(list) {
    console.log(list)
    var mainCont = $('#seccesContent')
    $('#caseDetail')
      .tmpl(list)
      .appendTo(mainCont)

    //
    // $('.informention')
    //   .gt(3)
    //   .find('#king')
    //   .remove()
    //  var caseCont = ''
    // console.log(imgs)
    // for (var i = 0; i < list.length; i++) {
    //   var caseDetaList = list[i]
    //   caseCont +=
    //     "<div class='informention'>" +
    //     "<div class='inforName'>" +
    //     "<div class='inforName-leftImg' id='round'>" +
    //     "<img src='img/crown" +
    //     imgs[i] +
    //     ".png' alt='' id='king' class='one'>" +
    //     "<img src='" +
    //     caseDetaList.thumb +
    //     "' alt=''></div>" +
    //     "<div class='inforName-rightP'>" +
    //     "<div id ='rightP'>" +
    //     '<span>' +
    //     caseDetaList.ranking +
    //     '</span>' +
    //     '<p>' +
    //     caseDetaList.title +
    //     '</p></div><p>' +
    //     caseDetaList.company +
    //     "</p></div></div><div class='inforGround'>" +
    //     "<ul><li><img src='img/address@2x.png' alt=''></li><li>" +
    //     caseDetaList.address +
    //     "</li><li><img src='img/site@2x.png' alt=''></li><li>公司网址：" +
    //     caseDetaList.homepage +
    //     '</li></ul></div></div>'
    // }

    // mainCont.empty()
    // mainCont.prepend(caseCont)
  }
  // $(".one:gt(3)").css("display", "none");

  function listInfo(info) {
    var titlecont = $('.secces-header-title>p')
    console.log(info)
    titlecont.eq(0).text(info.catname)
    titlecont
      .eq(1)
      .find('span')
      .text(info.year)
  }
})
