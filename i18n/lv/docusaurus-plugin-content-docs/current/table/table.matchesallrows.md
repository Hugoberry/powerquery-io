---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


Tiek norādīts, vai visas tabulas rindas atbilst norādītajam nosacījumam.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Tiek norādīts, vai `table` visas rindas atbilst norādītajam `condition`. Tiek atgriezta vērtība `true`, ja visas rindas atbilst; pretējā gadījumā tiek atgriezta vērtība `false`.


## Examples

### Example #1
Nosakiet, vai kolonnas \[a\] visas rindu vērtības ir vienādas tabulā.
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
Uzziniet, vai visas rindu vērtības ir \[a = 1, b = 2\] tabulā `({[a = 1, b = 2], [a = 3, b = 4]})`.
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
