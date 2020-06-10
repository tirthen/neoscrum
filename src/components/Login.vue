<template>
  <div>
    <h1 class="heading">
      <label class="neo">Neo</label>
      <label class="scrum">SCRUM</label>
    </h1>
    <div class="loginForm">
      <form @submit.prevent="login" class="shadow-lg p-3 mb-5 bg-white rounded loginForm">
        <fieldset>
          <legend>User-login</legend>
          <div class="form-group">
            <label for="uname" class="float-left">Email:</label>
            <input
              type="email"
              class="form-control"
              id="uname"
              placeholder="Enter username"
              name="uname"
              v-model.trim="email"
              :class="{ error: submitted && $v.email.$invalid }"
            />
          </div>
          <div v-if="submitted">
            <div v-if="!$v.email.required">
              <p class="text-red text-left">Email is required</p>
            </div>
            <div v-if="!$v.email.email">
              <p class="text-red text-left">Invalid Email</p>
            </div>
          </div>
          <div class="form-group">
            <label for="pwd" class="float-left">Password:</label>
            <input
              type="password"
              class="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pswd"
              v-model.trim="password"
              :class="{ error: submitted && $v.password.$invalid }"
            />
          </div>
          <div v-if="submitted">
            <div v-if="!$v.password.required">
              <p class="text-red text-left">Password is required</p>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
          <a @click="$router.push('register')">Registration</a>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import AuthService from "../services/auth.service";
export default {
  data() {
    return {
      email: "",
      password: "",
      submitted: false,
      authService: new AuthService(),
      error: ""
    };
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    }
  },
  name: "Login",
  methods: {
    async login() {
      try {
        this.submitted = true;
        if (this.$v.$invalid) {
          return;
        }
        console.log(this.email, this.password);
        let obj = {
          user_email: this.email,
          user_pass: this.password
        };
        let result = await this.authService.login(obj).catch(error => {
          console.log(error.response);

          this.error = error.response;
          if (this.error.data.success == "false") {
            alert(this.error.data.message);
          }
        });
        if (result.data.success == "true") {
          let token = result.data.token;
          let user_id = result.data.user_id;
          let user_name = result.data.user_name;
          localStorage.setItem("token", token);
          localStorage.setItem("userId", user_id);
          localStorage.setItem("userName", user_name);
          this.$router.push("/");
        }
        console.log("result", result);
      } catch (error) {
        console.log("error", error);
      }
    }
  }
};
</script>

<style scoped>
.error {
  border: 1px solid red;
}
.text-red {
  color: red;
}
</style>
