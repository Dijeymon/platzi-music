<template lang="pug">
section.hero.is-success
  .hero-head
    header.nav
      .container
        .nav-left
          .nav-item
            strong Platzi Music
        .nav-right.nav-menu
          router-link.nav-item(to="/") Buscar
          router-link.nav-item(to="about") Nosotros

  .hero-body
    .container.has-text-centeredwith
      h1.title Platzi Music
      h2.subtitle Musica para tus oídos
      pm-player
</template>

<script>
import PmPlayer from "@/components/Player";
export default {
  components: {
    PmPlayer,
  },
};
</script>