<script setup lang="ts">
import TopNavigationComp from "../components/NavgationBar/TopNavigationComp.vue";
import FooterComp from "@/components/NavgationBar/FooterComp.vue";
import SectionConnectComp from "@/components/Index/SectionConnectComp.vue";
import SectionFaqDarkComp from "@/components/Index/SectionFaqDarkComp.vue";
import SectionFaqLightComp from "@/components/Index/SectionFaqLightComp.vue";
import SectionProjectComp from "@/components/Index/SectionProjectComp.vue";
import SectionIndustriesComp from "@/components/Index/SectionIndustriesComp.vue";
import SectionAnchorComp from "@/components/Index/SectionAnchorComp.vue";
import SectionFeaturedComp from "@/components/Index/SectionFeaturedComp.vue";
import SectionBannerComp from "@/components/Index/SectionBannerComp.vue";




</script>

<template>
  <TopNavigationComp/>
  <main>
    <SectionBannerComp/>
    <SectionFeaturedComp/>
    <SectionAnchorComp/>
    <SectionIndustriesComp/>
    <SectionProjectComp/>
    <SectionFaqLightComp/>
    <SectionFaqDarkComp/>
    <SectionConnectComp/>
  </main>
  <FooterComp/>
</template>

<style scoped lang="less">

main {
  margin-top: 120px;
}



</style>
