<template>
  <v-app>
    <NavBar />

    <v-container fill-height>
      <v-row>
        <v-col cols="12" class="d-flex justify-center">
          <h1>
            FiboWizard9000
          </h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4" offset="4">
          <p>
            This tool is used to find Fibonacci numbers at a given position in the sequence, and to check if a submitted number is a valid member of the sequence. We hope you enjoy this tool, and please check the links above for more information about Fibonacci numbers!
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="10" class="d-flex justify-center">
          <span>{{ output }}</span>
        </v-col>
        <v-col cols="2">
          <div class="d-flex justify-center">== Session Stats ==</div>
          <div>Numbers Stored : {{ Hash.max }}</div>
          <div>Highest Number : {{ Hash[Hash['max']] }}</div>
          <div>Queries Run : {{ queries }}</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4" offset="4">
          <v-text-field outlined v-model="input" placeholder="Enter a number"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="d-flex justify-center">
          <FuncBtn :label="'Is it a Fibonacci Number?'" :func="fiboIsIt" />
          <FuncBtn :label="'What is the position in the sequence?'" :func="fiboPosFind" />
          <FuncBtn :label="'What is the number at the position?'" :func="fiboForVue" />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar"
import FuncBtn from "@/components/FuncBtn"

export default {
  name: "App",

  components: {
    NavBar,
    FuncBtn
  },

  data: () => ({
    Hash: { max: 0, 0: 0, 1: 1 },
    queries: 0,
    input: "",
    output: "",
  }),
  methods: {
    async fiboForVue() {
      this.queries++
      this.output = await this.fiboFor(this.input)
    },
    async fiboFor(position) {
      const hash = this.Hash || {max: 1, 0: 0, 1: 1}
    const safePosition = Number(position)
    if (this.higherTruth(safePosition)) {
        const working = Math.max(0, safePosition)
        if (working <= hash.max) {
            return hash[working]
        } else {
            for (let i = hash.max; i <= working; i++) {
                if (i <= 1) {
                    continue
                }
                hash[i] = hash[i - 1] + hash[i - 2]
                this.Hash[i] = hash[i]
            }
            hash.max = working
            this.Hash.max = working
            return hash[working]
        }
    } else {
        return `${position} is not a valid submission`
    }
    },
    fiboIsIt() {
      this.queries++
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
      this.queries++
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
            curr = await this.fiboFor(i);
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