import http from "../utils/http";

export const HomeData = ()=>http("get","/api/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=2019361292962139")

export const AreaData = ()=>http("get","/api/Service/callback.mi/PageSubArea/MallAreaFirstH5Url.api?t=20193616574466024")