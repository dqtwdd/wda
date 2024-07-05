const configs = {
  mysql: {
    host: '10.223.148.231',
    port: '3306',
    user: 'root',
    password: '124145169', // 自己设置的密码
    database: 'yt2', // 数据库的名字
  },
  // 打印错误
  log: {
    error(message) {
      console.log('[error-]', message);
    },
  },
};

module.exports = configs;
