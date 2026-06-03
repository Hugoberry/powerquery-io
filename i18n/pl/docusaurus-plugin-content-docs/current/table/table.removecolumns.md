---
title: Table.RemoveColumns
---

# Table.RemoveColumns


Usuwa określone kolumny.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Usuwa określoną kolumnę `columns` z `table` podanej tabeli. Jeśli określona kolumna nie istnieje, zgłaszany jest błąd, chyba że opcjonalny parametr `missingField` określa alternatywne zachowanie. (na przykład`MissingField.UseNull` lub `MissingField.Ignore`).


## Examples

### Example #1
Usuń kolumnę \[Phone\] z tabeli.
```powerquery
Table.RemoveColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "Phone"
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob"]})
```


### Example #2
Spróbuj usunąć nieistniejącą kolumnę z tabeli.
```powerquery
Table.RemoveColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "Address"
)
```

Result: 
```powerquery
[Expression.Error] The column 'Address' of the table wasn't found.
```




## Category
Table.Column operations
