<template>
   <div class="wrapper">
    <Sidebar />
    <Navbar />
    <div class="content-wrapper">
      <div class="content">
        <div class="container-fluid">
          <div class="content-header">
            <div class="row mb-2">
              <div class="col-sm-6"><h1 class="m-0 text-dark">Dasbor</h1></div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item">
                    <a href="/" style="color: grey">Beranda</a>
                  </li>
                  <li class="breadcrumb-item active text-primary">Dasbor</li>
                </ol>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-6">
              <div class="small-box bg-info">
                <div class="inner">
                  <h3>2</h3>
                  <p>Produk</p>
                </div>
                <div class="icon"><i class="fas fa-shopping-bag"></i></div>
                <a href="#" class="small-box-footer"
                  >Info Lebih Lanjut <i class="fas fa-arrow-circle-right"></i
                ></a>
              </div>
            </div>
            <div class="col-lg-3 col-6">
              <div class="small-box bg-success">
                <div class="inner">
                  <h3>53<sup style="font-size: 20px">%</sup></h3>
                  <p>Bounce Rate</p>
                </div>
                <div class="icon"><i class="ion ion-stats-bars"></i></div>
                <a href="#" class="small-box-footer"
                  >More info <i class="fas fa-arrow-circle-right"></i
                ></a>
              </div>
            </div>
            <div class="col-lg-3 col-6">
              <div class="small-box bg-warning">
                <div class="inner">
                  <h3>1</h3>
                  <p>Verifikasi Pengguna</p>
                </div>
                <div class="icon"><i class="fas fa-user-plus"></i></div>
                <a href="/user" class="small-box-footer"
                  >Info Lebih Lanjut <i class="fas fa-arrow-circle-right"></i
                ></a>
              </div>
            </div>
            <div class="col-lg-3 col-6">
              <div class="small-box bg-danger">
                <div class="inner">
                  <h3>65</h3>
                  <p>Unique Visitors</p>
                </div>
                <div class="icon"><i class="ion ion-pie-graph"></i></div>
                <a href="#" class="small-box-footer"
                  >More info <i class="fas fa-arrow-circle-right"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    <!-- /.content-wrapper -->
    <!-- /.control-sidebar -->
    <!-- <Footer /> -->
  </div>
</div>
</template>

<script>
import Sidebar from "@/components/Backend/Sidebar.vue";
import Navbar from "@/components/Backend/Navbar.vue";
export default {
  name: "Backend",
  components: {
    Navbar,
    Sidebar
  }
}
</script>