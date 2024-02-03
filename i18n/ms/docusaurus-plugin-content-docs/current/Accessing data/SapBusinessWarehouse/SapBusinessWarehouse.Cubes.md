---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


## Description

Mengembalikan InfoCube dan pertanyaan dalam sistem SAP Business Warehouse yang dikumpulkan mengikut InfoArea.


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

Mengembalikan jadual InfoCube dan pertanyaan yang dikumpulkan mengikut InfoArea daripada tika SAP Business Warehouse di pelayan <code>server</code> dengan nombor sistem <code>systemNumberOrSystemId</code> dan ID Pelanggan <code>clientId</code>. Parameter rekod pilihan, <code>optionsOrLogonGroup</code>, boleh ditentukan untuk mengawal opsyen berikut:        



## Category
Accessing data
