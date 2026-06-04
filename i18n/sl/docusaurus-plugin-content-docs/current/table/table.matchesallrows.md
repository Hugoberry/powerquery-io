---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


Označuje, ali vse vrstice v tabeli izpolnjujejo dani pogoj.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Označuje, ali vse vrstice v tabeli `table` ustrezajo danemu pogoju `condition`. Vrne `true`, če vse vrstice ustrezajo pogoju, sicer vrne `false`.


## Examples

### Example #1
Ugotovite, ali so vse vrednosti vrstic v stolpcu \[a\] soda števila v tabeli.
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
Ugotovite, ali so vse vrednosti vrstic \[a = 1, b = 2\] v tabeli `({[a = 1, b = 2], [a = 3, b = 4]})`.
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
