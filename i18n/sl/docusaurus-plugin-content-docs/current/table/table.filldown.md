---
title: Table.FillDown
---

# Table.FillDown


Razširi vrednost prejšnje celice v celice z vrednostjo"null"pod stolpcem.


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Remarks

Vrne tabelo iz navedene `table`, kjer se vrednost prejšnje celice razširi v spodnje celice z vrednostjo"null"v navedeni `columns`.


## Examples

### Example #1
Vrnite tabelo, v kateri so vrednosti"null"v stolpcu \[Mesto\] dopolnjene z vrednostjo nad njimi iz tabele.
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
