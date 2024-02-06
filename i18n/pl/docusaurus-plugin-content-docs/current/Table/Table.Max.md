---
title: Table.Max
---

# Table.Max


Zwraca największy wiersz lub wartość domyślną, używając podanych kryteriów.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Zwraca największy wiersz w tabeli <code>table</code>, używając podanych kryteriów <code>comparisonCriteria</code>. Jeśli tabela jest pusta, jest zwracana opcjonalna wartość <code>default</code>. 


## Examples

### Example #1 
Znajdź wiersz mający największą wartość w kolumnie [a] w tabeli &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;.
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
Znajdź wiersz mający największą wartość w kolumnie [a] w tabeli &lt;code&gt;(\{})&lt;/code&gt;. Zwróć -1, jeśli tabela jest pusta.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
