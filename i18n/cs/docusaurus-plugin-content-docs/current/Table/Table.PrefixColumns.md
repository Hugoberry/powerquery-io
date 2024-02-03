---
title: Table.PrefixColumns
---

# Table.PrefixColumns


## Description

Vrátí tabulku, ve které mají všechny sloupce předponu tvořenou daným textem.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Details

Vrátí tabulku, ve které všechny názvy sloupců zadané tabulky <code>table</code> začínají daným textem, <code>prefix</code>, a tečkou ve tvaru <code>prefix</code>.<code>ColumnName</code>.


## Examples

### Example #1 
Umožňuje vytvořit předpony sloupců MyTable v tabulce.
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
