---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


## Description

Az SAP Business Warehouse rendszerben előforduló InfoCubes-értékeket és lekérdezéseket InfoArea szerint csoportosítva adja vissza.


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

Egy, az InfoArea szerint csoportosított InfoCubes-értékeket és lekérdezéseket tartalmazó táblát ad vissza a(z) <code>server</code> kiszolgálón (rendszer száma: <code>systemNumberOrSystemId</code>, ügyfél-azonosító: <code>clientId</code>) található SAP Business Warehouse-példányból. Megadható egy választható rekordparaméter (<code>optionsOrLogonGroup</code>) a következő beállítások meghatározásához:        



## Category
Accessing data
