---
title: Table.Min
---

# Table.Min


## Description

使用指定的準則傳回最小的資料列或預設值。


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

指定 <code>comparisonCriteria</code> 之後，傳回 <code>table</code> 中最小的資料列。如果資料表是空的，就會傳回選擇性 <code>default</code> 值。


## Examples

### Example #1 
在資料表內的 [a] 資料行中，找出值最小的資料列。
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
在資料表內的 [a] 資料行中，找出值最小的資料列。如果是空的，則傳回 -1。
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
