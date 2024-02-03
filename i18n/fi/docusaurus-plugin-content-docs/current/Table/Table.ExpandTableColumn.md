---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


## Description

Laajentaa saraketaulukon saraketietueen useiksi sarakkeiksi sisältävässä taulukossa.


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

Laajentaa taulukot kohteessa <code>table</code>[<code>column</code>] useiksi riveiksi ja sarakkeiksi. Kohdetta <code>columnNames</code> käytetään valitsemaan sisemmästä taulukosta laajennettavat sarakkeet. Määritä <code>newColumnNames</code>, jotta voit välttää ristiriidat aiemmin luotujen sarakkeiden ja uusien sarakkeiden välillä.


## Examples

### Example #1 
Laajenna taulukkosarakkeet kohteessa &lt;code&gt;[a]&lt;/code&gt; taulukossa &lt;code&gt;(\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})&lt;/code&gt; kolmeksi sarakkeeksi, jotka ovat &lt;code&gt;[t.a]&lt;/code&gt;, &lt;code&gt;[t.b]&lt;/code&gt; ja &lt;code&gt;[t.c]&lt;/code&gt;.
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
