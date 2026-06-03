---
title: Table.ReplaceRows
---

# Table.ReplaceRows


Sustituye el intervalo de filas especificado con las filas proporcionadas.


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

Sustituye un número de filas especificado, `count`, en la entrada `table` con la `rows` especificada, a partir de `offset`. El parámetro `rows` es una lista de registros.

-   `table`: la tabla donde se realiza el reemplazo.
-   `offset`: el nNúmero de filas que se omitirán antes de hacer el reemplazo.
-   `count`: el número de filas que se reemplazan.
-   `rows`: la lista de registros de fila que se insertan en la `table` en la ubicación especificada por `offset`.


## Examples

### Example #1
A partir de la posición 1, reemplazar 3 filas.
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
