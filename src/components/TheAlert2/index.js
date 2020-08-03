import Notification from './alert.js'

let messageInstance

function getMessageInstance() {
  messageInstance = messageInstance || Notification.newInstance()
  return messageInstance
}

function notice({ duration = 1.5, content = '' }) {
  let instance = getMessageInstance()

  instance.add({
    content: content,
    duration: duration
  })
}

export default {
  //  notice(options)
  // 插件形式
  install(Vue) {
    Vue.prototype.$Alert = options => notice(options)
  }
}
