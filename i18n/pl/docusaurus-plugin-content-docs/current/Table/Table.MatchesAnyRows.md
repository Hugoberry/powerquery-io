---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


## Description

Wskazuje, czy dowolne wiersze tabeli spełniają dany warunek.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Details

Wskazuje, czy dowolne wiersze tabeli <code>table</code> spełniają dany warunek <code>condition</code>. Zwraca wartość <code>true</code>, jeśli dowolny wiersz spełnia warunek; w przeciwnym razie zwraca wartość <code>false</code>.


## Examples

### Example #1 
Ustal, czy dowolna z wartości wierszy w kolumnie [a] tabeli &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt; jest parzysta.
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 3, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
false
```


### Example #2 
Ustal, czy dowolna z wartości wierszy w tabeli &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; jest równa [a = 1, b = 2].
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
true
```




## Category
Table.Row operations
