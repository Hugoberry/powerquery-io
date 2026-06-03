---
title: Table.Min
---

# Table.Min


Gibt anhand der angegebenen Kriterien die kleinste Zeile oder den Standardwert zurück.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Gibt die kleinste Zeile im Element vom Typ "`table`" anhand von "`comparisonCriteria`" zurück. Ist die Tabelle leer, wird der optionale Wert "`default`" zurückgegeben.


## Examples

### Example #1
Ermittelt in der Tabelle die Zeile mit dem kleinsten Wert in der Spalte "\[a\]".
```powerquery
Table.Min(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 2, b = 4]
```


### Example #2
Ermittelt in der Tabelle die Zeile mit dem kleinsten Wert in der Spalte "\[a\]". Ist die Spalte leer, wird "-1" zurückgegeben.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
