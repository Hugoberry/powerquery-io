---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


## Description

Impor data dari Hive LLAP


## Syntax

```powerquery
ApacheHiveLLAP.Database(
    server as text,
    database as text,
    thriftTransport as number,
    optional options as record
) as table
```


## Details

Menghasilkan daftar tabel dari Hive LLAP yang ditentukan oleh <code>database</code> pada <code>server</code> Hive LLAP menggunakan <code>protokol</code> yang dipilih. Nomor port mungkin ditentukan secara opsional dengan server dan dipisahkan oleh titik dua. Protokol Thrift Transport merupakan tipe terbilang dengan nilai "Standard", "HTTP". Parameter <code>opsi</code> opsional mungkin ditentukan untuk mengontrol opsi berikut:<ul>        <li><code>ConnectionTimeout</code>: Durasi yang mengontrol waktu tunggu sebelum menghentikan upaya penyambungan ke server. Nilai defaultnya tergantung pada driver.</li>        <li><code>CommandTimeout</code>: Durasi yang mengontrol berapa lama kueri sisi server diizinkan untuk berjalan sebelum dibatalkan. Nilai defaultnya tergantung pada driver.</li></ul>Parameter <code>opsi</code> ditentukan sebagai [option1 = value1, option2 = value2...].


