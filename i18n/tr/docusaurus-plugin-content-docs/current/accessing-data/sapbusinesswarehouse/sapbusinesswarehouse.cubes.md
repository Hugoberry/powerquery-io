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

<code>server</code> sunucusundaki (sistem numarası: <code>systemNumberOrSystemId</code>, İstemci Kimliği: <code>clientId</code>) SAP Business Warehouse örneğinden InfoArea tarafından gruplandırılan InfoCubes ve sorguların bir tablosunu döndürür. <code>optionsOrLogonGroup</code>, isteğe bağlı bir kayıt parametresi olarak şu seçenekleri denetlemek üzere belirtilebilir:        



## Category
Accessing data
