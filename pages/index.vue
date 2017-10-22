<template>
  <div class="container">

    <button @click="test" style="border: 1px solid red">test API</button>
    <button @click="post" style="border: 1px solid red">post API</button>

    <h1>Please login to see the secret content</h1>


    <h2>Login</h2>

  </div>
</template>

<script>
  /* eslint-disable func-call-spacing,no-trailing-spaces,padded-blocks */
  export default {
    data () {
      return {
        formError: null,
        formUsername: '',
        formPassword: ''
      }
    },
    created () {
      console.info(22222)
    },
    mounted () {
      this.getList()
    },
    methods: {
      async getList () {
        try {
          await console.info(11)
        } catch (e) {
          console.info(e)
        }
      },
      test () {
        this.$ajax.get('/api/test', {
          test: 'test'
        })
          .then (res => {
            console.info(111)
          })
          .catch (err => {
            console.info(err)
          })
      },
      post () {
        this.$ajax.post('/api/post', {
          test: 'test'
        })
          .then (res => {
            console.info(111)
          })
          .catch (err => {
            console.info(err)
          })
      }
    }
  }
</script>

<style lang="scss">
  .container {
    padding: 100px
  }

  .error {
    color: red
  }
</style>
