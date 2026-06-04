---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


Import data daripada HDInsight Interactive Query


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Mengembalikan senarai jadual daripada HDInsight Interactive Query yang ditentukan oleh `database` pada `server` HDInsight Interactive Query. Nombor port boleh ditentukan dengan pelayan secara pilihan, dipisahkan oleh noktah bertindih. Parameter `options` pilihan boleh ditentukan untuk mengawal pilihan berikut:

-   `ConnectionTimeout`: Tempoh yang mengawal jumlah masa yang diambil untuk menunggu sebelum meninggalkan percubaan membuat sambungan ke pelayan. Nilai lalai bergantung pada pemacu.
-   `CommandTimeout`: Tempoh yang mengawal jumlah masa pertanyaan sebelah pelayan dibenarkan berjalan sebelum dibatalkan. Nilai lalai bergantung pada pemacu.

Parameter `options` ditentukan sebagai \[option1 = value1, option2 = value2...\].


