---
title: Table.Max
---

# Table.Max


Gibt anhand der angegebenen Kriterien die größte Zeile oder den Standardwert zurück.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Gibt die größte Zeile im Element vom Typ "`table`" anhand von "`comparisonCriteria`" zurück. Ist die Tabelle leer, wird der optionale Wert "`default`" zurückgegeben.


## Examples

### Example #1
Ermittelt in der Tabelle `({[a = 2, b = 4], [a = 6, b = 8]})` die Zeile mit dem größten Wert in Spalte "\[a\]".
```powerquery
Table.Max(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 6, b = 8]
```


### Example #2
Ermittelt in der Tabelle `({})` die Zeile mit dem größten Wert in Spalte "\[a\]". Ist die Tabelle leer, wird "-1" zurückgegeben.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
