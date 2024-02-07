---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


Gibt die InfoCubes und Abfragen in einem SAP Business Warehouse-System gruppiert nach InfoArea zurück.


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

Gibt eine nach InfoArea gruppierte Tabelle mit InfoCubes und Abfragen aus einer SAP Business Warehouse-Instanz auf dem Server "<code>server</code>" mit Systemnummer <code>systemNumberOrSystemId</code> und Client-ID "<code>clientId</code>" zurück. Ein optionaler Datensatzparameter "<code>optionsOrLogonGroup</code>" kann angegeben werden, um die folgenden Optionen zu steuern:        



## Category
Accessing data
