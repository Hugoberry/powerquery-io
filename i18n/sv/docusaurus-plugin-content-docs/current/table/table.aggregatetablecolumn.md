---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


Aggregerar en kolumn med tabeller i flera kolumner i den övergripande tabellen.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Remarks

Aggregerar tabeller i `table`\[`column`\] i flera kolumner som innehåller aggregeringsvärden för tabellerna. `aggregations` används för att ange kolumnerna som innehåller tabellerna som ska aggregeras, aggregeringsfunktionerna som ska användas i tabellerna för att generera värdena och namnen på aggregeringskolumnerna som ska skapas.


## Examples

### Example #1
Aggregera tabellkolumner i `[t]` i tabellen `{[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}` i summan av `[t.a]`, det minsta och största `[t.b]`\-värdet samt antalet värden i `[t.a]`.
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
