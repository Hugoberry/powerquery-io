---
title: Record.FromTable
---

# Record.FromTable


Opretter en post ud fra en tabel i formatet \{\[Name = name, Value = value\]\}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Returnerer en post fra en tabel med poster `table`, der indeholder feltnavne og værdinavne `{[Name = name, Value = value]}`. Der udløses en fejl, hvis feltnavnene ikke er entydige.


## Examples

### Example #1
Opret en post ud fra tabellen i formen Table.FromRecords(\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\}).
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
