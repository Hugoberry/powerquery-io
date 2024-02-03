---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


## Description

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


## Details

Expandeix les taules de <code>table</code>[<code>column</code>] en diverses files i columnes. <code>columnNames</code> s'utilitza per seleccionar les columnes que s'han d'expandir a partir de la taula interna. Especifiqueu <code>newColumnNames</code> per evitar conflictes entre les columnes existents i les columnes noves.


## Examples

### Example #1 
Expandeix les columnes de taula a &lt;code&gt;[a]&lt;/code&gt; de la taula &lt;code&gt;(\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})&lt;/code&gt; en 3 columnes: &lt;code&gt;[t.a]&lt;/code&gt;, &lt;code&gt;[t.b]&lt;/code&gt; i &lt;code&gt;[t.c]&lt;/code&gt;.
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
