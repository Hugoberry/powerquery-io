---
title: Table.FillUp
---

# Table.FillUp


Razširi vrednost celice v celice z vrednostjo"null"nad stolpcem.


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Remarks

Vrne tabelo iz navedene `table`, kjer se vrednost naslednje celice razširi v celice z vrednostjo"null"zgoraj v navedeni `columns`.


## Examples

### Example #1
Vrnite tabelo, v kateri so vrednosti"null"v stolpcu \[Stolpec2\] dopolnjene z vrednostjo pod njimi iz tabele.
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
