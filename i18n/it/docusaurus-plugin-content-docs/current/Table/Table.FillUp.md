---
title: Table.FillUp
---

# Table.FillUp


## Description

Propaga il valore di una cella alle celle con valori Null nella parte superiore della colonna.


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Details

Restituisce una tabella da <code>table</code> dove il valore della cella successiva viene propagato alle celle con valori Null nella parte superiore di <code>columns</code>.


## Examples

### Example #1 
Restituire una tabella con i valori Null della colonna [Column2] riempita con i valori sottostanti dalla tabella.
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
