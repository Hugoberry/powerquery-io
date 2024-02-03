---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


## Description

將資料表的資料行彙總成包含資料表中的多個資料行。


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Details

將 <code>table</code>[<code>column</code>] 中的資料表彙總成包含資料表之彙總值的多個資料行。<code>aggregations</code> 是用來指定包含要彙總之資料表的資料行、要套用至資料表以產生其值的彙總函式，以及要建立之彙總資料行的名稱。


## Examples

### Example #1 
將資料表 &lt;code&gt;\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}&lt;/code&gt; 之 &lt;code&gt;[t]&lt;/code&gt; 中的資料表資料行彙總成 &lt;code&gt;[t.a]&lt;/code&gt; 的總和、&lt;code&gt;[t.b]&lt;/code&gt; 的最小值與最大值，以及 &lt;code&gt;[t.a]&lt;/code&gt; 中值的計數。
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
