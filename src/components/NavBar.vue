<template>
  <v-app-bar app color="primary" dark>

    <v-spacer></v-spacer>

    <v-menu open-on-hover bottom offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on">Learn More</v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(resource, index) in learn" :key="index" >
          <v-btn text @click="navTo(resource.url)">{{ resource.label }}</v-btn>
        </v-list-item>
      </v-list>
    </v-menu>

  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",

  data: () => ({
    learn: [
      {
        label: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Fibonacci_number",
      },
      {
        label: "Math Is Fun",
        url: "https://www.mathsisfun.com/numbers/fibonacci-sequence.html",
      },
    ],
  }),
  methods: {
      navTo(url) {
          window.open(url, "_blank")
      }
  }
};
</script>
