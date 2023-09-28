<script lang="ts">
  import Titulo from "./Tituto.svelte";
  import Formulario from "./Formulario.svelte";
</script>

<header>
  <Titulo />

  <div class="busca-usuario">
    <Formulario on:aoAlterarUsuario />
  </div>
</header>

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .busca-usuario {
    position: relative;
    width: 70%;
  }
</style>
