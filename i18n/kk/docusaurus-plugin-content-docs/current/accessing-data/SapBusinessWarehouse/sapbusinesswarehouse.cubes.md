---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


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


## Remarks

`systemNumberOrSystemId` жүйе нөмірі және `clientId` клиент идентификаторы бар `server` серверінде SAP Business Warehouse нұсқасынан InfoArea арқылы топталған InfoCubes кестелері мен сұрауларын қайтарады. Келесі параметрлерді басқару үшін `optionsOrLogonGroup` қосымша жазу параметрі көрсетілуі мүмкін:



## Category
Accessing data
