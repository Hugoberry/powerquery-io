---
title: Record.FromTable
---

# Record.FromTable


Kreira zapis od tabele u obliku \{\[Name = name, Value = value\]\}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Vraća zapis od tabele zapisa `table` koji sadrži imena polja i imena vrednosti `{[Name = name, Value = value]}`. Ako imena polja nisu jedinstvena, prijavljuje se greška.


## Examples

### Example #1
Kreiranje zapisa od tabele u obliku Table.FromRecords(\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\}).
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
