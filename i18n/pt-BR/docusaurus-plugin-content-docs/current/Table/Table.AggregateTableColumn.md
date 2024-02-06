---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


Agrega uma coluna de tabelas em várias colunas na tabela que as contém.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Remarks

Agrega tabelas em <code>table</code>[<code>column</code>] em várias colunas que contêm valores de agregação para as tabelas. <code>aggregations</code> é usado para especificar as colunas que contêm as tabelas a serem agregadas, as funções de agregação a serem aplicadas às tabelas para gerar seus valores, e os nomes das colunas agregadas a serem criadas.


## Examples

### Example #1 
Agregue colunas de tabelas em &lt;code&gt;[t]&lt;/code&gt; na tabela &lt;code&gt;\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}&lt;/code&gt; na soma de &lt;code&gt;[t.a]&lt;/code&gt;, os valores mínimo e máximo de &lt;code&gt;[t.b]&lt;/code&gt;, e a contagem de valores em &lt;code&gt;[t.a]&lt;/code&gt;.
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
