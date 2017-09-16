<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ msgFromSuper }}</h1>
    <button v-on:click="onClickMe">Click</button>
  </div>
</template>

<script>
	export default {
		name: 'hello',
		data () {
			return {
				msg: 'Hello from Component Hello'
			}
		},

    //这里需要加 '' 号 否则会认为是对象
    props: [
      'msgFromSuper'
    ],

    methods: {
			onClickMe() {
        console.log(this.msgFromSuper)

        //通过事件 child-tell-me-something 将 this.msg 发送到父组件中, 有点类似iOS中的通知
        this.$emit('child-tell-me-something', this.msg);
      }
    }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
