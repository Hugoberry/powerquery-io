---
title: Table.Max
---

# Table.Max


使用指定的準則傳回最大的資料列或預設值。


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

指定 `comparisonCriteria` 之後，傳回 `table` 中最大的資料列。如果資料表是空的，就會傳回選擇性 `default` 值。


## Examples

### Example #1
在資料表 `({[a = 2, b = 4], [a = 6, b = 8]})` 的資料行 \[a\] 中，尋找包含最大值的資料列。
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
在資料表 `({})` 的資料行 \[a\] 中，尋找包含最大值的資料列。如果是空的，則傳回 -1。
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
