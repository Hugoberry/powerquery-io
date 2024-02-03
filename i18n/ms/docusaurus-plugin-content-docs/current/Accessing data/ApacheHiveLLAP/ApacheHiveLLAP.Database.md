---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


## Description

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


## Details

Mengembalikan senarai jadual daripada Hive LLAP yang ditentukan oleh <code>pangkalan data</code> pada <code>pelayan</code> Hive LLAP menggunakan <code>protokol</code> yang dipilih. Nombor port mungkin ditentukan secara pilihan dengan pelayan, dipisahkan oleh noktah bertindih. Protokol Thrift Transport ialah jenis yang boleh dikira semula dengan nilai "Standard", "HTTP". Parameter <code>pilihan</code> boleh ditentukan untuk mengawal pilihan yang berikut:<ul>        <li><code>Tamat Masa Sambungan</code>: Tempoh yang mengawal jumlah masa yang diambil untuk menunggu sebelum meninggalkan percubaan membuat sambungan kepada pelayan. Nilai lalai ialah bergantung pada pemacu.</li>        <li><code>Tamat Masa Perintah</code>: Tempoh yang mengawal jumlah masa pertanyaan sebelah pelayan dibenarkan berjalan sebelum dibatalkan. Nilai lalai bergantung pada pemacu.</li></ul>Parameter <code>pilihan</code> ditentukan sebagai [option1 = value1, option2 = value2...].


