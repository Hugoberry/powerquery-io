---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


## Description

Agrega una columna de taules en diverses columnes a la taula que les conté.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Details

Agrega una columna de taules a <code>table</code>[<code>column</code>] en diverses columnes que contenen els valors agregats de les taules. <code>aggregations</code> s'utilitza per especificar les columnes que contenen les taules que s'han d'agregar, les funcions d'agregació que s'han d'aplicar a les taules per generar els seus valors i els noms de les columnes agregades que s'han de crear.


## Examples

### Example #1 
Agrega columnes de taula a &lt;code&gt;[t]&lt;/code&gt; a la taula &lt;code&gt;\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}&lt;/code&gt; dins de la suma de &lt;code&gt;[t.a]&lt;/code&gt;, el mínim i màxim de &lt;code&gt;[t.b]&lt;/code&gt;, i el recompte de valors a &lt;code&gt;[t.a]&lt;/code&gt;.
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
