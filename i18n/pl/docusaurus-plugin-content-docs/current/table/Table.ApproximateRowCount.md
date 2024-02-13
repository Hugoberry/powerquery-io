---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


Zwraca szacunkową liczbę wierszy w tabeli.


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Remarks

Zwraca przybliżoną liczbę wierszy w <code>table</code> lub błąd, jeśli źródło danych nie obsługuje przybliżenia.


## Examples

### Example #1 
Oszacuj liczbę różnych kombinacji miast i województw w obszernej tabeli, która może być używana jako oszacowanie kardynalności dla kolumn. Szacunki kardynalności są na tyle ważne, że różne źródła danych (takie jak SQL Server) obsługują to konkretne przybliżenie, często używając algorytmu o nazwie HyperLogLog.
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
