---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


## Description

Impor data dari database Google BigQuery.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Details

      Mengembalikan tabel yang mencantumkan proyek yang tersedia di Google BigQuery. Parameter catatan opsional, opsi <code></code>, dapat ditentukan untuk mengontrol opsi berikut:       <ul>        <li><code>ConnectionTimeout</code>: Durasi yang mengontrol jumlah waktu tunggu sebelum membatalkan upaya untuk membuat sambungan ke server. Nilai default adalah nilai Batas Waktu Sambungan ODBC. </li>        <li><code>CommandTimeout</code>: Durasi yang mengontrol jumlah waktu kueri sisi server diizinkan untuk dijalankan sebelum dibatalkan. </li>        <li><code>BillingProject</code>: ID proyek penagihan. Nilai defaultnya adalah proyek pertama yang tersedia. </li>        <li><code>UseStorageApi</code>: Menentukan apakah akan menggunakan API Penyimpanan BigQuery untuk kumpulan hasil yang besar. Nilai defaultnya adalah true untuk menggunakan API Penyimpanan. Atur ke false agar tidak menggunakan API Penyimpanan</li>      </ul>    Parameter catatan ditetapkan sebagai [option1 = value1, option2 = value2...].    


## Examples

### Example #1 
Cantumkan proyek yang tersedia di Google BigQuery
```powerquery
GoogleBigQuery.Database()
```



