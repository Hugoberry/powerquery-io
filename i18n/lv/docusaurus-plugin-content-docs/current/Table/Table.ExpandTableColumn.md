---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


## Description

Ierakstu kolonna vai tabulu kolonna tiek izvērsta vairākās kolonnās ietverošajā tabulā.


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

<code>table</code>[<code>column</code>] tabulas tiek izvērstas vairākās rindās un kolonnās. <code>columnNames</code> tiek lietots, lai atlasītu no iekšējās tabulas izvēršamās kolonnas. Norādiet <code>newColumnNames</code>, lai nerastos konflikti starp esošajām un jaunajām kolonnām.


## Examples

### Example #1 
&lt;code&gt;[a]&lt;/code&gt; tabulas kolonnas tabulā &lt;code&gt;(\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})&lt;/code&gt; izvērsiet 3 kolonnās: &lt;code&gt;[t.a]&lt;/code&gt;, &lt;code&gt;[t.b]&lt;/code&gt; un &lt;code&gt;[t.c]&lt;/code&gt;.
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
