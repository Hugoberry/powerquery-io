---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


Returnerar InfoCubes och frågor i ett SAP Business Warehouse-system grupperat efter InfoArea.


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

Returnerar en tabell med InfoCubes och frågor grupperade efter InfoArea från en SAP Business Warehouse-instans på servern <code>server</code> med systemnummer <code>systemNumberOrSystemId</code> och klient-ID <code>clientId</code>. Du kan ange en valfri postparameter, <code>optionsOrLogonGroup</code>, om du vill styra följande alternativ:        



## Category
Accessing data
