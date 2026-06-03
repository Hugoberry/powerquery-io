---
title: Record.FromTable
---

# Record.FromTable


Maakt een record van een tabel in de notatie \{\[Name = name, Value = value\]\}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Retourneert een record van een tabel met records `table` die veld- en waardenamen `{[Name = name, Value = value]}` bevatten. Er treedt een fout op als de veldnamen niet uniek zijn.


## Examples

### Example #1
Een record van de tabel in de notatie Table.FromRecords(\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\}) maken.
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
