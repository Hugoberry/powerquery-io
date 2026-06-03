---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


Restituisce gli InfoCube e le query raggruppati per InfoArea in un sistema SAP Business Warehouse.


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

Restituisce una tabella di InfoCube e query raggruppati per InfoArea da un'istanza di SAP Business Warehouse nel server `server` con numero sistema `systemNumberOrSystemId` e ID client `clientId`. È possibile specificare un parametro di record facoltativo, `optionsOrLogonGroup`, per controllare le opzioni seguenti:



## Category
Accessing data
