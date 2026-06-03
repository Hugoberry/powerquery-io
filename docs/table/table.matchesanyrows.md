---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


Indicates whether any the rows in the table meet the given condition.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Indicates whether any the rows in the `table` match the given `condition`. Returns `true` if any of the rows match, `false` otherwise.


## Examples

### Example #1
Determine whether any of the row values in column \[a\] are even in the table `({[a = 2, b = 4], [a = 6, b = 8]})`.
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
Determine whether any of the row values are \[a = 1, b = 2\], in the table `({[a = 1, b = 2], [a = 3, b = 4]})`.
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
