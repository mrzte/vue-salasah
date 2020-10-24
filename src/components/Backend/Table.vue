<template>
<div class="card">
    <div class="card-body">
<div class="content-header">
  <div class="card-body">
    <button class="mb-3 btn btn-primary">
      Tambah Data<i class="ml-2 fas fa-plus"></i>
    </button>
    <table id="myTable" class="table table-bordered table-striped table-hover">
      <thead style="background-color: ">
        <tr>
          <th>No</th>
          <th>Id</th>
          <th>Kode/Nama Produk</th>
          <th>Deskripsi</th>
          <th>Harga Beli</th>
          <th>Harga Jual</th>
          <th>Kategori</th>
          <th>Dibuat Pada</th>
          <th>Terahir diperbarui</th>
          <th>Photo Produk</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(produk, key) in produk' :key="produk.id" >
          <td width="30px">{{key+1}}</td>
          <td width="30px">{{produk.id}}</td>
          <td width="400px">
            <span class="badge badge-success" v-if="produk.kode_barang == key+1">MTK222</span>
            {{produk.nama}}
          </td>
          <td>{{produk.deskripsi}}</td>
          <td>Rp.{{produk.harga_beli}}</td>
          <td>Rp.{{produk.harga_jual}}</td>
          <td v-if="produk.kategori == 1"> 
              Fashion
          </td>
          <td v-if="produk.kategori == 2"> 
              Baju Luar
          </td>
          <td>2020-10-11 13:38:03</td>
          <td>2020-10-11 13:38:03</td>
          <td></td>
          <td width="130px">
            <button class="btn btn-primary mr-2"><i class="fas fa-edit"></i></button>
            <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'table',
    props: ['produk','kategori']
}
</script>