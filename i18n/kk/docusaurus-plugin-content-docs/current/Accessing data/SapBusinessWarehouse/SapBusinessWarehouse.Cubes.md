---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


## Description

InfoArea арқылы топталған SAP Business Warehouse жүйесінде InfoCubes және сұрауларды қайтарады.


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

<code>systemNumberOrSystemId</code> жүйе нөмірі және <code>clientId</code> клиент идентификаторы бар <code>server</code> серверінде SAP Business Warehouse нұсқасынан InfoArea арқылы топталған InfoCubes кестелері мен сұрауларын қайтарады. Келесі параметрлерді басқару үшін <code>optionsOrLogonGroup</code> қосымша жазу параметрі көрсетілуі мүмкін:        



## Category
Accessing data
