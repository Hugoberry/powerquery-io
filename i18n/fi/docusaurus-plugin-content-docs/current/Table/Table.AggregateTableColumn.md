---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


## Description

Koostaa taulukoiden sarakkeen sisältävän taulukon useisiin sarakkeisiin.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Details

Koostaa kohteen <code>table</code>[<code>column</code>] taulukot useisiin sarakkeisiin, jotka sisältävät koostearvoja taulukoille. Kohdetta <code>aggregations</code> käytetään määrittämään sarakkeet, jotka sisältävät kostettavat taulukot, taulukoille niiden arvojen muodostamista varten käytettävät koostefunktiot ja luotavien koostesarakkeiden nimet.


## Examples

### Example #1 
Koosta taulukkosarakkeet kohteessa &lt;code&gt;[t]&lt;/code&gt; taulukossa &lt;code&gt;\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}&lt;/code&gt; summaan &lt;code&gt;[t.a]&lt;/code&gt;, vähimmäis- ja enimmäisarvoihin kohteelle &lt;code&gt;[t.b]&lt;/code&gt; ja kohteen &lt;code&gt;[t.a]&lt;/code&gt; arvojen määrään.
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
