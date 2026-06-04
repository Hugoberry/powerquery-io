---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


Expandeix una columna de registres o una columna de taules en diverses columnes a la taula que les conté.


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

Expandeix les taules de `table`\[`column`\] en diverses files i columnes. `columnNames` s'utilitza per seleccionar les columnes que s'han d'expandir a partir de la taula interna. Especifiqueu `newColumnNames` per evitar conflictes entre les columnes existents i les columnes noves.


## Examples

### Example #1
Expandeix les columnes de taula a `[a]` de la taula `({[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})` en 3 columnes: `[t.a]`, `[t.b]` i `[t.c]`.
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
