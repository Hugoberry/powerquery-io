---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


## Description

Кестелер бағанын қамтитын кестедегі бірнеше бағанға біріктіреді.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Details

<code>table</code>[<code>column</code>] ішіндегі кестелерді кестелер үшін біріктіру мәндерін қамтитын бірнеше бағанға біріктіреді. <code>aggregations</code> біріктіретін кестелерді, мәндерін жасау үшін кестелерге қолданылатын біріктіру функцияларын және жасалатын біріктіру бағандарының атауларын қамтитын бағандарды көрсету үшін пайдаланылады.


## Examples

### Example #1 
&lt;code&gt;[t]&lt;/code&gt; ішіндегі &lt;code&gt;\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}&lt;/code&gt; кестесіндегі кесте бағандарын &lt;code&gt;[t.a]&lt;/code&gt;, &lt;code&gt;[t.b]&lt;/code&gt; ең аз және ең көп мәнінің және &lt;code&gt;[t.a]&lt;/code&gt; ішіндегі мәндер санының қосындысына біріктіру.
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
