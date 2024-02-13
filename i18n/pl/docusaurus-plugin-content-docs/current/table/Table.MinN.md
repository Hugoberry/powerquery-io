---
title: Table.MinN
---

# Table.MinN


Zwraca najmniejsze wiersze, używając podanych kryteriów.


## Syntax

```powerquery
Table.MinN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Remarks

Zwraca najmniejsze wiersze w tabeli <code>table</code>, używając podanych kryteriów <code>comparisonCriteria</code>. Po posortowaniu wierszy musi zostać określony parametr <code>countOrCondition</code>, aby można było jeszcze bardziej przefiltrować wynik. Zwróć uwagę na to, że algorytm sortowania nie gwarantuje powtarzalności wyników sortowania. Parametr <code>countOrCondition</code> może mieć różne formy:    <ul>        <li>Jeśli jest określona liczba, jest zwracana lista elementów o maksymalnej długości <code>countOrCondition</code> posortowana w kolejności rosnącej. </li>        <li> Jeśli jest określony warunek, jest zwracana lista elementów, które początkowo spełniały warunek. Gdy zostanie znaleziony element, który nie spełnia warunku, nie będą analizowane dalsze elementy. </li> </ul>


## Examples

### Example #1 
Znajdź wiersz mający najmniejszą wartość w kolumnie [a], używając warunku [a] &lt; 3, w tabeli. Wiersze są sortowane przed zastosowaniem filtru.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 4]
    }),
    "a",
    each [a] < 3
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 0, b = 0],
    [a = 2, b = 4]
})
```


### Example #2 
Znajdź wiersz mający najmniejszą wartość w kolumnie [a], używając warunku [b] &lt; 0, w tabeli. Wiersze są sortowane przed zastosowaniem filtru.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] < 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
