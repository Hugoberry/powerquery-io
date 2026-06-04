---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


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


## Remarks

Tiek atgriezta tabula, kurā ir ietvertas InfoCubes vērtības un vaicājumi, kas grupēti pēc InfoArea, no SAP Business Warehouse instances serverī `server` ar sistēmas numuru `systemNumberOrSystemId` un klienta ID `clientId`. Var norādīt neobligātu ieraksta parametru `optionsOrLogonGroup`, lai kontrolētu tālāk norādītās opcijas.



## Category
Accessing data
