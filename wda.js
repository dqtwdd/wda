console.log("10");
const SERVER_INFO = {
  // baseUrl: "10.223.148.231:3000"
  baseUrl: "localhost:3000"
};
const YUNTU_GLOBAL_INFO = {
  ua: window.navigator.userAgent
};
// 获取用户信息 ip/ua/浏览器
function getInfo() {
  console.log("YUNTU_GLOBAL_INFO", YUNTU_GLOBAL_INFO);
  // 没有用户信息时获取用户信息
  if (!YUNTU_GLOBAL_INFO.email) {
    setInterval(function() {
      if (!window?.vue?.$store?.state?.user?.email) {
        getInfo();
      } else {
        YUNTU_GLOBAL_INFO.email =
          window?.vue?.$store?.state?.user?.email;
      }
    }, 500);
  }
}
// PV
function pv() {
  var oldHref = location.href;
  var oldHash = location.hash;
  // 每隔500ms检测一下location.hash是否发生变化
  setInterval(function() {
    var newHref = location.href;
    var newHash = location.hash;
    // 如果hash发生了变化,且绑定了处理函数...
    if (newHash != oldHash || newHref != oldHref) {
      console.log("change!");
      oldHash = newHash;
      oldHref = newHref;
      writreLog();
    }
  }, 500);
}
// UV

// 信息上报
function writreLog() {
  // var img = new Image();
  // img.src = `//${SERVER_INFO.baseUrl}/1.gif`;
  console.log("123");
  navigator.sendBeacon(
    `//${SERVER_INFO.baseUrl}`,
    JSON.stringify(YUNTU_GLOBAL_INFO)
  );
}

function init() {
  getInfo();
  pv();
}

init();
