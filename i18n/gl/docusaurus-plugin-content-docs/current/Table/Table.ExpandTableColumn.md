---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


## Description

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


## Details

Expande táboas en <code>table</code>[<code>column</code>] en varias filas e columnas. <code>columnNames</code> utilízase para seleccionar as columnas que se van expandir da táboa interna. Especificar <code>newColumnNames</code> para evitar conflitos entre as columnas existentes e as novas columnas.


## Examples

### Example #1 
Expandir as columnas de táboa en &lt;code&gt;[a]&lt;/code&gt; da táboa &lt;code&gt;(\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})&lt;/code&gt; en 3 columnas &lt;code&gt;[t.a]&lt;/code&gt;, &lt;code&gt;[t.b]&lt;/code&gt; e &lt;code&gt;[t.c]&lt;/code&gt;.
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
