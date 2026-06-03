---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


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


## Remarks

将指定维度表 `dimensionSelector` 合并到 `cube` 的筛选上下文中，并通过展开指定维度属性集 `attributeNames` 来更改维度粒度。维度属性将添加到含有名为 `newColumnNames` (如果未指定，则为 `attributeNames`)的列的表格视图。



## Category
Cube
