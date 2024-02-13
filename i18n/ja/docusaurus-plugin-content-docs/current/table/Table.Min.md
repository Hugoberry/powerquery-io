---
title: Table.Min
---

# Table.Min


指定された条件を使用して、最小の行または既定値を返します。


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

<code>comparisonCriteria</code> に基づいて <code>table</code> の最小の行を返します。テーブルが空の場合は、省略可能な <code>default</code> 値を返します。


## Examples

### Example #1 
テーブルで列 [a] の最小値を含む行を探します。
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
テーブルで列 [a] の最小値を含む行を探します。空の場合は、-1 を返します。
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
