---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


## Description

Indicates whether any the rows in the table meet the given condition.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Details

Indicates whether any the rows in the <code>table</code> match the given <code>condition</code>. Returns <code>true</code> if any of the rows match, <code>false</code> otherwise.


## Examples

### Example #1 
Determine whether any of the row values in column [a] are even in the table &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;.
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 3, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
false
```


### Example #2 
Determine whether any of the row values are [a = 1, b = 2], in the table &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
true
```




## Category
Table.Row operations
