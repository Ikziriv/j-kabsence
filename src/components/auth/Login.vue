<template>
<div class="login-wrapper columns">
    <div class="column is-8 is-hidden-mobile hero-banner">
      <section class="hero is-fullheight is-dark">
        <div class="hero-body">
          <div class="container section">
            <div class="has-text-right">
              <!-- text -->
            </div>
          </div>
        </div>
      </section>  
    </div>
    <div class="column is-4">
      <section class="hero is-fullheight">
        <div class="hero-heading">
          <div class="section has-text-centered">
            <img src="https://jadikapan.com/assets/img/logo/logo.png" alt="JADIKAPAN logo" width="150px">
          </div>
        </div>
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column is-8 is-offset-2">
                <div class="login-form">
                  <p class="control has-icon has-icon-left">
                    <input class="input email-input has-text-centered" type="text" placeholder="jadikapan@example.com">
                    <span class="icon user">
                      <i class="fa fa-user"></i>
                    </span>
                  </p>
                  <p class="control has-icon has-icon-left ">
                    <input class="input password-input has-text-centered" type="password" placeholder="●●●●●●●">
                    <span class="icon user">
                      <i class="fa fa-lock"></i>
                    </span>
                  </p>
                  <p class="control login">
                    <button class="button is-default is-outlined is-medium is-fullwidth">Masuk</button>
                  </p>
                </div>
                
                <div id="firebaseui-auth-container"></div>
              </div>
            </div>
          </div>
        </div>
      </section>  
    </div>
 </div>
</template>

<script>
import firebase from 'firebase';
import firebaseui from 'firebaseui'
import {config} from '../../helpers/firebaseConfig'

export default {
  name: 'auth',
  mounted() {
    var uiConfig = {
      signInSuccessUrl: '/dashboard',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
        ]
      };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
    },
}
</script>

<style scoped>
html,body {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  height: 100%;
  padding: 0;
  margin: 0;
}

.email-input,
.password-input {
  border-radius: 10px;
  font-size: 17px;
  padding-left: 15px;
  color: #95A5A6;
}

.icon.user,
.icon.password {
  margin: 5px 10px 0 0;
}

.avatar img {
  border-radius: 100px;
  padding: 5px;
  border: 1px solid #dbdbdb;
}

.forgot-password a {
  color: #95A5A6;
  padding-right: 20px;
}

.login {
  padding-top: 20px;
}

.login button {
  border-radius: 10px;
}

.hero-body .container {
  margin-top: -200px;
}

.hero.is-dark .section {
  background-color: transparent;
}

.login-wrapper {
  margin: -0.75rem;
  overflow-y: hidden;
}

.hero-banner .hero {
  background: url('https://jadikapan.com/assets/img/bg.jpg');
  background-position: center;
  background-size: cover;
  background-blend-mode: screen;
}

.hero-banner .title {
  display: inline-block;
  background-color: rgba(0,0,0, 0.6);
  padding: 5px;
}

</style>
