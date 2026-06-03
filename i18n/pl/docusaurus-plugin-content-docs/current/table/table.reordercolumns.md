---
title: Table.ReorderColumns
---

# Table.ReorderColumns


Zwraca tabelę z kolumnami rozmieszczonymi w określonej kolejności.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Zwraca tabelę będącą wynikiem rozmieszczenia kolumn tabeli wejściowej `table` w kolejności określonej przez parametr `columnOrder`. Kolejność kolumn, które nie są określone na liście, nie będzie zmieniana. Jeśli kolumna nie istnieje, zgłaszany jest błąd, chyba że opcjonalny parametr `missingField` określa alternatywę (np. `MissingField.UseNull` lub `MissingField.Ignore`).


## Examples

### Example #1
Zamień kolejność kolumn \[Phone\] i \[Name\] w tabeli.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Phone = "123-4567", Name = "Bob"]}),
    {"Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2
Zamień kolejność kolumn \[Phone\] i \[Address\] w tabeli lub użyj funkcji „MissingField.Ignore”. Nie zmienia tabeli, ponieważ kolumna \[Address\] nie istnieje.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"Phone", "Address"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
