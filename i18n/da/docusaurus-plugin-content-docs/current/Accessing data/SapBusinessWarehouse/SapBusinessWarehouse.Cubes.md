---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


## Description

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


## Details

Returnerer en tabel for InfoCubes og forespørgsler, der er grupperet af InfoArea, fra en SAP Business Warehouse-forekomst på serveren <code>server</code> med systemnummeret <code>systemNumberOrSystemId</code> og klient-id'et <code>clientId</code>. Der kan angives en valgfri postparameter, <code>optionsOrLogonGroup</code>, for at kontrollere følgende indstillinger:        



## Category
Accessing data
