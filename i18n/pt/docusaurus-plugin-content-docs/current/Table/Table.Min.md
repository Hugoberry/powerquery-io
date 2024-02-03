---
title: Table.Min
---

# Table.Min


## Description

Returns the smallest row or a default value using the given criteria.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

Returns the smallest row in the <code>table</code>, given the <code>comparisonCriteria</code>. If the table is empty, the optional <code>default</code> value is returned.


## Examples

### Example #1 
Find the row with the smallest value in column [a] in the table.
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
Find the row with the smallest value in column [a] in the table. Return -1 if empty.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
