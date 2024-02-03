---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


## Description

Skapa en kopia av en rad för varje värde i dess lista baserat på en kolumn med listor i en tabell.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Details

Baserat på en <code>table</code>, där en <code>column</code> är en lista med värden, delas listan upp i en rad för varje värde. Värdena i de övriga kolumnerna dupliceras i varje ny rad som skapas.


## Examples

### Example #1 
Dela upp listkolumnen [Name] i tabellen.
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
