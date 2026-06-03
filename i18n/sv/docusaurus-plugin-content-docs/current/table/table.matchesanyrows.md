---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


Anger om någon av raderna i tabellen uppfyller det angivna villkoret.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Anger om någon av raderna i `table` matchar angivet `condition`. Returnerar `true` om någon av raderna matchar. Annars returneras `false`.


## Examples

### Example #1
Kontrollera om något av radvärdena i kolumnen \[a\] är jämnt i tabellen `({[a = 2, b = 4], [a = 6, b = 8]})`.
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
Kontrollera om något av radvärdena är \[a = 1, b = 2\] i tabellen `({[a = 1, b = 2], [a = 3, b = 4]})`.
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
