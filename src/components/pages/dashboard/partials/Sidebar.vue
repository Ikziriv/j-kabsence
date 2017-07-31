<template>
<aside class="menu">
  <p class="menu-label">
    General
  </p>
  <ul class="menu-list">
    <li>
    <router-link to="/dashboard" exact>Dashboard</router-link>
    </li>
    <li>
    <router-link to="/absensi" exact>Absensi</router-link>
    </li>
    <li>
    <router-link to="/noted" exact>Noted</router-link>
    </li>
  </ul>
</aside>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
