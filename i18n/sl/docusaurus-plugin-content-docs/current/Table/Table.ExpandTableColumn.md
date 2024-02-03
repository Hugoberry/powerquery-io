---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


## Description

Razširi stolpec zapisov ali stolpec tabel v več stolpcev v vsebovalni tabeli.


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

Razširi tabele v <code>table</code>[<code>column</code>] v več vrstic in stolpcev. <code>columnNames</code> se uporablja za izbiro stolpcev, ki bodo razširjeni iz notranje tabele. Navedite <code>newColumnNames</code>, da ne pride do sporov med obstoječimi in novimi stolpci.


## Examples

### Example #1 
Razširite stolpce tabele v &lt;code&gt;[a]&lt;/code&gt; v tabeli &lt;code&gt;(\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})&lt;/code&gt; v 3 stolpce &lt;code&gt;[t.a]&lt;/code&gt;, &lt;code&gt;[t.b]&lt;/code&gt; in &lt;code&gt;[t.c]&lt;/code&gt;.
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
