<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-sm-4 mb-3 mt-3" v-for="produk in produk" :key="produk.id" >
        <div class="card shadow">
          <img
            class="card-img-top"
            src="https://www.ordersanaya.com/image-product/img3882-1539314738.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">{{produk.nama}}</h5>
            <p class="card-text">
              Rp.{{produk.harga_jual}}
            </p>
            <a href="#" class="btn btn-success mr-2"><b-icon-bag></b-icon-bag></a>
            <!-- <a href="#" class="btn btn-warning mr-2"><b-icon-heart></b-icon-heart></a> -->
            <router-link :to="'/detail/'+produk.id" class="btn btn-primary mr-2"><b-icon-eye></b-icon-eye></router-link>
          </div>
        </div>
      </div>
      
      
     
    </div>
  </div>
</template>
<script>
// import axios from 'axios'
export default {
  name: "Produk",
  props: ['produk']

};
</script>