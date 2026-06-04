---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


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


## Remarks

Mengembalikan jadual InfoCube dan pertanyaan yang dikumpulkan mengikut InfoArea daripada tika SAP Business Warehouse di pelayan `server` dengan nombor sistem `systemNumberOrSystemId` dan ID Pelanggan `clientId`. Parameter rekod pilihan, `optionsOrLogonGroup`, boleh ditentukan untuk mengawal opsyen berikut:



## Category
Accessing data
