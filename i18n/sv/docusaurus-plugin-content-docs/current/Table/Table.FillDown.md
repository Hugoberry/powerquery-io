---
title: Table.FillDown
---

# Table.FillDown


Sprider värdet från en föregående cell till cellerna med null-värden nedanför i kolumnen.


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Remarks

Returnerar en tabell från angiven <code>table</code> där föregående cells värde sprids till cellerna med null-värden nedanför i angiven <code>columns</code>.


## Examples

### Example #1 
Returnera en tabell med null-värdena i kolumnen [Place] som fyllts med värdet ovanför dem från tabellen.
```powerquery
Table.FillDown(
    Table.FromRecords({
        [Place = 1, Name = "Bob"],
        [Place = null, Name = "John"],
        [Place = 2, Name = "Brad"],
        [Place = 3, Name = "Mark"],
        [Place = null, Name = "Tom"],
        [Place = null, Name = "Adam"]
    }),
    {"Place"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Place = 1, Name = "Bob"],
    [Place = 1, Name = "John"],
    [Place = 2, Name = "Brad"],
    [Place = 3, Name = "Mark"],
    [Place = 3, Name = "Tom"],
    [Place = 3, Name = "Adam"]
})
```




## Category
Table.Transformation
