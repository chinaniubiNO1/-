import http from "../utils/http";

export const HomeData = (params)=>http("post","/api/capi/product/qiuxie/open/homefirstv322",params)