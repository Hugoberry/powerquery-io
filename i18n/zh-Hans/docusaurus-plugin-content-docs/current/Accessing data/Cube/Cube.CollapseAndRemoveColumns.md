---
title: Cube.CollapseAndRemoveColumns
---

# Cube.CollapseAndRemoveColumns


## Description

通过折叠映射至指定列的属性，更改多维数据集筛选上下文的维度粒度。


## Syntax

```powerquery
Cube.CollapseAndRemoveColumns(
    cube as table,
    columnNames as list
) as table
```


## Details

通过折叠映射至指定列 <code>columnNames</code> 的属性，更改 <code>cube</code> 的筛选上下文的维度粒度。还将从多维数据集的表格视图中删除列。



## Category
Cube
