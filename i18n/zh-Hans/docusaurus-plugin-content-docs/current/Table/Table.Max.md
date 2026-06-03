---
title: Table.Max
---

# Table.Max


使用给定条件返回最大值行或默认值。


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

在给定 `comparisonCriteria` 的情况下，返回 `table` 中的最大值行。如果表为空，则返回可选的 `default` 值。


## Examples

### Example #1
查找表 `({[a = 2, b = 4], [a = 6, b = 8]})` 的列 \[a\] 中具有最大值的行。
```powerquery
Table.Max(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 6, b = 8]
```


### Example #2
查找表 `({})` 的列 \[a\] 中具有最大值的行。如果为空，则返回 -1。
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
