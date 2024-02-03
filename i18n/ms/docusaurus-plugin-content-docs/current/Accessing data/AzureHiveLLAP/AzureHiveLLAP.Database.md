---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


## Description

Import data daripada HDInsight Interactive Query


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Mengembalikan senarai jadual daripada HDInsight Interactive Query yang ditentukan oleh <code>database</code> pada <code>server</code> HDInsight Interactive Query. Nombor port boleh ditentukan dengan pelayan secara pilihan, dipisahkan oleh noktah bertindih. Parameter <code>options</code> pilihan boleh ditentukan untuk mengawal pilihan berikut:<ul>        <li><code>ConnectionTimeout</code>: Tempoh yang mengawal jumlah masa yang diambil untuk menunggu sebelum meninggalkan percubaan membuat sambungan ke pelayan. Nilai lalai bergantung pada pemacu.</li>        <li><code>CommandTimeout</code>: Tempoh yang mengawal jumlah masa pertanyaan sebelah pelayan dibenarkan berjalan sebelum dibatalkan. Nilai lalai bergantung pada pemacu.</li></ul>Parameter <code>options</code> ditentukan sebagai [option1 = value1, option2 = value2...].


