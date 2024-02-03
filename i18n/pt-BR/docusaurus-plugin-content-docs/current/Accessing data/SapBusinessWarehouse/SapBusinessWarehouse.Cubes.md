---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


## Description

Retorna InfoCubes e consultas em um sistema SAP Business Warehouse agrupado por InfoArea.


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

Retorna uma tabela de InfoCubes e consultas agrupadas por InfoArea de uma instância do SAP Business Warehouse no servidor <code>server</code> com o número do sistema <code>systemNumberOrSystemId</code> e a ID do Cliente <code>clientId</code>. Um parâmetro de registro opcional, <code>optionsOrLogonGroup</code>, pode ser especificado para controlar as opções a seguir:        



## Category
Accessing data
