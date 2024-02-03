---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


## Description

Pateikiami informacijos kubai ir užklausos „SAP Business Warehouse“ sistemoje, sugrupuoti pagal informacijos sritis.


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

Pateikiama InfoCubes ir užklausų, sugrupuotų pagal InfoArea, lentelė iš „SAP Business Warehouse“ egzemplioriaus serveryje <code>server</code>, kurio sistemos numeris <code>systemNumberOrSystemId</code>, o kliento ID <code>clientId</code>. Galima nurodyti pasirenkamą įrašo parametrą <code>optionsOrLogonGroup</code>, kad būtų galima valdyti šias parinktis:        



## Category
Accessing data
