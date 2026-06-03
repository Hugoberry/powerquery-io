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

Zwraca największy wiersz w tabeli `table`, używając podanych kryteriów `comparisonCriteria`. Jeśli tabela jest pusta, jest zwracana opcjonalna wartość `default`.


## Examples

### Example #1
Znajdź wiersz mający największą wartość w kolumnie \[a\] w tabeli `({[a = 2, b = 4], [a = 6, b = 8]})`.
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
Znajdź wiersz mający największą wartość w kolumnie \[a\] w tabeli `({})`. Zwróć -1, jeśli tabela jest pusta.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
