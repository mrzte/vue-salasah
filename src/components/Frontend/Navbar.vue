<template>
  <div id="navbar">
    <nav
      class="navbar navbar-expand-lg navbar-light fixed-top"
      style="background-color: #dddddd !important"
    >
      <div class="container">
        <a class="navbar-brand" href="#"><strong>Salasah</strong></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">Beranda</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/produkbaru"
                >Produk Baru</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Produk
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link class="dropdown-item" to="/mukena"
                  >Mukena</router-link
                >
                <router-link class="dropdown-item" to="/bajukoko"
                  >Baju Koko</router-link
                >
            
              </div>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="/keranjang"
                ><button class="btn btn badge-white"
                  ><b-icon-bag></b-icon-bag>
                  <span class="ml-1 badge badge-danger">0</span></button
                ></router-link
              >
            </li>
          </ul>
          
          <ul class="navbar-nav ml-3">
              <hr>
            <li class="nav-item active">
              <router-link class="nav-link" to="/login"
                ><button class="btn btn" style="background-color: white !important">Login</button></router-link
              >
            </li>
          </ul>
          <ul class="navbar-nav ml">
            <li class="nav-item active">
              <router-link class="nav-link" to="/login"
                ><button class="btn btn-border" style="background-color: white !important">Register</button></router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Navbar",
};
</script>
