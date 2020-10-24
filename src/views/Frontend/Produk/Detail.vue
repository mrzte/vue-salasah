<template>
  <div class="container">
    <Navbar />
     <br />
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Library</a></li>
        <li class="breadcrumb-item active" aria-current="page">Data</li>
      </ol>
    </nav>
    <br />
    <br />
    <div class="col">
      <div class="d-flex h-100 mt-5">
        <div id="carousel">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100 h-400"
                  height="400px"
                  src="https://dompetalquran.or.id/wp-content/uploads/2018/08/4-6-1.png"
                  alt="First slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100 h-400"
                  height="400px"
                  src="https://www.ordersanaya.com/image-product/img3882-1539314738.jpg"
                  alt="Second slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100 h-400"
                  height="400px"
                  src="http://sf.co.ua/12/11/wallpaper-2422195.jpg"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>

        <div class="col-lg-6 h-100 pm-10">
          <h1><strong>{{produk.nama}}</strong></h1>
          <p>Di jual oleh <strong> Lucifer </strong></p>
          <div style="color: gold">
            <b-icon-star-fill></b-icon-star-fill>
            <b-icon-star-fill></b-icon-star-fill>
            <b-icon-star-fill></b-icon-star-fill>
            <b-icon-star-fill></b-icon-star-fill>
            <b-icon-star-fill></b-icon-star-fill>
          </div>
          <hr />
          <h4><strong> Harga </strong> Rp.{{produk.harga_jual}}</h4>
          <br />
          <h4>Pilih Varian Warna :</h4>
          <div class="row">
            <div class="col-sm-1 mr-3">
              <button class="btn btn-primary">Biru</button>
            </div>
            <div class="col-sm-1 mr-4">
              <button class="btn btn-success">Hijau</button>
            </div>
            <div class="col-sm-1 mr-3">
              <button class="btn btn-warning">Kuning</button>
            </div>
          </div>
          <br />
          <br />
          <h4>Jumlah :</h4>
        </div>
      </div>
    </div>
    <div class="mt-3 ml-3">
      <h3>Deskripsi Produk</h3>
      <p>{{produk.deskripsi}}</p>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Frontend/Navbar.vue";
import axios from 'axios'
export default {
  name: "Detail",
  components: {
    Navbar,
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
    .get("http://localhost:8009/api/Produk/"+this.$route.params.id)
    .then((response) => this.setProduk(response.data))    
    .catch(function (error) {
      console.log(error)
    })
    axios.get("http://localhost:8009/api/Kategori")
    .then((response) => this.setKategori(response.data2))
  }
};
</script>