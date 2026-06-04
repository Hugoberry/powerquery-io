---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


Impor data dari database Google BigQuery.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Remarks

Mengembalikan tabel yang mencantumkan proyek yang tersedia di Google BigQuery. Parameter catatan opsional, `opsi`, dapat ditentukan untuk mengontrol opsi berikut:

-   `ConnectionTimeout`: Durasi yang mengontrol berapa lama harus menunggu sebelum membatalkan upaya untuk membuat koneksi ke server. Nilai default adalah nilai Waktu Koneksi Habis ODBC.
-   `CommandTimeout`: Durasi yang mengontrol berapa lama kueri sisi server diizinkan untuk berjalan sebelum dibatalkan.
-   `BillingProject`: Id proyek tagihan. Nilai default adalah proyek pertama yang tersedia.
-   `UseStorageApi`: Menentukan apakah akan menggunakan API Penyimpanan BigQuery untuk kumpulan hasil yang besar. Nilai default true untuk menggunakan API Penyimpanan. Atur ke false untuk tidak menggunakan API Penyimpanan

Parameter catatan ditentukan sebagai \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Cantumkan proyek yang tersedia di Google BigQuery
```powerquery
GoogleBigQuery.Database()
```



