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

Gibt eine nach InfoArea gruppierte Tabelle mit InfoCubes und Abfragen aus einer SAP Business Warehouse-Instanz auf dem Server "`server`" mit Systemnummer `systemNumberOrSystemId` und Client-ID "`clientId`" zurück. Ein optionaler Datensatzparameter "`optionsOrLogonGroup`" kann angegeben werden, um die folgenden Optionen zu steuern:



## Category
Accessing data
