---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


Агрегирует столбец таблиц в несколько столбцов в содержащей их таблице.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Remarks

Агрегирует таблицы в <code>table</code>[<code>column</code>] в несколько столбцов, содержащих статистические значения для таблиц. <code>aggregations</code> используется для указания столбцов, содержащих таблицы для статистической обработки, статистические функции, которые применяются к таблицам для создания их значений, и имена столбцов групповых операций, которые требуется создать.


## Examples

### Example #1 
Агрегировать столбцы таблицы в &lt;code&gt;[t]&lt;/code&gt; в таблице &lt;code&gt;\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}&lt;/code&gt; в сумму &lt;code&gt;[t.a]&lt;/code&gt;, минимум и максимум &lt;code&gt;[t.b]&lt;/code&gt; и количество значений в &lt;code&gt;[t.a]&lt;/code&gt;.
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
