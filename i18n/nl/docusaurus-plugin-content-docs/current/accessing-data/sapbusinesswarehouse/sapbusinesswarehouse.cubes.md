---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


Retourneert de InfoCubes en query's in een SAP Business Warehouse-systeem, gegroepeerd op InfoArea.


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

Hiermee wordt een tabel met InfoCubes en query's geretourneerd, gegroepeerd op InfoArea, uit een SAP Business Warehouse-exemplaar op server `server` met systeemnummer `systemNumberOrSystemId` en client-id `clientId`. U kunt een optionele recordparameter, `optionsOrLogonGroup`, opgeven om de volgende opties te bepalen:



## Category
Accessing data
