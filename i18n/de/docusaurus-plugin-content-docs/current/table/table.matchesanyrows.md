---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


Gibt an, ob mindestens eine der Zeilen in der Tabelle die angegebene Bedingung erfüllt.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Gibt an, ob mindestens eine der Zeilen im Element vom Typ "`table`" die Angabe "`condition`" erfüllt. Gibt `true` zurück, falls mindestens eine der Zeilen die Bedingung erfüllt. Andernfalls wird `false` zurückgegeben.


## Examples

### Example #1
Ermittelt, ob es sich bei mindestens einem Zeilenwert in Spalte "\[a\]" der Tabelle `({[a = 2, b = 4], [a = 6, b = 8]})` um einen geraden Wert handelt.
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
Ermittelt, ob es sich bei mindestens einem Zeilenwert der Tabelle `({[a = 1, b = 2], [a = 3, b = 4]})` um "\[a = 1, b = 2\]" handelt.
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
