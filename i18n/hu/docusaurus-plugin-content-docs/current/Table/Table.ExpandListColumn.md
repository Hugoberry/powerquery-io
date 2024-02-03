---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


## Description

Egy táblának egy adott listaoszlopából a listája minden egyes értékéhez létrehozza egy sor másolatát.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Details

Adott a(z) <code>table</code> tábla, ahol <code>column</code> az értékek listája, felosztja a listát értékenként egy sorra. A többi oszlop adata megismétlődik minden egyes újonnan létrehozott sorban.


## Examples

### Example #1 
Felosztja a tábla [Name] listaoszlopát.
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
