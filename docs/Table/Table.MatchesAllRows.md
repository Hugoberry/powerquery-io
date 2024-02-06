---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


Indicates whether all the rows in the table meet the given condition.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Indicates whether all the rows in the <code>table</code> match the given <code>condition</code>. Returns <code>true</code> if all of the rows match, <code>false</code> otherwise.


## Examples

### Example #1 
Determine whether all of the row values in column [a] are even in the table.
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
true
```


### Example #2 
Find if all of the row values are [a = 1, b = 2], in the table &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
false
```




## Category
Table.Row operations
