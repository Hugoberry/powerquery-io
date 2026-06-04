---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


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


## Remarks

Menghasilkan daftar tabel dari Hive LLAP yang ditentukan oleh `database` pada `server` Hive LLAP menggunakan `protokol` yang dipilih. Nomor port mungkin ditentukan secara opsional dengan server dan dipisahkan oleh titik dua. Protokol Thrift Transport merupakan tipe terbilang dengan nilai "Standard", "HTTP". Parameter `opsi` opsional mungkin ditentukan untuk mengontrol opsi berikut:

-   `ConnectionTimeout`: Durasi yang mengontrol waktu tunggu sebelum menghentikan upaya penyambungan ke server. Nilai defaultnya tergantung pada driver.
-   `CommandTimeout`: Durasi yang mengontrol berapa lama kueri sisi server diizinkan untuk berjalan sebelum dibatalkan. Nilai defaultnya tergantung pada driver.

Parameter `opsi` ditentukan sebagai \[option1 = value1, option2 = value2...\].


