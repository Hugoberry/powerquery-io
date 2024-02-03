---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


## Description

對每個資料列的資料列內容套用量值，在包含結果的立方中加入資料行。


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Details

對每個資料列的資料列內容套用量值 <code>measureSelector</code>，在包含結果的 <code>cube</code> 中加入名稱為 <code>column</code> 的資料行。量值套用方式會受到維度資料粒度和切割變更的影響。量值會在某些立方作業執行後調整。



## Category
Cube
