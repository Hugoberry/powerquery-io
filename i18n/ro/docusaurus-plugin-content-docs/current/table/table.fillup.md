---
title: Table.FillUp
---

# Table.FillUp


Propagă valoarea unei celule în celulele cu valoarea null de mai sus din coloană.


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Remarks

Returnează un tabel de la `table` specificat în care valoarea următoarei celule este propagată la celulele cu valoarea null de mai sus din `columns` specificat.


## Examples

### Example #1
Returnați un tabel cu valori nule în coloana \[Coloana2\] completată cu valoarea de sub acestea din tabel.
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
