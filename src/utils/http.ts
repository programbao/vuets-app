import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { Message } from "element-ui";
import router from "@/router";
/**
 * http 请求工具类
 *
 * 请求拦截器  负责将客户端 表示token值存储 并放置在头部提交给服务端
 *
 * 响应拦截器 负责全局处理业务请求的网络或则业务错误
 * */

//  创建 axios 的实例
const service: any = axios.create({
  // 请求头，超时设置，是否跨域验证，async-await设置---都在创建实例时设置
  timeout: 30 * 1000 // 超时时间 --- 10秒
}); // 记： 创建请求时间的用法不是很清楚，以及响应时会出现这里超时的判断，会导致响应不出状态结果 err.response.status的状态返回不了

// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (localStorage.tsToken) {
      config.headers.Authorization = localStorage.tsToken;
    }
    console.log(config);
    return config;
  },
  (err: any) => {
    Promise.reject(err);
  }
);

// 响应拦截
service.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log(response);
    return response;
  },
  (err: any) => {
    let errMsg = "";
    console.log(err);
    console.log(err.code);
    if (err.code === "ECONNABORTED") Promise.reject(err);
    Message.error("请求超时或服务器异常，请检查网络或联系管理员！");
    return;
    if (err && err.response.status) {
      switch (err.response.status) {
        case 401:
          errMsg = "登录状态失败，请重新登录";
          localStorage.removeItem("tsToken");
          router.push("/login");
          break;
        case 403:
          errMsg = "拒绝访问";
          break;
        case 408:
          errMsg = "请求超时";
          break;
        case 500:
          errMsg = "服务器内部错误";
          break;
        case 501:
          errMsg = "服务未实现";
          break;
        case 502:
          errMsg = "网关错误";
          break;
        case 503:
          errMsg = "服务不可用";
          break;
        case 504:
          errMsg = "网关超时";
          break;
        case 505:
          errMsg = "HTTP版本不受支持";
          break;
        default:
          errMsg = err.response.data.msg;
          break;
      }
    } else {
      errMsg = err;
    }

    // 显示出错误
    Message.error(errMsg);
    return Promise.reject(errMsg);
  }
);

export default service;
