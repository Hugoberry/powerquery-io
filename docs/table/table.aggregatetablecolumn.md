---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


Aggregates a column of tables into multiple columns in the containing table.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Remarks

Aggregates tables in `table`\[`column`\] into multiple columns containing aggregate values for the tables. `aggregations` is used to specify the columns containing the tables to aggregate, the aggregation functions to apply to the tables to generate their values, and the names of the aggregate columns to create.


## Examples

### Example #1
Aggregate table columns in `[t]` in the table `{[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}` into the sum of `[t.a]`, the min and max of `[t.b]`, and the count of values in `[t.a]`.
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
