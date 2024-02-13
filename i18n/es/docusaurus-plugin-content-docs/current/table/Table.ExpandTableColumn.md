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

Expande las tablas de <code>table</code>[<code>column</code>] en varias filas y columnas. <code>columnNames</code> se usa para seleccionar las columnas que expandir de la tabla interna. Especifique <code>newColumnNames</code> para evitar conflictos entre las columnas existentes y las columnas nuevas.


## Examples

### Example #1 
Expandir las columnas de tabla de &lt;code&gt;[a]&lt;/code&gt; en la tabla &lt;code&gt;(\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})&lt;/code&gt; en 3 columnas &lt;code&gt;[t.a]&lt;/code&gt;, &lt;code&gt;[t.b]&lt;/code&gt; y &lt;code&gt;[t.c]&lt;/code&gt;.
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
