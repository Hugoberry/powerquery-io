---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


Membuat InfoCube dan kueri dalam sistem SAP Business Warehouse yang dikelompokkan berdasarkan InfoArea.


## Syntax

```powerquery
SapBusinessWarehouse.Cubes(
    server as text,
    systemNumberOrSystemId as text,
    clientId as text,
    optional optionsOrLogonGroup as any,
    optional options as record
) as table
```


## Remarks

Menghasilkan tabel InfoCube dan kueri yang dikelompokkan berdasarkan InfoArea dari instans SAP Business Warehouse di server `server` dengan nomor sistem `systemNumberOrSystemId` dan ID Klien `clientId`. Parameter catatan opsional, `optionsOrLogonGroup`, dapat ditentukan untuk mengontrol opsi berikut::



## Category
Accessing data
