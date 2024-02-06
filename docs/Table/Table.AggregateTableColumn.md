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

Aggregates tables in <code>table</code>[<code>column</code>] into multiple columns containing aggregate values for the tables. <code>aggregations</code> is used to specify the columns containing the tables to aggregate, the aggregation functions to apply to the tables to generate their values, and the names of the aggregate columns to create.


## Examples

### Example #1 
Aggregate table columns in &lt;code&gt;[t]&lt;/code&gt; in the table &lt;code&gt;\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}&lt;/code&gt; into the sum of &lt;code&gt;[t.a]&lt;/code&gt;, the min and max of &lt;code&gt;[t.b]&lt;/code&gt;, and the count of values in &lt;code&gt;[t.a]&lt;/code&gt;.
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
