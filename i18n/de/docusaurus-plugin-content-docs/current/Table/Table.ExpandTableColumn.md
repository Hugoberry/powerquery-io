---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


## Description

Erweitert eine Spalte mit Datensätzen oder eine Spalte mit Tabellen zu mehreren Spalten in der enthaltenden Tabelle.


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

Erweitert Tabellen in "<code>table</code>[<code>column</code>]" zu mehrere Zeilen und Spalten. "<code>columnNames</code>" dient zum Auswählen der zu erweiternden Spalten der internen Tabelle. Geben Sie "<code>newColumnNames</code>" an, um Konflikte zwischen vorhandenen und neuen Spalten zu vermeiden.


## Examples

### Example #1 
Erweitert Tabellenspalten in &lt;code&gt;[a]&lt;/code&gt; in der Tabelle &lt;code&gt;(\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})&lt;/code&gt; zu drei Spalten: &lt;code&gt;[t.a]&lt;/code&gt;, &lt;code&gt;[t.b]&lt;/code&gt; und &lt;code&gt;[t.c]&lt;/code&gt;.
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
