---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


## Description

Ņemot vērā tabulā sniegto sarakstu kolonnu, izveidojiet rindas kopiju katrai vērtībai tās sarakstā.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Details

Ja norādīts <code>table</code>, kur <code>column</code> ir vērtību saraksts, saraksts tiek sadalīts rindā katrai vērtībai. Citās kolonnās ietvertās vērtības tiek dublētas katrā jaunizveidotajā rindā.


## Examples

### Example #1 
Sadaliet sarakstu kolonnu [Name] tabulā.
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
