---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


Agrega una columna de tablas en varias columnas en la tabla contenedora.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Remarks

Agrega las tablas de `table`\[`column`\] en varias columnas que contienen los valores globales de las tablas. `aggregations` se usa para especificar las columnas que contienen las tablas que agregar, las funciones de agregado que se aplican a las tablas para generar sus valores y los nombres de las columnas agregadas que se crean.


## Examples

### Example #1
Agregar columnas de tabla en `[t]` en la tabla `{[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}` en la suma de `[t.a]`, el mínimo y el máximo de `[t.b]` y el recuento de valores de `[t.a]`.
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
