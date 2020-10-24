<template>
<div>
    <Navbar />
    <Sidebar/>
    <div class="content-wrapper">
      <div class="content">
        <div class="container-fluid">
          <div class="content-header">
    <Table :produk="produk" :kategori="kategori"/>
        </div>
    </div>
</div>
    </div>
</div>
</template>
<script>
import Navbar from "@/components/Backend/Navbar.vue";
import Sidebar from '@/components/Backend/Sidebar.vue'
import Table from '@/components/Backend/Table.vue'
// import Kotak from '@/components/Frontend/Kotak.vue'
// import Produk from '@/components/Frontend/Produk.vue'
import axios from 'axios'
// import Footer from '@/components/Footer.vue'
export default {
  name: "Beranda",
  components: {
    Navbar,
    Sidebar,
    // Carousel,
    // Kotak,
    // Produk,
    Table
  },
   data(){
    return {
      produk: []
    }
  },
    data2(){
    return {
      kategori: []  
        }
    },
  methods: {
    setProduk(data) {
      this.produk = data
    },
    setKategori(data2){
        this.kategori = data2 
    }
  },
  mounted() {
    axios
    .get("http://localhost:8009/api/Produk")
    .then((response) => this.setProduk(response.data))    
    .catch(function (error) {
      console.log(error)
    })
    axios.get("http://localhost:8009/api/Kategori")
    .then((response) => this.setKategori(response.data2))
  }
}
</script>