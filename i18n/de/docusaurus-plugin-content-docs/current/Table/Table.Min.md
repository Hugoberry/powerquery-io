---
title: Table.Min
---

# Table.Min


## Description

Gibt anhand der angegebenen Kriterien die kleinste Zeile oder den Standardwert zurück.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

Gibt die kleinste Zeile im Element vom Typ "<code>table</code>" anhand von "<code>comparisonCriteria</code>" zurück. Ist die Tabelle leer, wird der optionale Wert "<code>default</code>" zurückgegeben.


## Examples

### Example #1 
Ermittelt in der Tabelle die Zeile mit dem kleinsten Wert in der Spalte &#34;[a]&#34;.
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
Ermittelt in der Tabelle die Zeile mit dem kleinsten Wert in der Spalte &#34;[a]&#34;. Ist die Spalte leer, wird &#34;-1&#34; zurückgegeben.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
