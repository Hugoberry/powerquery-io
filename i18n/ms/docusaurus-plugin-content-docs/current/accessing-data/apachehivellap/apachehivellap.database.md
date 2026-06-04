---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


Import data daripada Hive LLAP


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

Mengembalikan senarai jadual daripada Hive LLAP yang ditentukan oleh `pangkalan data` pada `pelayan` Hive LLAP menggunakan `protokol` yang dipilih. Nombor port mungkin ditentukan secara pilihan dengan pelayan, dipisahkan oleh noktah bertindih. Protokol Thrift Transport ialah jenis yang boleh dikira semula dengan nilai "Standard", "HTTP". Parameter `pilihan` boleh ditentukan untuk mengawal pilihan yang berikut:

-   `Tamat Masa Sambungan`: Tempoh yang mengawal jumlah masa yang diambil untuk menunggu sebelum meninggalkan percubaan membuat sambungan kepada pelayan. Nilai lalai ialah bergantung pada pemacu.
-   `Tamat Masa Perintah`: Tempoh yang mengawal jumlah masa pertanyaan sebelah pelayan dibenarkan berjalan sebelum dibatalkan. Nilai lalai bergantung pada pemacu.

Parameter `pilihan` ditentukan sebagai \[option1 = value1, option2 = value2...\].


