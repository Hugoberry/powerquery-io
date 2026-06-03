---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


Returns the InfoCubes and queries in an SAP Business Warehouse system grouped by InfoArea.


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

Returns a table of InfoCubes and queries grouped by InfoArea from an SAP Business Warehouse instance at server `server` with system number `systemNumberOrSystemId` and Client ID `clientId`. An optional record parameter, `optionsOrLogonGroup`, may be specified to control the following options:



## Category
Accessing data
