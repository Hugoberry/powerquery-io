---
title: Table.Max
---

# Table.Max


Retourneert met behulp van de opgegeven criteria de grootste rij of de standaardwaarde.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Retourneert aan de hand van de <code>comparisonCriteria</code> de grootste rij in de <code>table</code>. Als de tabel leeg is, wordt de optionele waarde <code>default</code> geretourneerd. 


## Examples

### Example #1 
De rij met de grootste waarde in kolom [a] in de tabel &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt; zoeken.
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
De rij met de grootste waarde in kolom [a] in de tabel &lt;code&gt;(\{})&lt;/code&gt; zoeken. Als de rij leeg is, wordt -1 geretourneerd.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
