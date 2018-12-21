var userip = 'http://212.64.35.28:8011/h5'
window.USERMESSAGE = {
    'insertTicket':userip+'/ticket/insertTicket',//获取签名
    'login':userip+'/sms/login',//发送验证码
    'vali':userip+'/sms/vali',//校验验证码
    'play':userip+'/power/play',//玩游戏有手机号本地存储
    'share':userip+'/power/share',//分享
    'query':userip+'/sort/query',//分享
}