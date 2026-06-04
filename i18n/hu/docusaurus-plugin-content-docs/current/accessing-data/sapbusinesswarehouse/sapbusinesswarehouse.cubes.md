---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


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


## Remarks

Egy, az InfoArea szerint csoportosított InfoCubes-értékeket és lekérdezéseket tartalmazó táblát ad vissza a(z) `server` kiszolgálón (rendszer száma: `systemNumberOrSystemId`, ügyfél-azonosító: `clientId`) található SAP Business Warehouse-példányból. Megadható egy választható rekordparaméter (`optionsOrLogonGroup`) a következő beállítások meghatározásához:



## Category
Accessing data
