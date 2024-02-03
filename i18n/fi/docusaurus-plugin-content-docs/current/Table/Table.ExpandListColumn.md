---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


## Description

Kun annetaan taulukon sarakeluettelo, luo kopio rivistä kullekin arvolle sen luettelossa.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Details

Kun annetaan <code>table</code>, jossa <code>column</code> on arvojen luettelo, jakaa luettelon osiin niin, että kullekin arvolle on rivi. Muiden sarakkeiden arvot monistetaan kullekin uudelle luodulle riville.


## Examples

### Example #1 
Jaa luettelosarake [Name] taulukossa.
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
