---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


Tiek norādīts, vai kāda no tabulas rindām atbilst norādītajam nosacījumam.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Tiek norādīts, vai kāda no `table` rindām atbilst norādītajam `condition`. Tiek atgriezta vērtība `true`, ja jebkura no rindām atbilst; pretējā gadījumā tiek atgriezta vērtība `false`.


## Examples

### Example #1
Nosakiet, vai kāda no kolonnas \[a\] rindu vērtībām ir vienāda tabulā `({[a = 2, b = 4], [a = 6, b = 8]})`.
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
Nosakiet, vai tabulā `({[a = 1, b = 2], [a = 3, b = 4]})` jebkura no rindu vērtībām ir \[a = 1, b = 2\].
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
