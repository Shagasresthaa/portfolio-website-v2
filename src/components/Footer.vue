<template>
  <footer>
    <p><b>© Shaga Sresthaa, 2023</b></p>
    <span class="fhead">
      <a
        href="https://www.digitalocean.com/?refcode=85f458f92f16&amp;utm_campaign=Referral_Invite&amp;utm_medium=Referral_Program&amp;utm_source=badge"
      >
        <img
          src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg"
          alt="DigitalOcean Referral Badge"
          class="flogo"
        />
      </a>
      <br />
    </span>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterMain",
});
</script>

<style scoped>
footer {
  background: #0a4275;
  color: #fff;
  padding: 10px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center; /* Center children horizontally */
  align-items: center; /* Center children vertically */
}

.fhead {
  margin-left: 20px; /* Add some space between the text and the badge */
}

p {
  margin: 0;
  text-align: center;
}
</style>
