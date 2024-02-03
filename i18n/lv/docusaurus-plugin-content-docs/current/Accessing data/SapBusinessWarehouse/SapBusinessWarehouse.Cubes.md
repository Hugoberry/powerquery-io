---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


## Description

SAP Business Warehouse sistēmā tiek atgrieztas InfoCubes vērtības un vaicājumi, grupējot pēc InfoArea.


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

Tiek atgriezta tabula, kurā ir ietvertas InfoCubes vērtības un vaicājumi, kas grupēti pēc InfoArea, no SAP Business Warehouse instances serverī <code>server</code> ar sistēmas numuru <code>systemNumberOrSystemId</code> un klienta ID <code>clientId</code>. Var norādīt neobligātu ieraksta parametru <code>optionsOrLogonGroup</code>, lai kontrolētu tālāk norādītās opcijas.        



## Category
Accessing data
