<template>
  <div id="app">
    <div id="nav">
      <router-link to="/all">全部</router-link> |
      <router-link to="/active">未完成</router-link> |
      <router-link to="/complete">已完成</router-link>
    </div>
    <Todoinput/>
    <div class="todoitem">
      <Todolistitem v-for="index in todoIndex" :key="index" :index="index"/>
    </div>
  </div>
</template>

<script>
import Todoinput from '@/components/Todoinput/Todoinput.vue'
import Todolistitem from '@/components/Todolistitem/Todolistitem.vue'

export default {
  components:{
    Todoinput,
    Todolistitem
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
