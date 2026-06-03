---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


SAP Business Warehouse sisteminde InfoArea tarafından gruplandırılan InfoCubes ve sorguları döndürür.


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

`server` sunucusundaki (sistem numarası: `systemNumberOrSystemId`, İstemci Kimliği: `clientId`) SAP Business Warehouse örneğinden InfoArea tarafından gruplandırılan InfoCubes ve sorguların bir tablosunu döndürür. `optionsOrLogonGroup`, isteğe bağlı bir kayıt parametresi olarak şu seçenekleri denetlemek üzere belirtilebilir:



## Category
Accessing data
