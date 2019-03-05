<template>
    <div class="ipt">
        <div class="ipt-L">
            <i class="iconfont" v-html="seach"></i>
            <input type="text" placeholder="搜索正版电影周边">
        </div>
        <div class="ipt-R">
            <i class="iconfont" v-html="gou"></i>
        </div>
            

    </div>
</template>

<script>
export default {
    data() {
        return {
            seach:"&#xe61b;", 
            gou:"&#xe653;"
        }
    },
}
</script>

<style scoped>
.ipt{
    width: 100%;
    height: .9rem;
    display: flex;
    background: #ccc;
    justify-content: space-around;
}

.ipt>.ipt-L{
    width: 80%;
    height: 80%;
    display: flex;
    align-items: center;
    border-radius: .15rem;
    background: #fff;
    margin: .1rem .2rem;
}
.ipt>.ipt-L>i{
    display: block;
    width: 13%;
    height: 100%;
    font-size: .6rem;
    line-height: 100%;
}
.ipt>.ipt-L>input{
    border: none;
    width: 85%;
    height: 100%;
    font-size: .32rem;
}
.ipt>.ipt-R{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12%;
    height: 100%;
}
.ipt>.ipt-R>i{
    font-size: .6rem;
}

</style>


