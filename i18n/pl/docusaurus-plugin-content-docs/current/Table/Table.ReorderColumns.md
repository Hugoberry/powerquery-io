---
title: Table.ReorderColumns
---

# Table.ReorderColumns


## Description

Zwraca tabelę z kolumnami rozmieszczonymi w określonej kolejności.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Zwraca tabelę będącą wynikiem rozmieszczenia kolumn tabeli wejściowej <code>table</code> w kolejności określonej przez parametr <code>columnOrder</code>. Kolejność kolumn, które nie są określone na liście, nie będzie zmieniana.     Jeśli kolumna nie istnieje, jest zwracany wyjątek, chyba że opcjonalny parametr <code>missingField</code> określa alternatywę (np. <code>MissingField.UseNull</code> lub <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Zamień kolejność kolumn [Phone] i [Name] w tabeli.
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
Zamień kolejność kolumn [Phone] i [Address] w tabeli lub użyj funkcji „MissingField.Ignore”. Nie zmienia tabeli, ponieważ kolumna [Address] nie istnieje.
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
