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

Gibt die größte Zeile im Element vom Typ "<code>table</code>" anhand von "<code>comparisonCriteria</code>" zurück. Ist die Tabelle leer, wird der optionale Wert "<code>default</code>" zurückgegeben. 


## Examples

### Example #1 
Ermittelt in der Tabelle &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt; die Zeile mit dem größten Wert in Spalte &#34;[a]&#34;.
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
Ermittelt in der Tabelle &lt;code&gt;(\{})&lt;/code&gt; die Zeile mit dem größten Wert in Spalte &#34;[a]&#34;. Ist die Tabelle leer, wird &#34;-1&#34; zurückgegeben.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
