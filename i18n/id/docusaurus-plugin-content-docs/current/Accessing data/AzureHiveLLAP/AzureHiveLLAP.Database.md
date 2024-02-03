---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


## Description

Impor data dari HDInsight Interactive Query


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Menghasilkan daftar tabel dari HDInsight Interactive Query yang ditentukan oleh <code>database</code> pada <code>server</code> HDInsight Interactive Query. Nomor port mungkin ditentukan secara opsional dengan server dan dipisahkan oleh titik dua. Parameter <code>opsi</code> opsional mungkin ditentukan untuk mengontrol opsi berikut:<ul>        <li><code>ConnectionTimeout</code>: Durasi yang mengontrol waktu tunggu sebelum menghentikan upaya penyambungan koneksi ke server. Nilai defaultnya tergantung pada driver.</li>        <li><code>CommandTimeout</code>: Durasi yang mengontrol berapa lama kueri sisi server diizinkan untuk berjalan sebelum dibatalkan. Nilai defaultnya tergantung pada driver.</li></ul>Parameter <code>options</code> ditentukan sebagai [option1 = value1, option2 = value2...].


