---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


Expande unha columna de rexistros ou unha columna de táboas en varias columnas na táboa contedora.


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

Expande táboas en `table`\[`column`\] en varias filas e columnas. `columnNames` utilízase para seleccionar as columnas que se van expandir da táboa interna. Especificar `newColumnNames` para evitar conflitos entre as columnas existentes e as novas columnas.


## Examples

### Example #1
Expandir as columnas de táboa en `[a]` da táboa `({[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})` en 3 columnas `[t.a]`, `[t.b]` e `[t.c]`.
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
