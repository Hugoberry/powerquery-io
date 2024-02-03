---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


## Description

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


## Details

Vraća tabelu InfoCube elemenata i upita grupisanih prema kriterijumu InfoArea iz SAP Business Warehouse instance na serveru <code>server</code> sa brojem sistema <code>systemNumberOrSystemId</code> i ID-om klijenta <code>clientId</code>. Opcionalni parametar zapisa <code>optionsOrLogonGroup</code> može da se navede za kontrolisanje sledećih opcija:        



## Category
Accessing data
