---
title: Table.Min
---

# Table.Min


## Description

使用给定条件返回最小值行或默认值。


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

在给定 <code>comparisonCriteria</code> 的情况下，返回 <code>table</code> 中的最小值行。如果表为空，则返回可选的 <code>default</code> 值。


## Examples

### Example #1 
查找表的列 [a] 中具有最小值的行。
```powerquery
Table.Min(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 2, b = 4]
```


### Example #2 
查找表的列 [a] 中具有最小值的行。如果为空，则返回 -1。
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
