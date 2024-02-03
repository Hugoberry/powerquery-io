---
title: Cube.CollapseAndRemoveColumns
---

# Cube.CollapseAndRemoveColumns


## Description

Changes the dimensional granularity of the filter context for the cube by collapsing the attributes mapped to the specified columns.


## Syntax

```powerquery
Cube.CollapseAndRemoveColumns(
    cube as table,
    columnNames as list
) as table
```


## Details

Changes the dimensional granularity of the filter context for the <code>cube</code> by collapsing the attributes mapped to the specified columns <code>columnNames</code>. The columns are also removed from the tabular view of the cube.



## Category
Cube
