$(function() {
  //选项卡的效果导航条设置
  $('#tablist li:eq(0)')
    .addClass('select')
    .append('<p></p>')
  $('#tablist li').click(function() {
    $(this).append('<p></p>')
    $(this)
      .addClass('select')
      .siblings()
      .find('p')
      .remove()
    $(this)
      .addClass('select')
      .siblings()
      .removeClass('select')
  })

  $('.company-content').addClass('samll-div')
  var contBody = $('#contentMain .showTime')
  var contImg = contBody.find('img')
  contBody.toggle(
    function() {
      $(this)
        .prev()
        .removeClass('samll-div')
        .addClass('big-div')
      contImg
        .eq(1)
        .show()
        .prev()
        .hide()
      $(this)
        .find('span')
        .html('收起')
    },
    function() {
      $(this)
        .prev()
        .removeClass('big-div')
        .addClass('samll-div')
      contImg
        .eq(1)
        .hide()
        .prev()
        .show()
      $(this)
        .find('span')
        .html('展开')
    }
  )

  //获取数据
  var itemid = utils.getQueryString('itemid')
  console.log(itemid)
  $.get('/api/homepage/card_details.php?itemid=' + itemid, function(data) {
    var indexCont = JSON.parse(data)
    console.log(indexCont)
    console.log(status)
    cardDatali(indexCont.card_info)
    companyIntro(indexCont.contents)
  })

  function cardDatali(cd) {
    console.log(cd)
    var comIntro = $('#companyText')
    // comIntro.empty()
    comIntro.find('p').remove()
    // 公司介绍
    var comcontent =
      '<p>公司名称:' +
      cd.company +
      '</p><p>成立时间:' +
      cd.foundtime +
      '</p><p>公司地址:' +
      cd.address +
      '</p><p>公司商业:' +
      cd.business +
      '</p><p>官方网站:' +
      cd.homepage +
      '</p>'
    console.log(comcontent)
    comIntro.prepend(comcontent)
    // 品牌介绍
    var braIntro = $('#barndText')
    braIntro.find('p').remove()
    var bracontent = '<p>' + cd.introduce + '</p>'
    braIntro.prepend(bracontent)
    // newTime更新时间
    var newTime = $('#newTime')
    newTime.text(cd.editdate)
    var detaTitle = $('#detaTitle')
    detaTitle.text(cd.title)
    // logo
    var imgLogo = $('#imgLogo')
    logoCont = "<img src='" + cd.thumb + "' alt=''>"
    imgLogo.html(logoCont)
  }

  // 集团简介
  function companyIntro(intro) {
    console.log(intro)
    var groundInt = $('#lastCont')
    groundInt.find('p').remove()
    var groText = ''
    for (var i = 0; i < intro.length; i++) {
      var introlen = intro[i]
      groText += '<p>' + introlen.content + '</p>'
    }
    groundInt.prepend(groText)
  }
})
