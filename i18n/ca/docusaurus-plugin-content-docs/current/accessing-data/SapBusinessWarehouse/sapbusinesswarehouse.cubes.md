---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


Retorna InfoCubes i les consultes d'un sistema d'emmagatzematge del SAP Business agrupats per l'InfoArea.


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

Retorna una taula d'elements InfoCube i consultes agrupats pel valor "InfoArea" d'una instància del SAP Business Warehouse al servidor `server` amb el número de sistema `systemNumberOrSystemId` i l'ID de client `clientId`. Es pot especificar un paràmetre de registre opcional, `optionsOrLogonGroup`, per controlar les opcions següents:



## Category
Accessing data
