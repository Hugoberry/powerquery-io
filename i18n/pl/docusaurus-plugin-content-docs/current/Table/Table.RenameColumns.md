---
title: Table.RenameColumns
---

# Table.RenameColumns


## Description

Wykonuje operacje zmiany nazwy w formie \{old, new}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Wykonuje dane operacje zmiany nazwy w kolumnach tabeli <code>table</code>. Operacja zamiany <code>renames</code> obejmuje listę dwóch wartości (stara nazwa kolumny i nowa nazwa kolumny).    Jeśli kolumna nie istnieje, jest zwracany wyjątek, chyba że opcjonalny parametr <code>missingField</code> określa alternatywę (np. <code>MissingField.UseNull</code> lub <code>MissingField.Ignore</code>).


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
