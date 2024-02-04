---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


## Description

Aggregiert eine Spalte mit Tabellen zu mehreren Spalten in der enthaltenden Tabelle.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Details

Aggregiert Tabellen in "<code>table</code>[<code>column</code>]" zu mehreren Spalten mit Aggregatwerten für die Tabellen. "<code>aggregations</code>" dient zum Angeben der Spalten mit den zu aggregierenden Tabellen, der Aggregationsfunktionen, die zum Generieren der Werte auf die Tabellen angewendet werden sollen, sowie der Namen der zu erstellenden Aggregationsspalten.


## Examples

### Example #1 
Aggregiert Tabellenspalten in &lt;code&gt;[t]&lt;/code&gt; in der Tabelle &lt;code&gt;\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}&lt;/code&gt; zur Summe von &lt;code&gt;[t.a]&lt;/code&gt;, zu den Mindest- und Höchstwerten von &lt;code&gt;[t.b]&lt;/code&gt; sowie zur Werteanzahl in&lt;code&gt;[t.a]&lt;/code&gt;.
```powerquery
Table.AggregateTableColumn(
    Table.FromRecords(
        {
            [
                t = Table.FromRecords({
                    [a = 1, b = 2, c = 3],
                    [a = 2, b = 4, c = 6]
                }),
                b = 2
            ]
        },
        type table [t = table [a = number, b = number, c = number], b = number]
    ),
    "t",
    {
        {"a", List.Sum, "sum of t.a"},
        {"b", List.Min, "min of t.b"},
        {"b", List.Max, "max of t.b"},
        {"a", List.Count, "count of t.a"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[#"sum of t.a" = 3, #"min of t.b" = 2, #"max of t.b" = 4, #"count of t.a" = 2, b = 2]})
```




## Category
Table.Transformation
