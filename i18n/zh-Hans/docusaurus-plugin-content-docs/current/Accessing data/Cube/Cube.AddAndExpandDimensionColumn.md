---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


## Description

将指定维度表合并到多维数据集的筛选上下文中，并通过展开指定维度属性集来更改筛选上下文的维度粒度。


## Syntax

```powerquery
Cube.AddAndExpandDimensionColumn(
    cube as table,
    dimensionSelector as any,
    attributeNames as list,
    optional newColumnNames as any
) as table
```


## Details

将指定维度表 <code>dimensionSelector</code> 合并到多维数据集 <code>cube</code> 的筛选上下文中，并通过展开指定维度属性集 <code>attributeNames</code> 来更改维度粒度。维度属性将添加到含有名为 <code>newColumnNames</code> (如果未指定，则为 <code>attributeNames</code>)的列的表格视图。



## Category
Cube
