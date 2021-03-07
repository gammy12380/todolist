<template>
    <div class="todolist">
        <input
            type="text"
            v-model="edit"
            v-if="edit!==null"
            class="edit"
            v-focus
            @keyup.enter="enterHandler"
            @keyup.esc="cancelHandler"
            @blur="cancelHandler"
        />
        <template v-else>
            <input type="checkbox" v-model="complete" class="checkbox" />
            <label> {{ todo.content }} </label>
            <div class="todoupdate">
                <input type="button" @click="updateHandler" value="修改" />
                <input type="button" @click="destoryHandler" value="刪除" />
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        index: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            edit: null
        };
    },
    computed: {
        todo() {
            return this.$store.state.todos[this.index];
        },
        complete: {
            get() {
                return this.todo.complete;
            },
            set(val) {
                this.$store.commit("update_todo", {
                    index: this.index,
                    data: {
                        content: this.todo.content,
                        complete: val,
                    },
                });
            },
        },
    },
    methods: {
        enterHandler(){
            if(!this.edit) return this.destoryHandler()
            this.$store.commit('update_todo',{
                index:this.index,
                data:{
                    content:this.edit,
                    complete:this.todo.complete
                }
            })
            this.edit = null
        },
        destoryHandler() {
            if (confirm(`確定刪除${this.todo.content}?`)) {
                this.$store.commit("delete_todo", this.index);
            }
        },
        updateHandler() {
            this.edit = this.todo.content;
        },
        cancelHandler(){
            this.edit = null
    
        }
    },
};
</script>
