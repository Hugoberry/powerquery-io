---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


## Description

Retourne les InfoCubes et les requêtes d&#39;un système SAP Business Warehouse, regroupés par InfoArea.


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

Retourne une table d'InfoCubes et de requêtes regroupés par InfoArea à partir d'une instance SAP Business Warehouse sur le serveur <code>server</code> avec le numéro de système <code>systemNumberOrSystemId</code> et l'ID de client <code>clientId</code>. Vous pouvez spécifier un paramètre d'enregistrement facultatif, <code>optionsOrLogonGroup</code>, pour contrôler les options suivantes :        



## Category
Accessing data
