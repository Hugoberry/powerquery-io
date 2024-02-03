---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


## Description

Diberi lajur senarai dalam jadual, cipta salinan baris untuk setiap nilai dalam senarainya.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Details

Diberi <code>table</code>, yang mana <code>column</code> ialah senarai nilai, memisahkan senarai menjadi baris bagi setiap nilai. Nilai dalam lajur lain diperduakan dalam setiap baris baru yang dicipta.


## Examples

### Example #1 
Pisahkan lajur senarai [Name] dalam jadual.
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
