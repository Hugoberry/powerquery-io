---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


## Description

Na základě sloupce seznamů v tabulce vytvoří kopii řádku pro každou hodnotu ve svém seznamu.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Details

Na základě sloupce <code>table</code>, kde <code>column</code> je seznam hodnot, rozdělí seznam na řádek pro jednotlivé hodnoty. V každém novém vytvořeném řádku jsou duplikovány hodnoty ostatních sloupců.


## Examples

### Example #1 
Rozdělí sloupec seznamu [Name] v tabulce.
```powerquery
Table.ExpandListColumn(
    Table.FromRecords({[Name = {"Bob", "Jim", "Paul"}, Discount = .15]}),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob", Discount = 0.15],
    [Name = "Jim", Discount = 0.15],
    [Name = "Paul", Discount = 0.15]
})
```




## Category
Table.Transformation
