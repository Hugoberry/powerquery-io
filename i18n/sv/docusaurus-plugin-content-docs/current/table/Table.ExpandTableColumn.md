---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


Expanderar en kolumn med poster eller en kolumn med tabeller till flera kolumner i den övergripande tabellen.


## Syntax

```powerquery
Table.ExpandTableColumn(
    table as table,
    column as text,
    columnNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

Expanderar tabeller i <code>table</code>[<code>column</code>] till flera rader och kolumner. <code>columnNames</code> används för att välja de kolumner som ska expanderas från den inre tabellen. Använd <code>newColumnNames</code> för att undvika konflikter mellan befintliga och nya kolumner.


## Examples

### Example #1 
Expandera tabellkolumner i &lt;code&gt;[a]&lt;/code&gt; i tabellen &lt;code&gt;(\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})&lt;/code&gt; till 3 kolumner: &lt;code&gt;[t.a]&lt;/code&gt;, &lt;code&gt;[t.b]&lt;/code&gt; och &lt;code&gt;[t.c]&lt;/code&gt;.
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
