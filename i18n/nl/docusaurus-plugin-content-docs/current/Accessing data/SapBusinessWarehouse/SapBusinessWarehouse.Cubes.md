---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


## Description

Retourneert de InfoCubes en query&#39;s in een SAP Business Warehouse-systeem, gegroepeerd op InfoArea.


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

Hiermee wordt een tabel met InfoCubes en query's geretourneerd, gegroepeerd op InfoArea, uit een SAP Business Warehouse-exemplaar op server <code>server</code> met systeemnummer <code>systemNumberOrSystemId</code> en client-id <code>clientId</code>. U kunt een optionele recordparameter, <code>optionsOrLogonGroup</code>, opgeven om de volgende opties te bepalen:        



## Category
Accessing data
