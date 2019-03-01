<template>
    <div>
        <h2>33333333s</h2>
    </div>
</template>
<script>
import axios from "axios";
export default {
    created() {
         axios({
          method:"get",
          url:"/api/Service/callback.mi/PageSubArea/MarketFirstPageNew.api?t=201922820253122838"
      }).then((data)=>{
          console.log(data)
      })
    },
     
}
</script>

<style  scoped>

</style>