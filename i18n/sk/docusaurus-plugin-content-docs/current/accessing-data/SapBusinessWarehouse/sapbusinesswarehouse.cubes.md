---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


Vráti oblasti InfoCube a dotazy v systéme SAP Business Warehouse zoskupené podľa oblasti InfoArea.


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

Vráti tabuľku oblastí InfoCube a dotazov zoskupených podľa oblasti InfoArea z inštancie SAP Business Warehouse na serveri `server` s číslom systému `systemNumberOrSystemId` a identifikáciou klienta `clientId`. Môžete zadať voliteľný parameter záznamu `optionsOrLogonGroup`, ktorý bude ovládať nasledujúce možnosti:



## Category
Accessing data
