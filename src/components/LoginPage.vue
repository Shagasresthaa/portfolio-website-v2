<template>
  <div id="app">
    <div class="login-container">
      <h1 class="hdr1">Login</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" />
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
              @click="togglePasswordVisibility"
              class="password-toggle-icon"
            />
          </div>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { login as authenticate } from "../services/authService";


library.add(faEye, faEyeSlash);

export default defineComponent({
  components: {
    FontAwesomeIcon,
  },

  setup() {
    const username = ref("");
    const password = ref("");
    const passwordVisible = ref(false);

    const login = async () => {
      try {
        const user = {
          username: username.value,
          password: password.value,
        };

        const response = await authenticate(user);

        if (response.status === 200) { 
          window.alert("Login Successful!");
          console.log(response);
          
        } else if(response.status === 401){
          window.alert("Login Failed");
          console.log(response);
        } else {
          window.alert("Possible Error encountered" + response.data);
          console.log(response);
        }
      } catch (err) {
        // handle error
        console.error(err);
      }
    };

    const togglePasswordVisibility = () => {
      passwordVisible.value = !passwordVisible.value;
    };

    return {
      username,
      password,
      passwordVisible,
      login,
      togglePasswordVisibility,
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
