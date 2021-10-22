<template>
  <v-app>
    <!-- <NavBar /> -->

    <v-container>
      <h2>{{ output }}</h2>
      <v-text-field v-model="input">test</v-text-field>
      <div>
        <v-btn @click="fiboIsIt">Is it a Fibonacci Number?</v-btn>
        <v-btn @click="fiboPosFind"
          >What is the position in the sequence?</v-btn
        >
        <v-btn @click="fiboFor">What is the number at the position?</v-btn>
      </div>
    </v-container>
  </v-app>
</template>

<script>
// import NavBar from "@/components/NavBar"

export default {
  name: "App",

  components: {
    // NavBar,
  },

  data: () => ({
    Hash: { max: 0, 0: 0, 1: 1 },
    input: "",
    output: "",
  }),
  methods: {
    async fiboFor(index, trigger) {
      const hash = this.Hash || { max: 1, 0: 0, 1: 1 };
      const safePosition = Number(index) || Number(this.input);
      if (this.higherTruth(safePosition)) {
        const working = Math.max(0, safePosition);
        if (working <= hash.max) {
          if (trigger) {
            return hash[working];
          } else {
            this.output = hash[working];
          }
        } else {
          for (let i = hash.max; i <= working; i++) {
            if (i <= 1) {
              continue;
            }
            hash[i] = hash[i - 1] + hash[i - 2];
            this.Hash[i] = hash[i];
          }
          hash.max = working;
          this.Hash.max = working;
          if (trigger) {
            return hash[working];
          } else {
            this.output = hash[working];
          }
        }
      } else {
        this.output = `${this.input} is not a valid submission`;
        return;
      }
    },
    fiboIsIt() {
      const safeValue = Number(this.input);
      if (this.higherTruth(safeValue)) {
        const coreValue = 5 * safeValue * safeValue;
        if (this.fiboMath(coreValue)) {
          this.output = `${safeValue} is a Fibonacci number`;
          return;
        } else {
          this.output = `${safeValue} is not a Fibonacci number`;
          return;
        }
      } else {
        this.output = `${this.input} is not a valid submission`;
        return;
      }
    },
    async fiboPosFind() {
      const hash = this.Hash || { max: 1, 0: 0, 1: 1 };
      const safeToFind = Number(this.input);

      if (
        this.higherTruth(safeToFind) &&
        this.fiboMath(5 * safeToFind * safeToFind)
      ) {
        if (safeToFind === 1) {
          this.output = "Your number is 1, which is both position 1 and 2";
          return;
        } else if (safeToFind === hash[hash.max]) {
          this.output = `Your number is position : ${hash.max}`;
          return;
        } else {
          let i = -1;
          let curr = 0;
          while (curr !== safeToFind) {
            i++;
            curr = await this.fiboFor(i, true);
          }
          this.output = `Your number is position : ${i}`;
          return;
        }
      } else if (this.higherTruth(safeToFind)) {
        this.output = `${safeToFind} is not a Fibonacci number`;
        return;
      } else {
        this.output = `${this.input} is not a valid submission`;
        return;
      }
    },

    fiboMath(value) {
      return Math.sqrt(value - 4) % 1 === 0 || Math.sqrt(value + 4) % 1 === 0;
    },
    higherTruth(value) {
      return value === 0 || !!value;
    },
  },
};
</script>

<style scoped>
</style>