---
title: Table.FillUp
---

# Table.FillUp


Sprider värdet från en cell till cellerna med null-värden ovanför i kolumnen.


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Remarks

Returnerar en tabell från angiven <code>table</code> där nästa cells värde sprids till cellerna med null-värden ovanför i angiven <code>columns</code>.


## Examples

### Example #1 
Returnera en tabell med null-värdena i kolumnen [Column2] som fyllts med värdet nedanför dem från tabellen.
```powerquery
Table.FillUp(
    Table.FromRecords({
        [Column1 = 1, Column2 = 2],
        [Column1 = 3, Column2 = null],
        [Column1 = 5, Column2 = 3]
    }),
    {"Column2"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2],
    [Column1 = 3, Column2 = 3],
    [Column1 = 5, Column2 = 3]
})
```




## Category
Table.Transformation
