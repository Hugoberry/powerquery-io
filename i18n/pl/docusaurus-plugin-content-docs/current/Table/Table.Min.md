---
title: Table.Min
---

# Table.Min


Zwraca najmniejszy wiersz lub wartość domyślną, używając podanych kryteriów.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Zwraca najmniejszy wiersz w tabeli <code>table</code>, używając podanych kryteriów <code>comparisonCriteria</code>. Jeśli tabela jest pusta, jest zwracana opcjonalna wartość <code>default</code>.


## Examples

### Example #1 
Znajdź wiersz mający najmniejszą wartość w kolumnie [a] w tabeli.
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
Znajdź wiersz mający najmniejszą wartość w kolumnie [a] w tabeli. Zwróć -1, jeśli tabela jest pusta.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
