---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


Anger om alla raderna i tabellen uppfyller det angivna villkoret.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Anger om alla raderna i `table` matchar angivet `condition`. Returnerar `true` om alla raderna matchar. Annars returneras `false`.


## Examples

### Example #1
Kontrollera om alla radvärden i kolumnen \[a\] är jämna i tabellen.
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
Kontrollera om alla radvärden är \[a = 1, b = 2\] i tabellen `({[a = 1, b = 2], [a = 3, b = 4]})`.
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
