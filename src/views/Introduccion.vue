<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12
        .px-5
          p(data-aos="fade-down") Durante el presente componente tendrá la oportunidad de fortalecer sus conocimientos frente a la legislación laboral; por ende, es necesario que indague sobre las generalidades de contratos, nómina, beneficios a empleados y reconocimiento de los hechos presentados. Lo anterior se debe realizar teniendo en cuenta la normativa vigente.
          .row.mb-4
            .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
              p Para la elaboración de este componente, se abordaron varios autores conocidos en contratos de trabajo y liquidación de nómina, de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para usarlo por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de gestión contable e información financiera.
              .row
                .col-12
                  .p-4.bg-c2
                    p.mb-0 #[b Nota aclaratoria:] las tablas que se toman como referencia en los ejemplos en cada uno de los temas desarrollados, elaboradas mediante el programa Excel, son derivadas de los mismos, por lo tanto, no se numeran y la elaboración es propia del autor del presente componente.
            .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
              figure
                img(src='@/assets/curso/intro/img1.svg', alt='', style="width: 400px").m-auto

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
