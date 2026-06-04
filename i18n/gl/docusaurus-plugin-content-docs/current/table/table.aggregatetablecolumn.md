---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


Agrega unha columna de táboas en varias columnas na táboa contedora.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Remarks

Agrega as táboas en `table`\[`column`\] en varias columnas que conteñen valores agregados das táboas. `aggregations` utilízase para especificar as columnas que conteñen as táboas que se van agregar, as funcións de agregación que se van aplicar ás táboas para xerar os seus valores e os nomes das columnas agregadas que se van crear.


## Examples

### Example #1
Agregar columnas de táboa en `[t]` na táboa `{[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}` dentro da suma de `[t.a]`, o mínimo e máximo de `[t.b]` e a contaxe de valores en `[t.a]`.
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
