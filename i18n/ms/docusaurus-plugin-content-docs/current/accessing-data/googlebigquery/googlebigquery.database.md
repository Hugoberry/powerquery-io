---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


Import data daripada pangkalan data Google BigQuery.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Remarks

Mengembalikan projek yang tersedia kepada penyenaraian jadual dalam Google BigQuery. Parameter rekod pilihan, `opsyen`, boleh ditentukan untuk mengawal opsyen berikut:

-   `ConnectionTimeout`: Tempoh yang mengawal berapa lama untuk menunggu sebelum meninggalkan percubaan bagi mewujudkan sambungan ke pelayan. Nilai lalai ialah nilai Tamat Masa Sambungan ODBC.
-   `CommandTimeout`: Tempoh yang mengawal berapa lama pertanyaan sebelah pelayan dibenarkan untuk dijalankan sebelum dibatalkan.
-   `BillingProject`: Id projek pengebilan. Nilai lalai ialah projek pertama yang tersedia.
-   `UseStorageApi`: Menentukan sama ada untuk menggunakan API Storan BigQuery untuk set hasil yang besar. Nila lalai ialah benar untuk menggunakan API Storan. Tetapkan kepada palsu untuk tidak menggunakan API Storan

Parameter rekod ditentukan sebagai \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Senaraikan projek yang tersedia dalam Google BigQuery
```powerquery
GoogleBigQuery.Database()
```



