---
title: Table.ReplaceRows
---

# Table.ReplaceRows


Substituír o intervalo de filas coa(s) fila(s) especificada(s).


## Syntax

```powerquery
Table.ReplaceRows(
    table as table,
    offset as number,
    count as number,
    rows as list
) as table
```


## Remarks

Substituír un número especificado de filas, `count`, da `table` de entrada co `rows` especificado, comezando despois de `offset`. O parámetro `rows` é unha lista de rexistros.

-   `table`: a táboa onde se executa a substitución.
-   `offset`: o número de filas que se vai ignorar antes de facer a substitución.
-   `count`: o número de filas que se van substituír.
-   `rows`: a lista de rexistros de fila que se van inserir na `table` na localización especificada por `offset`.


## Examples

### Example #1
Comezando na posición 1, substituír 3 filas.
```powerquery
Table.ReplaceRows(
    Table.FromRecords({
        [Column1 = 1],
        [Column1 = 2],
        [Column1 = 3],
        [Column1 = 4],
        [Column1 = 5]
    }),
    1,
    3,
    {[Column1 = 6], [Column1 = 7]}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1],
    [Column1 = 6],
    [Column1 = 7],
    [Column1 = 5]
})
```




## Category
Table.Row operations
