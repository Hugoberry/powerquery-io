---
title: Table.ReorderColumns
---

# Table.ReorderColumns


## Description

Returnerar en tabell med kolumnerna i angiven ordning.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Returnerar en tabell från indata, <code>table</code>, med kolumnerna i ordningen som anges av <code>columnOrder</code>. Ordningen för kolumner som inte anges i listan ändras inte.     Om kolumnen inte finns genereras ett undantag såvida inte den valfria parametern <code>missingField</code> anger ett alternativ (t.ex. <code>MissingField.UseNull</code> eller <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Byt ordning på kolumnerna [Phone] och [Name] i tabellen.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Phone = "123-4567", Name = "Bob"]}),
    {"Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2 
Byt ordning på kolumnerna [Phone] och [Address] eller använd MissingField.Ignore i tabellen. Den ändrar inte tabellen eftersom kolumnen [Address] inte finns.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"Phone", "Address"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
