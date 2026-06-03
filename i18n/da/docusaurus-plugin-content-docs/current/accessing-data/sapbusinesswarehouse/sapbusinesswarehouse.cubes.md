---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


Returnerer InfoCubes og forespørgsler i et SAP Business Warehouse-system, der er grupperet af InfoArea.


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

Returnerer en tabel for InfoCubes og forespørgsler, der er grupperet af InfoArea, fra en SAP Business Warehouse-forekomst på serveren `server` med systemnummeret `systemNumberOrSystemId` og klient-id'et `clientId`. Der kan angives en valgfri postparameter, `optionsOrLogonGroup`, for at kontrollere følgende indstillinger:



## Category
Accessing data
