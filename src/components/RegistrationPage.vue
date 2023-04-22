<template>
  <div id="app">
    <div class="login-container">
      <h1 class="hdr1">Register</h1>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="emailAddr" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <div class="password-wrapper">
            <input
              :type="passwordVisible ? 'text' : 'password'"
              id="password"
              v-model="password"
            />
            <font-awesome-icon
              :icon="passwordVisible ? 'eye' : 'eye-slash'"
              @click="togglePasswordVisibilityPass"
              class="password-toggle-icon"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="password">Confirm Password</label>
          <div class="password-wrapper">
            <input
              :type="passwordVisibleConf ? 'text' : 'password'"
              id="password"
              v-model="confPassword"
            />
            <font-awesome-icon
              :icon="passwordVisibleConf ? 'eye' : 'eye-slash'"
              @click="togglePasswordVisibilityConPass"
              class="password-toggle-icon"
            />
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faEye, faEyeSlash);

export default defineComponent({
  components: {
    FontAwesomeIcon,
  },

  setup() {
    const username = ref("");
    const emailAddr = ref("");
    const password = ref("");
    const confPassword = ref("");
    const passwordVisible = ref(false);
    const passwordVisibleConf = ref(false);

    const register = () => {
      if (
        username.value == "" ||
        emailAddr.value == "" ||
        password.value == "" ||
        confPassword.value == ""
      ) {
        alert(
          "Some fields are empty please kindly verify and resubmit the form!"
        );
        console.log(
          "Email:",
          emailAddr.value,
          "Username:",
          username.value,
          "Password:",
          password.value,
          "Conf Password:",
          confPassword.value
        );
      } else if (!(password.value === confPassword.value)) {
        alert(
          "The Passwords entered donot match please verify the entered passwords and resubmit the form!"
        );
        console.log(
          "Email:",
          emailAddr.value,
          "Username:",
          username.value,
          "Password:",
          password.value,
          "Conf Password:",
          confPassword.value
        );
      } else {
        console.log(
          "Email:",
          emailAddr.value,
          "Username:",
          username.value,
          "Password:",
          password.value,
          "Conf Password:",
          confPassword.value
        );
      }
    };

    const togglePasswordVisibilityPass = () => {
      passwordVisible.value = !passwordVisible.value;
    };
    const togglePasswordVisibilityConPass = () => {
      passwordVisibleConf.value = !passwordVisibleConf.value;
    };

    return {
      emailAddr,
      username,
      password,
      confPassword,
      passwordVisible,
      passwordVisibleConf,
      register,
      togglePasswordVisibilityPass,
      togglePasswordVisibilityConPass,
    };
  },
});
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  background: linear-gradient(to right, #7474bf, #348ac7) !important;
}

.hdr1 {
  font-size: 2rem;
  font-weight: bold;
}

.login-container {
  min-width: 300px;
  max-width: 100%;
  width: auto;
  margin: 0 auto;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  font-weight: bold;
  text-align: left !important;
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-right: -1px;
}

button {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
}
.password-wrapper {
  position: relative;
}

.password-toggle-icon {
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  cursor: pointer;
}
</style>
