const SERVER_INFO = {
  baseUrl: '10.223.148.231:3000',
  // baseUrl: 'localhost:3000',
};
const YUNTU_GLOBAL_INFO = {
  ua: window.navigator.userAgent,
  path: location.href,
};
// 获取用户信息 ip/ua/浏览器
function getInfo() {
  // 没有用户信息时获取用户信息
  if (!YUNTU_GLOBAL_INFO.email) {
    setInterval(function () {
      if (!document.querySelectorAll('#app') || !document.querySelectorAll('#app')[0]?.__vue__?.$store?.state?.user.email) {
        getInfo();
      } else {
        YUNTU_GLOBAL_INFO.email = document.querySelectorAll('#app')[0].__vue__.$store.state.user.email;
      }
    }, 5000);
  }
}
// PV
function pv() {
  var oldHref = location.href;
  var oldHash = location.hash;
  // 每隔500ms检测一下location.hash是否发生变化
  setInterval(function () {
    var newHref = location.href;
    var newHash = location.hash;
    // 如果hash发生了变化,且绑定了处理函数...
    if (newHash != oldHash || newHref != oldHref) {
      oldHash = newHash;
      oldHref = newHref;
      writreLog();
    }
  }, 500);
}
// UV

// 信息上报
function writreLog() {
  navigator.sendBeacon(`//${SERVER_INFO.baseUrl}`, JSON.stringify(YUNTU_GLOBAL_INFO));
}

function init() {
  getInfo();
  pv();
}

init();
