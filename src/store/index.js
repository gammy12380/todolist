import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const LS = {
    load() {
        return JSON.parse(localStorage.getItem("vue-todo") || "[]");
    },
    save(data) {
        localStorage.setItem("vue-todo", JSON.stringify(data));
    },
};

const filter = {
    all(todos) {
        return todos;
    },
    active(todos) {
        return todos.filter((todo) => {
            return !todo.complete;
        });
    },
    complete(todos) {
        return todos.filter((todo) => {
            return todo.complete;
        });
    },
};

export default new Vuex.Store({
    strict: true,
    state: {
        todos: [
            { content: "出國旅遊", complete: true },
            { content: "國內旅遊", complete: true },
            { content: "環島旅遊", complete: false },
        ],
    },
    getters: {
        todoIndex(state) {
            return filter[state.route.name](state.todos).map((todo) =>
                state.todos.indexOf(todo)
            );
        },
    },
    mutations: {
        set_todos(state, data) {
            state.todos = data;
            LS.save(state.todos);
        },
        add_todo(state, data) {
            state.todos.push(data);
            LS.save(state.todos);
        },
        update_todo(state, { index, data }) {
            state.todos[index].content = data.content;
            state.todos[index].complete = data.complete;
            LS.save(state.todos);
        },
        delete_todo(state, index) {
            state.todos.splice(index, 1);
            LS.save(state.todos);
        },
    },
    actions: {
        todos({ commit }) {
            //讀取LocalStorage
            commit("set_todos", LS.load());
        },
    },
    modules: {},
});
