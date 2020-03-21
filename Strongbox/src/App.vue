<template>
  <v-app>
    <v-content>
      <MainPage :buttonColor='"blue"'/>
    </v-content>
  </v-app>
</template>

<script>
import MainPage from './components/MainPage'

export default {
  name: 'App',

  components: {
    MainPage
  },
};
</script>
