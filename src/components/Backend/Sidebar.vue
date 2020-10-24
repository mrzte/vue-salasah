<template>
   <aside class="main-sidebar sidebar-dark-primary elevation-4">

    <a href="index3.html" class="brand-link">
      <img src="http://localhost:7000/img/logo.png" alt="logo" class="brand-image img-circle elevation-3"
           style="opacity: .8">
      <span class="brand-text font-weight-light">Salasah</span>
    </a>

    <div class="sidebar" id="app">

      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="http://localhost:7000/img/user.jpg" class="img-circle elevation-2" alt="User Image">
           </div>
           <div class="info">
           <a href="#" class="d-block">Admin <br> 
          <span class="ml-1 right badge badge-success">Admin</span></a>
        </div>
      </div>

      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li class="nav-item has-treeview menu">
            <router-link to="/admin/dasbor" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dasbor
              </p>
            </router-link>
          </li>
          <li class="nav-item has-treeview menu">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-cogs"></i>
              <p>
                Manajemen
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/admin/produk" class="nav-link">
                  <i class="fas fa-box nav-icon"></i>
                  <p>Produk</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/kategori" class="nav-link">
                  <i class="fas fa-list-alt nav-icon"></i>
                  <p>Kategori</p>
                </router-link>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fas fa-clipboard nav-icon"></i>
                  <p>Pesanan</p>
                </a>
              </li>
              <li class="nav-item">
                <router-link to="/role" class="nav-link">
                  <i class="fas fa-archway nav-icon"></i>
                  <p>Hak Akses</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/user" class="nav-link">
                  <i class="fas fa-users nav-icon"></i>
                  <p>Pengguna</p>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

    </div>
    
  </aside>
</template>