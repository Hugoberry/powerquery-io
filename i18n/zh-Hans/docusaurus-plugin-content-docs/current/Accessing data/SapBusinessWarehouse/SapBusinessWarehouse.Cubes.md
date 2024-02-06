---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


返回 SAP Business Warehouse 系统中按 InfoArea 分组的 InfoCube 和查询。


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

从 SAP Business Warehouse 实例(位于服务器 <code>server</code> 上，系统号为 <code>systemNumberOrSystemId</code>，客户端 ID 为 <code>clientId</code>)返回一个表，其中包含按 InfoArea 分组的 InfoCube 和查询。可以指定可选的记录参数 <code>optionsOrLogonGroup</code> 来控制以下选项:        



## Category
Accessing data
