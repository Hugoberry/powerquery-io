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

Trả về một bảng gồm InfoCubes và các truy vấn được nhóm theo InfoArea từ phiên bản SAP Business Warehouse tại máy chủ <code>server</code> có số hệ thống <code>systemNumberOrSystemId</code> và ID máy khách <code>clientId</code>. Có thể chỉ định tham số bản ghi tùy chọn, <code>optionsOrLogonGroup</code>, để kiểm soát các tùy chọn sau:        



## Category
Accessing data
