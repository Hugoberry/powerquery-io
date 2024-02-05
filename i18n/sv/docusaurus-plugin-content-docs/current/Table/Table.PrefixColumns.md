---
title: Table.PrefixColumns
---

# Table.PrefixColumns


## Description

Returnerar en tabell där alla kolumnerna föregås av angiven text.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Details

Returnerar en tabell där alla angivna kolumnnamn från <code>table</code> föregås av angiven text, <code>prefix</code>, plus en punkt i formatet <code>prefix</code><code>.ColumnName</code>.


## Examples

### Example #1 
Lägg till &#34;MyTable&#34; som prefix i tabellen.
```powerquery
Table.PrefixColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "MyTable"
)
```

Result: 
```powerquery
Table.FromRecords({[MyTable.CustomerID = 1, MyTable.Name = "Bob", MyTable.Phone = "123-4567"]})
```




## Category
Table.Column operations
