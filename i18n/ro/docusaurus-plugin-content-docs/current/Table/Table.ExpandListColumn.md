---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


## Description

Ţinând cont de o coloană de liste într-un tabel, creaţi o copie a unui rând pentru fiecare valoare din listă.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Details

Ţinând cont de <code>table</code>, în care <code>column</code> este o listă de valori, divizaţi lista într-un rând pentru fiecare valoare. Valorile din celelalte coloane sunt dublate în fiecare rând nou creat.


## Examples

### Example #1 
Divizați coloana listă [Nume] din tabel.
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
