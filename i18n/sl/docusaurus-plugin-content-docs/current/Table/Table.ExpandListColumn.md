---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


## Description

Za navedeni stolpec seznamov v tabeli ustvarite kopijo vrstice za vsako vrednost na seznamu.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Details

Za navedeni <code>table</code>, kjer je <code>column</code> seznam vrednosti, razdeli seznam v vrstico za vsako vrednost. Vrednosti v drugih stolpcih so podvojene v vsaki novi vrstici, ki je ustvarjena.


## Examples

### Example #1 
Razdelite stolpec seznama [Ime] v tabeli.
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
