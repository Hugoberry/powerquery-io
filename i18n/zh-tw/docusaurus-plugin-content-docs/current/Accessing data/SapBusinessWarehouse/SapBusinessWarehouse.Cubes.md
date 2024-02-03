---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


## Description

傳回 InfoCubes 及 SAP Business Warehouse 系統中依 InfoArea 分組的查詢。


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

傳回 InfoCubes 的資料表及依 InfoArea (來自系統編號為 <code>systemNumberOrSystemId</code> 且用戶端識別碼為 <code>clientId</code> 的伺服器 <code>server</code> 上之 SAP Business Warehouse 執行個體) 分組的查詢。可指定選擇性的記錄參數 <code>optionsOrLogonGroup</code>，來控制下列選項:        



## Category
Accessing data
