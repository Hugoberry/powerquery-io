---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


向多维数据集添加列，其中包含在每行的行上下文中应用的度量值的结果。


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Remarks

将名为 <code>column</code> 的列添加到 <code>cube</code>，其中包含在每行的行上下文中应用的度量值 <code>measureSelector</code> 的结果。度量值应用受维度粒度和切片的变化的影响。执行特定多维数据集操作后，系统会调整度量值。



## Category
Cube
