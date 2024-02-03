---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


## Description

Import data daripada pangkalan data Google BigQuery.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Details

      Mengembalikan jadual yang menyenaraikan projek yang tersedia dalam Google BigQuery. Parameter rekod pilihan, <code>pilihan</code>, boleh ditentukan untuk mengawal pilihan berikut:      <ul>        <li><code>ConnectionTimeout</code>: Tempoh yang mengawal masa menunggu sebelum meninggalkan percubaan mewujudkan sambungan kepada pelayan. Nilai lalai ialah nilai Tamat Masa Sambungan ODBC.</li>        <li><code>CommandTimeout</code>: Tempoh yang mengawal jangka masa pertanyaan bahagian pelayan dibenarkan berjalan sebelum ia dibatalkan.</li>        <li><code>BillingProject</code>: Id projek pengebilan. Nilai lalai ialah projek pertama yang tersedia.</li>        <li><code>UseStorageApi</code>: Menentukan sama ada mahu menggunakan BigQuery Storan API untuk set hasil yang besar. Nilai lalai adalah benar untuk menggunakan Storan API. Tetapkan kepada palsu untuk tidak menggunakan Storan API</li>      </ul>    Parameter rekod ditentukan sebagai [option1 = value1, option2 = value2...].


## Examples

### Example #1 
Senaraikan projek yang tersedia dalam Google BigQuery
```powerquery
GoogleBigQuery.Database()
```



