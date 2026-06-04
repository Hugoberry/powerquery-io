---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


Agrega una columna de taules en diverses columnes a la taula que les conté.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Remarks

Agrega una columna de taules a `table`\[`column`\] en diverses columnes que contenen els valors agregats de les taules. `aggregations` s'utilitza per especificar les columnes que contenen les taules que s'han d'agregar, les funcions d'agregació que s'han d'aplicar a les taules per generar els seus valors i els noms de les columnes agregades que s'han de crear.


## Examples

### Example #1
Agrega columnes de taula a `[t]` a la taula `{[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}` dins de la suma de `[t.a]`, el mínim i màxim de `[t.b]`, i el recompte de valors a `[t.a]`.
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
