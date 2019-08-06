$(document).ready(function(e) {
  //选项卡的效果导航条设置
  $('#tablist li:eq(0)')
    .addClass('select')
    .append('<p></p>')
  $('#tablist li').click(function(e) {
    $(this)
      .find('p')
      .remove()
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

  var windows = $(window)
  windows.scroll(function() {
    var tablist = $('#tablist')
    var bodyHeight = windows.scrollTop()
    if (bodyHeight >= 600) {
      tablist.show()
    } else {
      tablist.hide()
    }
  })

  var morebtn = $('#morebtn')
  var bodyCont = $('.body-cont')
  morebtn.toggle(
    function() {
      bodyCont.show()
      $(this)
        .find('img')
        .attr('src', 'img/close.png')
    },
    function() {
      bodyCont.hide()
      $(this)
        .find('img')
        .attr('src', 'img/menu_yellow_btn.png')
    }
  )
  var taskBody = $('.task-body')
  $('#taskList').click(function() {
    taskBody.show()
  })

  $('#offBtn').click(function() {
    taskBody.hide()
  })

  // 地址  http://localhost:9000/

  $.get('/api/homepage/index.php', function(data) {
    var indexCont = JSON.parse(data)
    renderGround(indexCont.activity_aim)
    renderCardList(indexCont)
    renderCaseList(indexCont.case_list)
    renderTel(indexCont.service_tel)
  })
  // 电话
  function renderTel(te) {
    var userTel = $('#tel')
    userTel.html(te)
  }

  //品牌名片
  function renderCardList(card) {
    console.log(card)
    var cardDiv = $('#brandUl')
    $('#cardList')
      .tmpl(card)
      .prependTo(cardDiv)
  }

  //成功案例
  function renderCaseList(success) {
    var successDiv = $('.success-cont')
    successDiv.empty()
    $('#movieTmpl')
      .tmpl(success)
      .appendTo(successDiv)

    // var caseCont = ''
    // for (var i = 0; i < success.length; i++) {
    //   var caseList = success[i]
    //   caseCont +=
    //     "<div class='success-cont-glory'>" +
    //     "<p><img src='img/success_case_logo.png' alt=''>2019十大品牌荣誉榜单</p>" +
    //     "<div class='cuccess-cont-glory-footer'>" +
    //     "<div class='ccgf-font'>" +
    //     '<p>中国' +
    //     caseList.catname +
    //     '</p>' +
    //     '<p>' +
    //     caseList.addtime +
    //     '</p>' +
    //     '</div>' +
    //     "<div class='ccgf-right'>" +
    //     "<button><a href='caseDate.html?sid=" +
    //     caseList.catid +
    //     "'>去看看</a></button>" +
    //     '</div></div ></div >'
    // }
    // console.log(caseCont)
    // successDiv.prepend(caseCont)
  }

  function renderGround(activityAim) {
    // 定义的的内容
    var AD = activityAim.definition
    // 获取html 定义的内容
    var defineText = $('#define')
    var Cont = ''
    for (var i = 0; i < AD.length; i++) {
      Cont += '<p>' + AD[i] + '</p>'
    }
    defineText.empty()
    defineText.prepend(Cont)
    //目的
    var AP = activityAim.purpose
    var objText = $('#objective')
    objText.empty()
    var objCont = ''
    for (var i = 0; i < AP.length; i++) {
      objCont += '<p>' + AP[i] + '</p>'
    }
    objText.prepend(objCont)

    //产生
    var aPro = activityAim.produce
    var proText = $('#produce')
    proText.empty()
    var proCont = ''
    for (var i = 0; i < aPro.length; i++) {
      proCont += '<p>' + aPro[i] + '</p>'
    }
    proText.prepend(proCont)

    // 客观性
    var objective = activityAim.objective

    var objectiveText = $('#objectivity')
    objectiveText.empty()
    var objectiveCont = ''
    for (var i = 0; i < objective.length; i++) {
      objectiveCont += '<p>' + objective[i] + '</p>'
    }
    objectiveText.prepend(objectiveCont)

    // 监督
    var AM = activityAim.monitor
    var monCot = ''
    for (var i = 0; i < AM.length; i++) {
      monCot += '<p>' + AM[i] + '</p>'
    }
    var monText = $('#monitor')
    monText.empty()
    monText.prepend(monCot)
    // 获取标题
    var aTitle = activityAim.subject
    $('#contentTitle').text(aTitle)
  }
})
