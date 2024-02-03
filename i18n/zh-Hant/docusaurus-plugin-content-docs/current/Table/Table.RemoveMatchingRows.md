---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


## Description

從資料表中移除所有出現的指定資料列。


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Details

從 <code>table</code> 中移除所有出現的指定 <code>rows</code>。    可指定選擇性參數 <code>equationCriteria</code> 以控制資料表資料列之間的比較方式。


## Examples

### Example #1 
從資料表 &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt; 中移除 [a = 1] 的任何資料列。
```powerquery
Table.RemoveMatchingRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = 1, b = 6]
    }),
    {[a = 1]},
    "a"
)
```

Result: 
```powerquery
Table.FromRecords({[a = 3, b = 4]})
```




## Category
Table.Membership
