---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


## Description

Pagal lentelės sąrašų stulpelį sukurkite kiekvienos reikšmės sąraše eilutės kopiją.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Details

Pagal <code>table</code>, kur <code>column</code> – reikšmių sąrašas, sąrašas išskaidomas į kiekvienos reikšmės eilutę. Kitų stulpelių reikšmės dubliuojamos kiekvienoje sukurtoje naujoje eilutėje.


## Examples

### Example #1 
Skaidykite sąrašo stulpelį [Name] lentelėje.
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
