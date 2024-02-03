---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


## Description

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


## Details

Menghasilkan tabel InfoCube dan kueri yang dikelompokkan berdasarkan InfoArea dari instans SAP Business Warehouse di server <code>server</code> dengan nomor sistem <code>systemNumberOrSystemId</code> dan ID Klien <code>clientId</code>. Parameter catatan opsional, <code>optionsOrLogonGroup</code>, dapat ditentukan untuk mengontrol opsi berikut::        



## Category
Accessing data
