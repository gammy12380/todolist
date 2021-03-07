<template>
  <div id="app">
    <div id="nav">
      <router-link to="/all">全部</router-link> |
      <router-link to="/active">未完成</router-link> |
      <router-link to="/complete">已完成</router-link>
    </div>
    <todoinput/>
    <div class="todoitem">
      <todolistitem v-for="index in todoIndex" :key="index" :index="index"/>
    </div>
  </div>
</template>

<script>
import todoinput from '@/components/todoinput/todoinput.vue'
import todolistitem from '@/components/todolistitem/todolistitem.vue'

export default {
  components:{
    todoinput,
    todolistitem
  },
  computed:{
    todoIndex(){
      return this.$store.getters['todoIndex']
    }
  },
  mounted(){
    this.$store.dispatch('todos')
  }
}
</script>

<style src="@/assets/css/style.css">
</style>
