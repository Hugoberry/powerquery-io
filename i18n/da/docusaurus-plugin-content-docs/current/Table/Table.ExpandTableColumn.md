---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


## Description

Aggregerer en kolonne med poster eller en kolonne med tabeller i flere kolonner i den tabel, der indeholder dem.


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

Udvider tabeller i <code>table</code> [<code>column</code>] i flere rækker og kolonner. <code>columnNames</code> bruges til at markere de kolonner, der skal udvides fra den indre tabel. Angiv <code>newColumnNames</code> for at undgå konflikter mellem eksisterende kolonner og nye kolonner.


## Examples

### Example #1 
Udvid tabelkolonner i &lt;code&gt;[a]&lt;/code&gt; i tabellen &lt;code&gt;(\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})&lt;/code&gt; i tre kolonner &lt;code&gt;[t.a]&lt;/code&gt;, &lt;code&gt;[t.b]&lt;/code&gt; og &lt;code&gt;[t.c]&lt;/code&gt;.
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
