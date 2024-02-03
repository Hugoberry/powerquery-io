---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


## Description

Mengagregat lajur pada jadual kepada berbilang lajur dalam jadual yang mengandunginya.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Details

Mengagregat jadual dalam <code>table</code>[<code>column</code>] kepada berbilang lajur yang mengandungi nilai agregat untuk jadual. <code>aggregations</code> digunakan untuk menentukan lajur yang mengandungi jadual untuk diagregatkan, fungsi pengagregatan untuk digunakan pada jadual bagi menjana nilainya dan nama bagi lajur agregat untuk dicipta.


## Examples

### Example #1 
Lajur jadual agregat dalam &lt;code&gt;[t]&lt;/code&gt; dalam jadual &lt;code&gt;\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}&lt;/code&gt; kepada jumlah &lt;code&gt;[t.a]&lt;/code&gt;, min dan maks bagi &lt;code&gt;[t.b]&lt;/code&gt; dan kiraan nilai dalam &lt;code&gt;[t.a]&lt;/code&gt;.
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
