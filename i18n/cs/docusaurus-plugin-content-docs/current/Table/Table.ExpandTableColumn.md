---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


## Description

Rozšíří sloupec záznamů nebo sloupec tabulek na více sloupců v obsahující tabulce.


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

Rozšíří sloupec tabulky <code>table</code>[<code>column</code>] na více řádků a sloupců. <code>columnNames</code> slouží k výběru sloupců z vnitřní tabulky, které mají být rozšířeny. Určením parametru <code>newColumnNames</code> se vyhnete konfliktům mezi stávajícími a novými sloupci.


## Examples

### Example #1 
Rozšíří sloupce tabulky v &lt;code&gt;[a]&lt;/code&gt; v tabulce &lt;code&gt;(\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})&lt;/code&gt; na tři sloupce &lt;code&gt;[t.a]&lt;/code&gt;, &lt;code&gt;[t.b]&lt;/code&gt; a &lt;code&gt;[t.c]&lt;/code&gt;.
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
