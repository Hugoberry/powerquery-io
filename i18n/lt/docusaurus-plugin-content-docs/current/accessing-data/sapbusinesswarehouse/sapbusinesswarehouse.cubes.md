---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


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


## Remarks

Pateikiama InfoCubes ir užklausų, sugrupuotų pagal InfoArea, lentelė iš „SAP Business Warehouse“ egzemplioriaus serveryje `server`, kurio sistemos numeris `systemNumberOrSystemId`, o kliento ID `clientId`. Galima nurodyti pasirenkamą įrašo parametrą `optionsOrLogonGroup`, kad būtų galima valdyti šias parinktis:



## Category
Accessing data
