---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


Zwraca tabelę powstałą w wyniku pozostawienia w tabeli wejściowej tylko tych wierszy, które zawierały błędną wartość w co najmniej jednej komórce. Jeśli zostanie określona lista kolumn, tylko komórki w określonych kolumnach będą sprawdzane pod kątem błędów.


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Remarks

Zwraca tabelę powstałą w wyniku pozostawienia w tabeli wejściowej tylko tych wierszy, które zawierały błędną wartość w co najmniej jednej komórce. Jeśli zostanie określona lista kolumn, tylko komórki w określonych kolumnach będą sprawdzane pod kątem błędów.


## Examples

### Example #1 
Wybierz nazwy klientów z błędami w ich wierszach.
```powerquery
Table.SelectRowsWithErrors(
    Table.FromRecords({
        [CustomerID = ..., Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)[Name]
```

Result: 
```powerquery
{"Bob"}
```




## Category
Table.Row operations
