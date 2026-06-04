---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


Vraća InfoCube elemente i upite u SAP Business Warehouse sistemu, grupisane prema kriterijumu InfoArea.


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

Vraća tabelu InfoCube elemenata i upita grupisanih prema kriterijumu InfoArea iz SAP Business Warehouse instance na serveru `server` sa brojem sistema `systemNumberOrSystemId` i ID-om klijenta `clientId`. Opcionalni parametar zapisa `optionsOrLogonGroup` može da se navede za kontrolisanje sledećih opcija:



## Category
Accessing data
