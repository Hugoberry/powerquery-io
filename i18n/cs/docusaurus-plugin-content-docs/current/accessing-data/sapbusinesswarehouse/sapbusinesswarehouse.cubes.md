---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


Vrátí InfoCubes a dotazy v systému SAP Business Warehouse seskupené podle InfoArea.


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

Vrátí tabulku InfoCubes a dotazů seskupených podle InfoArea z instance SAP Business Warehouse na serveru `server` s číslem systému `systemNumberOrSystemId` a ID klienta `clientId`. Je možné zadat volitelný parametr záznamu `optionsOrLogonGroup`, který řídí následující možnosti:



## Category
Accessing data
