<template>
  <v-app>
    <v-content>
      <main-page :buttonColor='"blue"'/>
    </v-content>
  </v-app>
</template>

<script>
import MainPage from './components/authentication/HomePage'

export default {
  name: 'App',

  components: {
    MainPage
  },
};
</script>
