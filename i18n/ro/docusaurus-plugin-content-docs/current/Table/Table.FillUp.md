---
title: Table.FillUp
---

# Table.FillUp


## Description

Propagă valoarea unei celule în celulele cu valoarea null de mai sus din coloană.


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Details

Returnează un tabel de la <code>table</code> specificat în care valoarea următoarei celule este propagată la celulele cu valoarea null de mai sus din <code>columns</code> specificat.


## Examples

### Example #1 
Returnați un tabel cu valori nule în coloana [Coloana2] completată cu valoarea de sub acestea din tabel.
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
