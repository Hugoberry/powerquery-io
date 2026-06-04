---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


Nurodoma, ar kurios nors eilutės lentelėje atitinka nurodytą sąlygą.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Nurodoma, ar kurios nors `table` eilutės atitinka nurodytą `condition`. Pateikiama `true`, jei kurios nors eilutės atitinka; priešingu atveju pateikiama `false`.


## Examples

### Example #1
Nustatykite, ar kurios nors stulpelio \[a\] eilučių reikšmės lentelėje `({[a = 2, b = 4], [a = 6, b = 8]})` yra lyginės.
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
Nustatykite, ar kurios nors eilučių reikšmės lentelėje `({[a = 1, b = 2], [a = 3, b = 4]})` yra \[a = 1, b = 2\].
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
