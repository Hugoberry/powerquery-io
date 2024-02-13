---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


Zwraca tabelę powstałą w wyniku usunięcia z tabeli wejściowej wierszy, które zawierały błędną wartość w co najmniej jednej komórce. Jeśli zostanie określona lista kolumn, tylko komórki w określonych kolumnach będą sprawdzane pod kątem błędów.


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Remarks

Zwraca tabelę powstałą w wyniku usunięcia z tabeli wejściowej wierszy, które zawierały błędną wartość w co najmniej jednej komórce. Jeśli zostanie określona lista kolumn, tylko komórki w określonych kolumnach będą sprawdzane pod kątem błędów.


## Examples

### Example #1 
Usuń wartość błędu z pierwszego wiersza.
```powerquery
Table.RemoveRowsWithErrors(
    Table.FromRecords({
        [Column1 = ...],
        [Column1 = 2],
        [Column1 = 3]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 2],
    [Column1 = 3]
})
```




## Category
Table.Row operations
