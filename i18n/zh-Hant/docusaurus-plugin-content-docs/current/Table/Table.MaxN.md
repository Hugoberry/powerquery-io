---
title: Table.MaxN
---

# Table.MaxN


使用指定的準則傳回最大的資料列。


## Syntax

```powerquery
Table.MaxN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Remarks

指定 <code>comparisonCriteria</code> 之後，傳回 <code>table</code> 中最大的資料列。    當資料列經過排序之後，必須指定 <code>countOrCondition</code> 參數，才能進一步篩選結果。請注意，排序演算法不保證會有固定的排序結果。<code>countOrCondition</code> 參數可接受多種格式:    <ul>        <li> 若指定數字，將會以遞增順序傳回最多包含 <code>countOrCondition</code> 個項目的清單。</li>        <li> 若指定條件，將會傳回一開始即符合條件的項目清單。只要有任何項目不符合條件，便不再考慮其他項目。</li> </ul>


## Examples

### Example #1 
在資料表內符合條件 [a] &gt; 0 的 [a] 資料行中，找出值最大的資料列。系統會先排序資料列，然後再套用篩選。
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
在資料表內符合條件 [b] &gt; 0 的 [a] 資料行中，找出值最大的資料列。系統會先排序資料列，然後再套用篩選。
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
