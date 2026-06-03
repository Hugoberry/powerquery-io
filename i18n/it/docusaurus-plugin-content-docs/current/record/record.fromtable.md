---
title: Record.FromTable
---

# Record.FromTable


Crea un record da una tabella nel formato \{\[Name = name, Value = value\]\}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Restituisce un record da una tabella di record `table` contenenti i nomi campo e i nomi valore `{[Name = name, Value = value]}`. Se i nomi campo non sono univoci, viene generato un errore.


## Examples

### Example #1
Creare un record dalla tabella nel formato Table.FromRecords(\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\}).
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
