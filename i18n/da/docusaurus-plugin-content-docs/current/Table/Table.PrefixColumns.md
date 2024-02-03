---
title: Table.PrefixColumns
---

# Table.PrefixColumns


## Description

Returnerer en tabel, hvor alle kolonnerne indledes med den angivne tekst.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Details

Returnerer en tabel, hvor alle kolonnenavne fra den angivne <code>table</code> indledes med den angivne tekst <code>prefix</code>, plus et punktum i formatet <code>prefix</code><code>.ColumnName</code>.


## Examples

### Example #1 
Indleder kolonnerne med &#34;MyTable&#34; i tabellen.
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
