---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


## Description

Når du har en kolonne med lister i en tabel, skal du oprette en kopi af en række for hver værdi på listen.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Details

Når du har en <code>table</code>, hvor en <code>column</code> er en liste over værdier, opdeles listen i en række for hver værdi. Værdier i andre kolonner dubleres i alle nye rækker, der oprettes.


## Examples

### Example #1 
Opdel listekolonnen [Name] i tabellen.
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
