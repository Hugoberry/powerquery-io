---
title: Snowflake.Databases
---

# Snowflake.Databases


## Description

Impor data dari gudang Komputasi Snowflake.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Details

Menampilkan tabel yang mencantumkan tabel dalam <code>gudang</code> Komputasi Snowflake yang ada di <code>server</code>. Parameter catatan opsional, <code>opsi</code>, dapat ditetapkan untuk mengontrol opsi berikut:<ul><li><code>Peran</code>: Nilai teks untuk digunakan sebagai nama Peran untuk koneksi.</li><li><code>CreateNavigationProperties</code>: Nilai logika (true/false) yang mengatur apakah menghasilkan properti navigasi pada nilai yang dihasilkan (default-nya adalah true).</li><li><code>ConnectionTimeout</code>: Jumlah detik untuk menunggu respons jaringan dari Snowflake.</li><li><code>CommandTimeout</code>: Jumlah detik untuk menunggu kueri dijalankan.</li></ul>    


## Examples

### Example #1 
Daftar tabel dalam gudang Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



