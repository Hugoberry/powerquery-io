---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


## Description

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


## Details

Devolve unha táboa de InfoCubes e consultas agrupados por InfoArea dunha instancia SAP Business Warehouse no servidor <code>server</code> co número de sistema <code>systemNumberOrSystemId</code> e o ID de cliente <code>clientId</code>. Pode especificarse un parámetro de rexistro opcional, <code>optionsOrLogonGroup</code>, para controlar as opcións seguintes:        



## Category
Accessing data
