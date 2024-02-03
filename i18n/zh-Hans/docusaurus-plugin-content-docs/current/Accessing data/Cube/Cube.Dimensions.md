---
title: Cube.Dimensions
---

# Cube.Dimensions


## Description

返回包含可用维度集的表。


## Syntax

```powerquery
Cube.Dimensions(
    cube as table
) as table
```


## Details

返回包含 <code>cube</code> 中可用的维度集的表。每个维度均为包含维度属性集的表，而每个维度属性则表现为维度表中的一列。使用 Cube.AddAndExpandDimensionColumn 可展开多维数据集中的维度。



## Category
Cube
