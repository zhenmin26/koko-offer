# koko-offer
repository for koko offer

2021.4.13-4.19
* 更新的内容：offer详情页面
* 遇到的问题：我从前端传递过去的信息为key-value对象，传递数据不成功
* 解决方法：navigateTo中url只能传递string，在传递的时候用JSON.stringfy转换为string，在接收处JSON.parse解决问题
* 待解决问题：在home页面显示每一条最新offer数据

2021.4.20-4.27
* 更新的内容：
1. 更新数据库，添加了show_on_home控制offer记录是否在home页面显示；
2. 用户添加offer的界面进行了更新，用户不能够自行填入内容，用wx:if在前端来控制信息的显示，这样三种不同类型的offer就能够获得不同的数据；
3. offer详情页面添加了addRecord和deleteOffer两个功能
* 遇到的问题：因为有三种不同类型的offer类型，每个类型用户选择的生成的数据类型和个数都不一样；tabbar页面不能用navigateTo来跳转
* 解决方法：wx:if控制前端页面显示；后段也要根据不同的offer采用不同的接口，传递不同的数据；用switcTab来跳转会tabbar中的页面
* 待解决问题：
1. 这周集中做了功能，还没有做页面样式
2. nodejs文件需要进行相应的封装

2021.4.28-5.4
* 更新的内容：
1. 添加页面样式、消息提示框
2. 解决了小程序异步的问题
* 待解决的程序bug：offer的查询不准确，如果offer三个基本信息重合，会造成查询错误
* 滑动选择部分怎么从数据库获得？

2021.5.5-5.12
* 更新的内容：
1. home页面请求数据时的loading页面
2. offer查询，信息不串
3. 初步完成了动态获得picker数据的问题（参考链接：https://www.cnblogs.com/inzaghihao/p/7844844.html）
4. 将offer record页面展示记录的样式改为时间线
