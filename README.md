# weixin_miniprogram
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
* 待解决问题：这周集中做了功能，还没有做页面样式
