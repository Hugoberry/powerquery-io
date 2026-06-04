---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


Devolve os InfoCubes e consultas dun sistema SAP Business Warehouse agrupados por InfoArea.


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

Devolve unha táboa de InfoCubes e consultas agrupados por InfoArea dunha instancia SAP Business Warehouse no servidor `server` co número de sistema `systemNumberOrSystemId` e o ID de cliente `clientId`. Pode especificarse un parámetro de rexistro opcional, `optionsOrLogonGroup`, para controlar as opcións seguintes:



## Category
Accessing data
