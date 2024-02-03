---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


## Description

Bir tabloda verilen liste sütunu ile listedeki her değer satırının kopyasını oluşturur.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Details

Verilen <code>table</code> ile (<code>column</code> değer listesidir) listeyi her değer için bir satıra ayırır. Diğer sütunlardaki değerler oluşturulan her yeni satırda çoğaltılır.


## Examples

### Example #1 
Tablodaki [Name] liste sütununu böler.
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
