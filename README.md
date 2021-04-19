# weixin_miniprogram
repository for koko offer

2021.4.13-4.19
更新的内容：offer详情页面
遇到的问题：我从前端传递过去的信息为key-value对象，传递数据不成功
解决方法：navigateTo中url只能传递string，在传递的时候用JSON.stringfy转换为string，在接收处JSON.parse解决问题
待解决问题：在home页面显示每一条最新offer数据
