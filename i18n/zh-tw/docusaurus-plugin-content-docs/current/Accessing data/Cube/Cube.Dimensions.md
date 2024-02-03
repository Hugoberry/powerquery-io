---
title: Cube.Dimensions
---

# Cube.Dimensions


## Description

傳回包含可用維度集的資料表。


## Syntax

```powerquery
Cube.Dimensions(
    cube as table
) as table
```


## Details

傳回包含 <code>cube</code> 內可用維度集的資料表。每個維度是一個資料表，內含一組維度屬性，而每個維度屬性分別以維度資料表中的一個資料行表示。使用 Cube.AddAndExpandDimensionColumn 可以展開立方中的維度。



## Category
Cube
