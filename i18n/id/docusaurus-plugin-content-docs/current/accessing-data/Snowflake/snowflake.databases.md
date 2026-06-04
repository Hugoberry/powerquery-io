---
title: Snowflake.Databases
---

# Snowflake.Databases


Impor data dari gudang Komputasi Snowflake.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

Menampilkan tabel yang mencantumkan tabel dalam `gudang` Komputasi Snowflake yang ada di `server`. Parameter catatan opsional, `opsi`, dapat ditetapkan untuk mengontrol opsi berikut:

-   `Peran`: Nilai teks untuk digunakan sebagai nama Peran untuk koneksi.
-   `CreateNavigationProperties`: Nilai logika (true/false) yang mengatur apakah menghasilkan properti navigasi pada nilai yang dihasilkan (default-nya adalah true).
-   `ConnectionTimeout`: Jumlah detik untuk menunggu respons jaringan dari Snowflake.
-   `CommandTimeout`: Jumlah detik untuk menunggu kueri dijalankan.


## Examples

### Example #1
Daftar tabel dalam gudang Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



