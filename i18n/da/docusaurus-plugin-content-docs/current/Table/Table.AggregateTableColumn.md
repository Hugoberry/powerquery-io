---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


## Description

Aggregerer en kolonne i tabeller i flere kolonner i den tabel, der indeholder dem.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Details

Aggregerer tabeller i <code>table</code> [<code>column</code>] i flere kolonner, der indeholder aggregerede værdier for tabellerne. <code>aggregations</code> bruges til at angive de kolonner, der indeholder de tabeller, som skal aggregeres, den aggregeringsfunktion, der skal anvendes på tabellerne for at oprette deres værdier, og navnene på de aggregeringskolonner, der skal oprettes.


## Examples

### Example #1 
Aggreger tabelkolonner i &lt;code&gt;[t]&lt;/code&gt; i tabellen &lt;code&gt;\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}&lt;/code&gt; til summen &lt;code&gt;[t.a]&lt;/code&gt;, minimum og maksimum for &lt;code&gt;[t.b]&lt;/code&gt; og antallet af værdier i &lt;code&gt;[t.a]&lt;/code&gt;.
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
