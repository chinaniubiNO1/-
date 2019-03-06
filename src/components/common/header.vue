<template>
  <div id="header">
    <div>
      <img src="//static1.mtime.cn/html5/20190110181146/images/2014/logo_mtime.png">
      <ul>
        <li v-for="(item,index) in tabBar">
          <router-link :to="{name:item.name}">
            <span>{{item.title}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      tabBar: [
        {
          name: "home",
          title: "首页"
        },
        {
          name: "shop",
          title: "商城"
        },
        {
          name: "find",
          title: "发现"
        },
        {
          name: "my",
          title: "我的"
        }
      ]
    };
  }
};
</script>

<style>
#header {
  width: 100%;
  height: 0.9rem;
  display: flex;
  justify-content: space-between;
  background: #1c2635;
}

#header > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: .9rem;
}
#header > div > img{
    width: 15%;
    height: 50%;
    margin-left: .1rem;
}

#header > div > ul {
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 100%;
 
}
#header > div > ul > li,
#header > div > ul > li > a {
  width: 100%;
  height: 100%;
}
#header > div > ul > li > a {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
   color: #c7c5c5;
}
#header > div > ul > li > .router-link-active {
  color: #fff;
  font-weight: bold;
  border-bottom: 0.05rem solid #fff;
}

#header > div > ul > li > a > span {
  font-size: 0.28rem;
}
</style>