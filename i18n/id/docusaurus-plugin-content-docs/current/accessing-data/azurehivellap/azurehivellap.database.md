---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


Impor data dari HDInsight Interactive Query


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Menghasilkan daftar tabel dari HDInsight Interactive Query yang ditentukan oleh `database` pada `server` HDInsight Interactive Query. Nomor port mungkin ditentukan secara opsional dengan server dan dipisahkan oleh titik dua. Parameter `opsi` opsional mungkin ditentukan untuk mengontrol opsi berikut:

-   `ConnectionTimeout`: Durasi yang mengontrol waktu tunggu sebelum menghentikan upaya penyambungan koneksi ke server. Nilai defaultnya tergantung pada driver.
-   `CommandTimeout`: Durasi yang mengontrol berapa lama kueri sisi server diizinkan untuk berjalan sebelum dibatalkan. Nilai defaultnya tergantung pada driver.

Parameter `options` ditentukan sebagai \[option1 = value1, option2 = value2...\].


