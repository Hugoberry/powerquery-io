---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


## Description

Kibontja a rekordok oszlopát vagy a táblák oszlopát több oszlopra az azokat tartalmazó táblában.


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

A(z) <code>table</code>[<code>column</code>] oszlop tábláját kibontja több sorra és oszlopra. A(z) <code>columnNames</code> paraméterrel ki lehet választani a kibontandó oszlopokat a belső táblából. A(z) <code>newColumnNames</code> megadásával elkerülheti a meglévő és az új oszlopok közötti ütközést.


## Examples

### Example #1 
Táblaoszlopok kibontása az &lt;code&gt;[a]&lt;/code&gt; oszlopból a &lt;code&gt;(\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})&lt;/code&gt; táblában 3 oszlopra: &lt;code&gt;[t.a]&lt;/code&gt;, &lt;code&gt;[t.b]&lt;/code&gt; és &lt;code&gt;[t.c]&lt;/code&gt;.
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
