<template>
  <div class="home">
    <Navbar />
    <Carousel/>
    <Kotak/>
    <br>
    <h1 class="text-center" style="font-size : 75px !important" >Produk Terbaru Kami</h1>
    <Produk :produk="produk"/>
  </div>
</template>
<script>
import Navbar from "@/components/Frontend/Navbar.vue";
import Carousel from '@/components/Frontend/Carousel.vue'
import Kotak from '@/components/Frontend/Kotak.vue'
import Produk from '@/components/Frontend/Produk.vue'
import axios from 'axios'
// import Footer from '@/components/Footer.vue'
export default {
  name: "Beranda",
  components: {
    Navbar,
    Carousel,
    Kotak,
    Produk
  },
   data(){
    return {
      produk: []
    }
  },
  methods: {
    setProduk(data) {
      this.produk = data
    }
  },
  mounted() {
    axios
    .get("http://localhost:8009/api/Produk")
    .then((response) => this.setProduk(response.data))    
    .catch(function (error) {
      console.log(error)
    })
  }
}
</script>