---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


## Description

将多个表的一列聚合到包含表中的多列。


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Details

将 <code>table</code>[<code>column</code>] 中的表聚合到包含这些表的聚合值的多个列。<code>aggregations</code> 用于指定包含要聚合的表的列、要应用于表以生成其值的聚合函数以及要创建的聚合列的名称。


## Examples

### Example #1 
将表 &lt;code&gt;\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}&lt;/code&gt; 中的 &lt;code&gt;[t]&lt;/code&gt; 的表列聚合为 &lt;code&gt;[t.a]&lt;/code&gt;、&lt;code&gt;[t.b]&lt;/code&gt; 的最小值和最大值以及 &lt;code&gt;[t.a]&lt;/code&gt; 中值计数的总和。
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
