---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


## Description

Espande una colonna di record o una colonna di tabelle in più colonne nella tabella che la contiene.


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

Espande le tabelle in <code>table</code>[<code>column</code>] in più righe più e colonne. <code>columnNames</code> viene utilizzato per selezionare le colonne da espandere dalla tabella interna. Specificare <code>newColumnNames</code> per evitare conflitti tra le colonne esistenti e le nuove colonne.


## Examples

### Example #1 
Espandere le colonne di tabella in &lt;code&gt;[a]&lt;/code&gt; nella tabella &lt;code&gt;(\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})&lt;/code&gt; in 3 colonne &lt;code&gt;[t.a]&lt;/code&gt;, &lt;code&gt;[t.b]&lt;/code&gt; e &lt;code&gt;[t.c]&lt;/code&gt;.
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
