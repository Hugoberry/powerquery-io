---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


Angiver, om nogen af rækkerne i tabellen opfylder den angivne betingelse.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Angiver, om nogen af rækkerne i tabellen `table` svarer til den angivne `condition`. Returnerer `true`, hvis nogen af rækkerne matcher. Ellers returneres `false`.


## Examples

### Example #1
Find ud af, om nogen af rækkeværdierne i kolonne \[a\] findes i tabellen `({[a = 2, b = 4], [a = 6, b = 8]})`.
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
Find ud af, om nogen af rækkeværdierne er \[a = 1, b = 2\] i tabellen `({[a = 1, b = 2], [a = 3, b = 4]})`.
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
