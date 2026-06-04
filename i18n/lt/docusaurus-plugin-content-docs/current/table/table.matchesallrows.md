---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


Nurodoma, ar visos eilutės lentelėje atitinka nurodytą sąlygą.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Nurodoma, ar visos `table` eilutės atitinka nurodytą `condition`. Pateikiama `true`, jei visos eilutės atitinka; priešingu atveju pateikiama `false`.


## Examples

### Example #1
Nustatykite, ar visos stulpelio \[a\] eilučių reikšmės lentelėje yra lyginės.
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
Sužinokite, ar visos eilučių reikšmės lentelėje `({[a = 1, b = 2], [a = 3, b = 4]})` yra \[a = 1, b = 2\].
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
