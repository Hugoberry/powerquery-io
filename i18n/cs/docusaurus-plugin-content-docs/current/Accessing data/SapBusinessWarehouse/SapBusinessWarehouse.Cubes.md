---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


## Description

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


## Details

Vrátí tabulku InfoCubes a dotazů seskupených podle InfoArea z instance SAP Business Warehouse na serveru <code>server</code> s číslem systému <code>systemNumberOrSystemId</code> a ID klienta <code>clientId</code>. Je možné zadat volitelný parametr záznamu <code>optionsOrLogonGroup</code>, který řídí následující možnosti:        



## Category
Accessing data
