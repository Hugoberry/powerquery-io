---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


Gibt an, ob alle Zeilen in der Tabelle die angegebene Bedingung erfüllen.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Gibt an, ob alle Zeilen im Element vom Typ "`table`" die Angabe "`condition`" erfüllen. Gibt `true` zurück, falls alle Zeilen die Bedingung erfüllen. Andernfalls wird `false` zurückgegeben.


## Examples

### Example #1
Ermittelt, ob es sich bei allen Zeilenwerten in der Spalte "\[a\]" der Tabelle um gerade Werte handelt.
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
Ermittelt, ob es sich bei allen Zeilenwerten der Tabelle `({[a = 1, b = 2], [a = 3, b = 4]})` um "\[a = 1, b = 2\]" handelt.
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
