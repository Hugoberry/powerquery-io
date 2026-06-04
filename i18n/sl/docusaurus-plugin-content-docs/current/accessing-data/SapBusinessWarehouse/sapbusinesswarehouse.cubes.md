---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


Vrne nabore InfoCube in poizvedbe iz sistema SAP Business Warehouse, ki so združeni po lastnosti InfoArea.


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

Vrne tabelo naborov InfoCube in poizvedb, ki so združeni po lastnosti"InfoArea", iz primerka skladišča SAP Business Warehouse v strežniku `server` s številko sistema `systemNumberOrSystemId` ID-jem odjemalca `clientId`. Navedete lahko izbirni parameter zapisa `optionsOrLogonGroup`, s katerim nadzorujete te možnosti:



## Category
Accessing data
