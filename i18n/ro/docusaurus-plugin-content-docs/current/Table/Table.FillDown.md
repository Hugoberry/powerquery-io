---
title: Table.FillDown
---

# Table.FillDown


## Description

Propagă valoarea unei celule anterioare în celulele cu valoarea null de mai jos din coloană.


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Details

Returnează un tabel de la <code>table</code> specificat în care valoarea unei celule anterioare este propagată la celulele cu valoarea null de mai jos din <code>columns</code> specificat.


## Examples

### Example #1 
Returnați un tabel cu valori nule în coloana [Loc] completată cu valoarea de deasupra acestora din tabel.
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
