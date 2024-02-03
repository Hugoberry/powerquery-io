---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


## Description

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


## Details

Vrne tabelo naborov InfoCube in poizvedb, ki so združeni po lastnosti "InfoArea", iz primerka skladišča SAP Business Warehouse v strežniku <code>server</code> s številko sistema <code>systemNumberOrSystemId</code> ID-jem odjemalca <code>clientId</code>. Navedete lahko izbirni parameter zapisa <code>optionsOrLogonGroup</code>, s katerim nadzorujete te možnosti:        



## Category
Accessing data
