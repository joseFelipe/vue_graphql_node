<template>
  <div>
    <div class="head text-center">
      <h2>Herocode</h2>
      <h6 class="text-secondary">
        Gerador de nomes utilizando VueJS, GrapQL e NodeJS
      </h6>
    </div>
    <DomainList></DomainList>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import DomainList from "./components/DomainList";

export default {
  name: "App",
  components: {
    DomainList,
  },
};
</script>

<style>
.head {
  margin: 40px 0 10px 0;
  padding-bottom: 10px;
}
</style>
