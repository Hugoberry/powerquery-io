---
title: Table.RenameColumns
---

# Table.RenameColumns


Wykonuje operacje zmiany nazwy w formie \{old, new\}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Wykonuje dane operacje zmiany nazwy w kolumnach tabeli `table`. Operacja zamiany `renames` obejmuje listę dwóch wartości (stara nazwa kolumny i nowa nazwa kolumny). Jeśli kolumna nie istnieje, zgłaszany jest błąd, chyba że opcjonalny parametr `missingField` określa alternatywę (np. `MissingField.UseNull` lub `MissingField.Ignore`).


## Examples

### Example #1
Zamień nazwę kolumny „CustomerNum” na „CustomerID” w tabeli.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerNum", "CustomerID"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2
Zamień nazwę kolumny „CustomerNum” na „CustomerID” i kolumny „PhoneNum” na „Phone” w tabeli.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", PhoneNum = "123-4567"]}),
    {
        {"CustomerNum", "CustomerID"},
        {"PhoneNum", "Phone"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #3
Zamień nazwę kolumny „NewCol” na „NewColumn” w tabeli i ignoruj, jeśli kolumna nie istnieje.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"NewCol", "NewColumn"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
