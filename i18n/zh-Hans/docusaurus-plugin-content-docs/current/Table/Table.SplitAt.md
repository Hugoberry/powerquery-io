---
title: Table.SplitAt
---

# Table.SplitAt


返回包含指定第一个计数行和其余行的列表。


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Remarks

返回包含两个表的列表: 包含 <code>table</code> 的前 N 行(由 <code>count</code> 指定)的表和包含 <code>table</code> 的其余行的另一个表。 如果结果列表的表恰好枚举一次，且该函数将按顺序仅枚举 <code>table</code> 一次。


## Examples

### Example #1 
返回表的前 2 行和表的其余行。
```powerquery
Table.SplitAt(#table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}), 2)
```

Result: 
```powerquery
{
    #table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}}),
    #table({"a", "b", "c"}, {{7, 8, 9}})
}
```




## Category
Table.Row operations
