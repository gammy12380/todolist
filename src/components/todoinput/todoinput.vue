<template>
    <div class="todoinput">
        <input type="text" placeholder="請輸入內容" v-model="todo" @keyup.enter="enterHandler" v-focus>
        <input type="button" value="送出" @click="enterHandler">
    </div> 
</template>

<script>
export default {
    data(){
        return{
            todo:''
        }
    },
    methods: {
        enterHandler(){
            if(!this.todo) return alert('請輸入內容')
            this.$store.commit('add_todo',{
                content:this.todo,
                complete:false,
            })
            this.todo = ''
        }
    },
}
</script>