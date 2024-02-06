---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


以提供的資料列取代所有指定的資料列。


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Remarks

以提供的資料列取代 <code>table</code> 中所有指定的資料列。要取代的資料列和取代項目會使用 \{old, new} 格式在 <code>replacements</code> 中指定。    可指定選擇性 <code>equationCriteria</code> 參數以控制資料表資料列之間的比較方式。


## Examples

### Example #1 
以 [a = -1, b = -2],[a = -2, b = -3] 取代資料表中的 [a = 1, b = 2] 和 [a = 2, b = 3] 資料列。
```powerquery
Table.ReplaceMatchingRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 2, b = 3],
        [a = 3, b = 4],
        [a = 1, b = 2]
    }),
    {
        {[a = 1, b = 2], [a = -1, b = -2]},
        {[a = 2, b = 3], [a = -2, b = -3]}
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = -1, b = -2],
    [a = -2, b = -3],
    [a = 3, b = 4],
    [a = -1, b = -2]
})
```




## Category
Table.Membership
