---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


## Description

З&#39;єднує стовпець таблиць у кілька стовпців у вміщуваній таблиці.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Details

Збирає таблиці в <code>table</code>[<code>column</code>] у кілька стовпців, які містять агрегатні значення для таблиць. <code>aggregations</code> використовується, щоб указати стовпці, які містять таблиці, які необхідно з'єднати, агрегатні функції, які необхідно застосувати до таблиць, щоб створити їхні значення, та імена агрегатних стовпців, які необхідно створити.


## Examples

### Example #1 
З&#39;єднати стовпці таблиці в &lt;code&gt;[t]&lt;/code&gt; у таблиці &lt;code&gt;\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}&lt;/code&gt; у суму &lt;code&gt;[t.a]&lt;/code&gt;, мінімальне та максимальне значення &lt;code&gt;[t.b]&lt;/code&gt;, та кількість значень у &lt;code&gt;[t.a]&lt;/code&gt;.
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
