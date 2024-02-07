---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


Devolve os InfoCubes e as consultas num sistema SAP Business Warehouse agrupados por InfoArea.


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

Devolve uma tabela de InfoCubes e consultas agrupados por InfoArea a partir de uma instância do SAP Business Warehouse no servidor <code>server</code> com o número de sistema <code>systemNumberOrSystemId</code> e o ID de Cliente <code>clientId</code>. É possível especificar um parâmetro de registo opcional, <code>optionsOrLogonGroup</code>, para controlar as seguintes opções:        



## Category
Accessing data
