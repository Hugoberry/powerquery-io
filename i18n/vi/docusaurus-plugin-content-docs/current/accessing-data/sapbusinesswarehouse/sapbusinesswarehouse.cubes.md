---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


Trả về InfoCubes và các truy vấn trong hệ thống SAP Business Warehouse được nhóm bởi InfoArea.


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

Trả về một bảng gồm InfoCubes và các truy vấn được nhóm theo InfoArea từ phiên bản SAP Business Warehouse tại máy chủ `server` có số hệ thống `systemNumberOrSystemId` và ID máy khách `clientId`. Có thể chỉ định tham số bản ghi tùy chọn, `optionsOrLogonGroup`, để kiểm soát các tùy chọn sau:



## Category
Accessing data
