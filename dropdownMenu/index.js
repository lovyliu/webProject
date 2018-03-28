$(function(){
  var menu_list = [
    {
      menu_item: '产品',
      sub_item: ['弹性计算','存储和CDN','数据库','网络','域名与网站','安全','数据智能','分析与搜索','视频服务']
    },
    {
      menu_item: '解决方案',
      sub_item: ['行业解决方案','通用解决方案','安全解决方案','大数据解决方案']
    },
    {
      menu_item: '云市场',
      sub_item: ['基础软件市场','网站建设','企业应用','服务与培训','安全市场','API市场','物联网市场']
    },
    {
      menu_item: '合作与生态',
      sub_item: ['渠道分销计划','云市场计划','云合作','云扶持']
    },
    {
      menu_item: '创业孵化',
      sub_item: ['园区入驻','企业服务','创业大学','活动大赛']
    },
    {
      menu_item: '开发者中心',
      sub_item: ['开发资源','应用开发','应用服务','SDK','API 平台','开发者解决方案','Devops解决方案']
    },
    {
      menu_item: '支持与服务',
      sub_item: ['帮助文档','支持','服务','开发者中心','建议与反馈']
    },
    {
      menu_item: '重要频道',
      sub_item: ['万网','阿里云邮箱','安全','人工智能','量子计算云平台','阿里云办公','码上公益']
    },
  ];

  // 动态显示一级菜单
  var item_html = '';
  var level_1 = $('#menu-level-1 ul');
  menu_list.map(function(item,index){
    item_html += '<li class="menu-item" index="' + index + '">' +
      item.menu_item + '<i class="icon-angle-right"></i></li>';
  });
  level_1.append(item_html);

  // 鼠标移到「全部导航」按钮上时，显示一级菜单
  $('.menu').on('mouseover','.menu-button',function(){
    $('#menu-wrapper').show();
  });

  // 鼠标移到一级菜单上时，动态显示对应二级菜单
  $('#menu-level-1').on('mouseover','.menu-item',function(){
    console.log($(event.target)[0].nodeName,$(event.target)[0].parentNode)
    var item_index = $(event.target)[0].nodeName == 'I' ? $($(event.target)[0].parentNode).attr('index') : $(event.target).attr('index');
    var sub_menu_html = '';
    $('#menu-level-2 ul').empty();
    menu_list[item_index].sub_item.map(function(sub_item){
      sub_menu_html += '<li class="menu-item">' +
        sub_item + '<i class="icon-angle-right"></i></li>';
    });
    $('#menu-level-2 ul').append(sub_menu_html);
    $('#menu-level-2').show();
  });

  // 鼠标离开菜单区域时，隐藏二级菜单（此时鼠标可能还停留在「全部导航」按钮上）
  $('.content-wrapper').on('mouseleave','#menu-wrapper',function(){
    console.log('menu wrapper leave');
    $('#menu-level-2').hide();
    $('#menu-level-2 ul').empty();
  });

  // 鼠标离开整个 .menu 区域时，隐藏所有菜单
  $('.content-wrapper').on('mouseleave','.menu',function(){
    $('#menu-wrapper').hide();
  });

});
