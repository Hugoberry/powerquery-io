---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


## Description

Extinde o coloană de înregistrări sau o coloană de tabele în mai multe coloane în tabelul inclus.


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

Extinde tabelele din <code>table</code>[<code>column</code>] în mai multe rânduri şi coloane. Se utilizează <code>columnNames</code> pentru a selecta coloanele de extins din tabelul intern. Specificaţi <code>newColumnNames</code> pentru a evita conflictele dintre coloanele existente şi noile coloane.


## Examples

### Example #1 
Extindeţi coloanele de tabel din &lt;code&gt;[a]&lt;/code&gt; din tabelul &lt;code&gt;(\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})&lt;/code&gt; în 3 coloane &lt;code&gt;[t.a]&lt;/code&gt;, &lt;code&gt;[t.b]&lt;/code&gt; şi &lt;code&gt;[t.c]&lt;/code&gt;.
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
