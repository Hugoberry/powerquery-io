---
title: Table.PrefixColumns
---

# Table.PrefixColumns


## Description

Vraća tabelu čije sve kolone imaju prefiks u vidu datog teksta.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Details

Vraća tabelu u kojoj sva imena kolona iz navedenog <code>table</code> imaju prefiks u vidu datog teksta, <code>prefix</code>, kao i tačku u obliku <code>prefix</code><code>.ColumnName</code>.


## Examples

### Example #1 
Dodavanje prefiksa kolonama sa izrazom „MojaTabela“ u tabeli.
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
