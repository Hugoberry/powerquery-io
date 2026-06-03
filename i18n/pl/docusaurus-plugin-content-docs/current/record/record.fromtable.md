---
title: Record.FromTable
---

# Record.FromTable


Tworzy rekord na podstawie tabeli w formie \{\[Name = name, Value = value\]\}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Zwraca rekord na podstawie tabeli rekordów `table` zawierającej nazwy i wartości pól `{[Name = name, Value = value]}`. Jeśli nazwy pól nie są unikatowe, jest zgłaszany błąd.


## Examples

### Example #1
Utwórz rekord na podstawie tabeli w formie Table.FromRecords(\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\}).
```powerquery
Record.FromTable(
    Table.FromRecords({
        [Name = "CustomerID", Value = 1],
        [Name = "Name", Value = "Bob"],
        [Name = "Phone", Value = "123-4567"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
