---
title: Record.FromTable
---

# Record.FromTable


Skapar en post från en tabell i formatet \{\[Name = name, Value = value\]\}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Returnerar en post från en tabell med poster, `table`, som innehåller fältnamn och värdenamn, `{[Name = name, Value = value]}`. Ett undantag genereras om fältnamnen inte är unika.


## Examples

### Example #1
Skapa en post från tabellen i formatet Table.FromRecords(\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\}).
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
