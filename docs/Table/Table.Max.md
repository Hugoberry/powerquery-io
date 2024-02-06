---
title: Table.Max
---

# Table.Max


Returns the largest row or default value using the given criteria.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Returns the largest row in the <code>table</code>, given the <code>comparisonCriteria</code>. If the table is empty, the optional <code>default</code> value is returned. 


## Examples

### Example #1 
Find the row with the largest value in column [a] in the table &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;.
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
Find the row with the largest value in column [a] in the table &lt;code&gt;(\{})&lt;/code&gt;. Return -1 if empty.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
