## 模仿阿里云下拉菜单 ##

由于有两级菜单，因此通过鼠标移上移出控制菜单的显示和隐藏，使用jquery简化获取DOM元素、操作DOM元素的过程。

遇到的问题：
  在绑定mouseenter和mouseleave事件时，例如在鼠标移上一级菜单，这时二级菜单显示，而鼠标移出菜单区域时，隐藏二级菜单。这时如果直接使用事件绑定写法`$('#menu-wrapper').mouseleave`，会出现意外的bug，即鼠标移到二级菜单的过程中，二级菜单的DOM还未生成，这时就触发了`.menu-wrapper`的`mouseleave`事件，因此必须采用`on`事件监听的写法。
