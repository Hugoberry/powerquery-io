---
title: Table.SingleRow
---

# Table.SingleRow


Zwraca jeden wiersz z tabeli.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Remarks

Zwraca jeden wiersz w jednym wierszu tabeli `table`. Jeśli tabela `table` zawiera więcej niż jeden wiersz, jest zgłaszany błąd.


## Examples

### Example #1
Zwróć pojedynczy wiersz w tabeli.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
