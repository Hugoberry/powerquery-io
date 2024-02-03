---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


## Description

Жазбалар бағанын немесе кестелер бағанын қамтитын кестедегі бірнеше бағанға кеңейтеді.


## Syntax

```powerquery
Table.ExpandTableColumn(
    table as table,
    column as text,
    columnNames as list,
    optional newColumnNames as list
) as table
```


## Details

<code>table</code>[<code>column</code>] ішіндегі кестелерді бірнеше жолға және бағанға кеңейтеді. <code>columnNames</code> ішкі кестеден кеңейтетін бағандарды таңдау үшін пайдаланылады. Бар бағандар мен жаңа бағандар арасында қайшылықтарды болдырмау үшін <code>newColumnNames</code> көрсетіңіз.


## Examples

### Example #1 
&lt;code&gt;(\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})&lt;/code&gt; кестесіндегі &lt;code&gt;[a]&lt;/code&gt; ішіндегі кесте бағандарын 3 &lt;code&gt;[t.a]&lt;/code&gt;, &lt;code&gt;[t.b]&lt;/code&gt; және &lt;code&gt;[t.c]&lt;/code&gt; бағанына кеңейту.
```powerquery
Table.ExpandTableColumn(
    Table.FromRecords({
        [
            t = Table.FromRecords({
                [a = 1, b = 2, c = 3],
                [a = 2, b = 4, c = 6]
            }),
            b = 2
        ]
    }),
    "t",
    {"a", "b", "c"},
    {"t.a", "t.b", "t.c"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [t.a = 1, t.b = 2, t.c = 3, b = 2],
    [t.a = 2, t.b = 4, t.c = 6, b = 2]
})
```




## Category
Table.Transformation
