---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


Devuelve los elementos InfoCubes y las consultas en un sistema SAP Business Warehouse agrupados por InfoArea.


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

Devuelve una tabla de elementos InfoCubes y consultas agrupados por InfoArea de una instancia de SAP Business Warehouse en el servidor <code>server</code> con el número de sistema <code>systemNumberOrSystemId</code> y el id. de cliente <code>clientId</code>. Se puede especificar un parámetro de registro opcional, <code>optionsOrLogonGroup</code>, para controlar las siguientes opciones:        



## Category
Accessing data
