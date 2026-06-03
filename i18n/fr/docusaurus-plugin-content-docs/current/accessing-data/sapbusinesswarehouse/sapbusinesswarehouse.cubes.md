---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


Retourne les InfoCubes et les requêtes d'un système SAP Business Warehouse, regroupés par InfoArea.


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

Retourne une table d'InfoCubes et de requêtes regroupés par InfoArea à partir d'une instance SAP Business Warehouse sur le serveur `server` avec le numéro de système `systemNumberOrSystemId` et l'ID de client `clientId`. Vous pouvez spécifier un paramètre d'enregistrement facultatif, `optionsOrLogonGroup`, pour contrôler les options suivantes :



## Category
Accessing data
