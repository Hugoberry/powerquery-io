---
title: Table.ContainsAny
---

# Table.ContainsAny


Gibt an, ob mindestens einer der angegebenen Datensätze als Zeile in der Tabelle vorkommt.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Gibt an, ob mindestens einer der angegebenen Datensätze in der Liste mit Datensätzen (`rows`) als Zeile in "`table`" vorkommt. Der Vergleich zwischen den Zeilen der Tabelle kann mithilfe eines optionalen Parameters (`equationCriteria`) gesteuert werden.


## Examples

### Example #1
Ermittelt, ob die Tabelle `({[a = 1, b = 2], [a = 3, b = 4]})` die Zeile `[a = 1, b = 2]` oder `[a = 3, b = 5]` enthält.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 2],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
true
```


### Example #2
Ermittelt, ob die Tabelle `({[a = 1, b = 2], [a = 3, b = 4]})` die Zeile `[a = 1, b = 3]` oder `[a = 3, b = 5]` enthält.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
false
```


### Example #3
Ermittelt, ob die Tabelle `(Table.FromRecords({[a = 1, b = 2], [a = 3, b = 4]}))` die Zeile `[a = 1, b = 3]` oder `[a = 3, b = 5]` enthält, wobei lediglich die Spalte "\[a\]" verglichen wird.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    },
    "a"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership
