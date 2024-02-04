---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


## Description

Agrega uma coluna de tabelas a várias colunas na tabela contentora.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Details

Agrega tabelas em <code>table</code>[<code>column</code>] a várias colunas que contém valores agregados para as tabelas. <code>aggregations</code> é utilizado para especificar as colunas que contêm as tabelas a agregar, as funções de agregação a aplicar às tabelas para gerar os respetivos valores e os nomes das colunas de agregação a criar.


## Examples

### Example #1 
Agregar colunas de tabela em &lt;code&gt;[t]&lt;/code&gt; na tabela &lt;code&gt;\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}&lt;/code&gt; na soma de &lt;code&gt;[t.a]&lt;/code&gt;, o mínimo e máximo de &lt;code&gt;[t.b]&lt;/code&gt; e a contagem de valores em &lt;code&gt;[t.a]&lt;/code&gt;.
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
