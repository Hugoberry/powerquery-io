---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


З'єднує стовпець таблиць у кілька стовпців у вміщуваній таблиці.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Remarks

Збирає таблиці в `table`\[`column`\] у кілька стовпців, які містять агрегатні значення для таблиць. `aggregations` використовується, щоб указати стовпці, які містять таблиці, які необхідно з'єднати, агрегатні функції, які необхідно застосувати до таблиць, щоб створити їхні значення, та імена агрегатних стовпців, які необхідно створити.


## Examples

### Example #1
З'єднати стовпці таблиці в `[t]` у таблиці `{[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}` у суму `[t.a]`, мінімальне та максимальне значення `[t.b]`, та кількість значень у `[t.a]`.
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
