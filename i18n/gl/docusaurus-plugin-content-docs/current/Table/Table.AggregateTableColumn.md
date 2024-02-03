---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


## Description

Agrega unha columna de táboas en varias columnas na táboa contedora.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Details

Agrega as táboas en <code>table</code>[<code>column</code>] en varias columnas que conteñen valores agregados das táboas. <code>aggregations</code> utilízase para especificar as columnas que conteñen as táboas que se van agregar, as funcións de agregación que se van aplicar ás táboas para xerar os seus valores e os nomes das columnas agregadas que se van crear.


## Examples

### Example #1 
Agregar columnas de táboa en &lt;code&gt;[t]&lt;/code&gt; na táboa &lt;code&gt;\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}&lt;/code&gt; dentro da suma de &lt;code&gt;[t.a]&lt;/code&gt;, o mínimo e máximo de &lt;code&gt;[t.b]&lt;/code&gt; e a contaxe de valores en &lt;code&gt;[t.a]&lt;/code&gt;.
```powerquery
Table.AggregateTableColumn(
    Table.FromRecords(
        {
            [
                t = Table.FromRecords({
                    [a = 1, b = 2, c = 3],
                    [a = 2, b = 4, c = 6]
                }),
                b = 2
            ]
        },
        type table [t = table [a = number, b = number, c = number], b = number]
    ),
    "t",
    {
        {"a", List.Sum, "sum of t.a"},
        {"b", List.Min, "min of t.b"},
        {"b", List.Max, "max of t.b"},
        {"a", List.Count, "count of t.a"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[#"sum of t.a" = 3, #"min of t.b" = 2, #"max of t.b" = 4, #"count of t.a" = 2, b = 2]})
```




## Category
Table.Transformation
