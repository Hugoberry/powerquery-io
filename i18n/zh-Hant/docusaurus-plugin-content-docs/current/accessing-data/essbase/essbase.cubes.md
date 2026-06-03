---
title: Essbase.Cubes
---

# Essbase.Cubes


傳回 Essbase 執行個體中依 Essbase 伺服器分組的 Cube。


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Remarks

從位於 APS 伺服器 `url` 的 Essbase 執行個體傳回依 Essbase 伺服器分組的 Cube 表。可指定選用記錄參數 `options` 來控制下列選項:

-   `CommandTimeout` : 控制伺服器端查詢在取消之前，可以執行的持續時間長度。預設值為十分鐘。



## Category
Accessing data
