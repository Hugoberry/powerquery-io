---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


## Description

Ako je data kolona sa listama u tabeli, napravite kopiju reda za svaku vrednost iz odgovarajuće liste.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Details

Ako je dato <code>table</code>, pri čemu je <code>column</code> lista vrednosti, deli listu na red za svaku vrednost. Vrednosti iz drugih kolona se dupliraju u svakom novom redu koji se kreira.


## Examples

### Example #1 
Deljenje kolone liste [Ime] u tabeli.
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
