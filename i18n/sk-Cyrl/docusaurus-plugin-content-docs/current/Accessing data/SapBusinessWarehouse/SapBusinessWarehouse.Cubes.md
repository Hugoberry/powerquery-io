---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


## Description

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


## Details

Vráti tabuľku oblastí InfoCube a dotazov zoskupených podľa oblasti InfoArea z inštancie SAP Business Warehouse na serveri <code>server</code> s číslom systému <code>systemNumberOrSystemId</code> a identifikáciou klienta <code>clientId</code>. Môžete zadať voliteľný parameter záznamu <code>optionsOrLogonGroup</code>, ktorý bude ovládať nasledujúce možnosti:        



## Category
Accessing data
