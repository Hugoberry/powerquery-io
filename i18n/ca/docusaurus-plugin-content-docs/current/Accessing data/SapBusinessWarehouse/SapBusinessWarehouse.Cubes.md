---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


## Description

Retorna InfoCubes i les consultes d&#39;un sistema d&#39;emmagatzematge del SAP Business agrupats per l&#39;InfoArea.


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

Retorna una taula d'elements InfoCube i consultes agrupats pel valor "InfoArea" d'una instància del SAP Business Warehouse al servidor <code>server</code> amb el número de sistema <code>systemNumberOrSystemId</code> i l'ID de client <code>clientId</code>. Es pot especificar un paràmetre de registre opcional, <code>optionsOrLogonGroup</code>, per controlar les opcions següents:        



## Category
Accessing data
