<template>
  <div id="app">
    <!--<h1>{{ title }}</h1>-->
    <!--或者-->
    <h1 v-text="title"></h1>
    <input v-model="newItem" v-on:keyup.enter="addNew"/>
    <ul>
      <li v-for="item in items"
          v-bind:class="{finished: item.isFinished}"
          v-on:click="toggleFinish(item)"
      >
        {{item.label}}
      </li>
    </ul>
    <p>child tell me : {{ childWords }}</p>
    <!-- 监听 child-tell-me-something 事件, 触发 listenToMyBoy 方法-->
    <hello msgFromSuper='are you ok?' v-on:child-tell-me-something='listenToMyBoy'></hello>
  </div>
</template>

<script>
import Store from './Store'
import Hello from './components/Hello'

export default {
  name: 'app',
  data () {
    return {
      title: 'This is a todo list App',
      items: Store.fetch(),
        /*
        [
           item:
            {
                label: 'coding',
                isFinished: false,
              },

            ]
         */
      //这里是双向绑定
      newItem: '',
      childWords: '',
    }
  },

  //methods 中定义所有的methods
  methods: {
    toggleFinish(item) {
    	item.isFinished = !item.isFinished;
    	console.log(item);
    },
    addNew() {
    	this.items.push({
        label: this.newItem,
        isFinished: false,
      })
      this.newItem = '';
    },
    listenToMyBoy(msg) {
      this.childWords = msg;
    }
  },

  //监听 item 属性
  watch: {
  	items: {
  		handler(value, oldValue) {
        //存储新值
        Store.save(value);
      },

      //当item中的任意key变化会调用handler
      deep: true
    }
  },

  //使用时, vue.js 会将驼峰命名的类名直接导出为全小写, 或者中间带-
  //Hello -> hello  HelloWord -> hello-word
  components: {
  	Hello,
  }
}
</script>

<style>
  .finished {
    text-decoration: underline;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 44px;
  }
</style>
