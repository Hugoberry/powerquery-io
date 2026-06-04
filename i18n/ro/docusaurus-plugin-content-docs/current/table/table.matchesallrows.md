---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


Indică dacă toate rândurile din tabel îndeplinesc condiţia dată.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Indică dacă toate rândurile din `table` îndeplinesc `condition` dată. Returnează `true` dacă toate rândurile corespund; în caz contrar, returnează `false`.


## Examples

### Example #1
Determinați dacă toate valorile pentru rând din coloana \[a\] sunt pare în tabel.
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
Aflaţi dacă toate valorile pentru rând sunt \[a = 1, b = 2\], în tabelul `({[a = 1, b = 2], [a = 3, b = 4]})`.
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
