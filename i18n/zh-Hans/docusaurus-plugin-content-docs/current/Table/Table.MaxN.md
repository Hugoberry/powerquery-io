---
title: Table.MaxN
---

# Table.MaxN


使用给定条件返回最大值行。


## Syntax

```powerquery
Table.MaxN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Remarks

在给定 <code>comparisonCriteria</code> 的情况下，返回 <code>table</code> 中的最大值行。    在对行排序后，必须指定 <code>countOrCondition</code> 参数以进一步筛选结果。注意，排序算法无法保证固定的排序结果。<code>countOrCondition</code> 参数可以采用多种格式:    <ul>        <li> 如果指定一个数，则返回以升序排序的、最多包含 <code>countOrCondition</code> 项的列表。</li>        <li> 如果指定条件，则返回最初满足该条件的项列表。如果某个项不满足该条件，则不再考虑其他项。</li> </ul>


## Examples

### Example #1 
查找表中在列 [a] 中具有最大值且条件 [a] &gt; 0 的行。在应用筛选器之前，先对行排序。
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 6, b = 2],
    [a = 2, b = 4]
})
```


### Example #2 
查找表中在列 [a] 中具有最大值且条件 [b] &gt; 0 的行。在应用筛选器之前，先对行排序。
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] > 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
