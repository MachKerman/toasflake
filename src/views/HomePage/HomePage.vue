<template>
  <div>
    <button @click="add100List">生成新的D100</button>
   <div v-for="item in rand100List" :key="item.id">{{item.id+"  |  "+item.data}}</div>
  </div>
</template>

<script>
export default {
    name: '',
    props: {},
    components: {},
    directives: {}, 
    mixins: [], 
    data() {
        return {
          rand100List:[]
        }
    },
    computed: {}, 
    methods: { 
      rand100(){
        return Math.ceil(Math.random()*100)
      },
      add100List(){
        this.rand100List.push({
          id:this.rand100List[this.rand100List.length-1].id+1,
          data:this.rand100()
        })
        if(this.rand100List.length>30){
          this.rand100List.splice(0,1)
        }
      }
    },
    watch: {}, 
    created() {
      this.rand100List.push({
          id:0,
          data:this.rand100()
        })
        
    } 
}
</script>

<style lang='scss' scoped>

</style>