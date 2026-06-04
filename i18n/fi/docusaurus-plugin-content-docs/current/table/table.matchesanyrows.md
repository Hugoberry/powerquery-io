---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


Ilmaisee, täyttääkö mikään taulukon rivi annettua ehtoa.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Ilmaisee, täyttääkö mikään kohteen `table` rivi annettua ehtoa `condition`. Palauttaa arvon `true`, jos mikä tahansa rivi täsmää, ja muussa tapauksessa arvon `false`.


## Examples

### Example #1
Selvitä, onko mikään sarakkeen \[a\] rivien arvo parillinen taulukossa `({[a = 2, b = 4], [a = 6, b = 8]})`.
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
Selvitä, onko minkään rivin arvo \[a = 1, b = 2\] taulukossa `({[a = 1, b = 2], [a = 3, b = 4]})`.
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
