---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


Expande una columna de registros o una columna de tablas en varias columnas de la tabla contenedora.


## Syntax

```powerquery
Table.ExpandTableColumn(
    table as table,
    column as text,
    columnNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

Expande las tablas de `table`\[`column`\] en varias filas y columnas. `columnNames` se usa para seleccionar las columnas que expandir de la tabla interna. Especifique `newColumnNames` para evitar conflictos entre las columnas existentes y las columnas nuevas.


## Examples

### Example #1
Expandir las columnas de tabla de `[a]` en la tabla `({[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})` en 3 columnas `[t.a]`, `[t.b]` y `[t.c]`.
```powerquery
Table.ExpandTableColumn(
    Table.FromRecords({
        [
            t = Table.FromRecords({
                [a = 1, b = 2, c = 3],
                [a = 2, b = 4, c = 6]
            }),
            b = 2
        ]
    }),
    "t",
    {"a", "b", "c"},
    {"t.a", "t.b", "t.c"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [t.a = 1, t.b = 2, t.c = 3, b = 2],
    [t.a = 2, t.b = 4, t.c = 6, b = 2]
})
```




## Category
Table.Transformation
