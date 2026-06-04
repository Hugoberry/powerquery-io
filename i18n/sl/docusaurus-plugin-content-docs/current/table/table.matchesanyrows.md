---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


Označuje, ali katera od vrstic v tabeli izpolnjuje dani pogoj.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Označuje, ali katera od vrstic v tabeli `table` ustreza danemu pogoju `condition`. Vrne `true`, če katera od vrstic ustreza pogoju, sicer vrne `false`.


## Examples

### Example #1
Ugotovite, ali je katera od vrednosti vrstic v stolpcu \[a\] sodo število v tabeli `({[a = 2, b = 4], [a = 6, b = 8]})`.
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
Ugotovite, ali je katera od vrednosti vrstic \[a = 1, b = 2\] v tabeli `({[a = 1, b = 2], [a = 3, b = 4]})`.
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
