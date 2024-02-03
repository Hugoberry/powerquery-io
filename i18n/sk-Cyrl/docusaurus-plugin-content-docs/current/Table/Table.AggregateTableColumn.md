---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


## Description

Agreguje stĺpec tabuliek do viacerých stĺpcov v obsahujúcej tabuľke.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Details

Agreguje tabuľky v časti <code>table</code>[<code>column</code>] do viacerých stĺpcov obsahujúcich agregačné hodnoty pre tabuľky. <code>aggregations</code> sa používa na zadanie stĺpcov obsahujúcich tabuľky určené na agregáciu, agregačné funkcie určené na použitie v tabuľkách s cieľom generovať ich hodnoty, ako aj názvy agregačných stĺpcov, ktoré sa majú vytvoriť.


## Examples

### Example #1 
Agregujte stĺpce tabuľky v časti &lt;code&gt;[t]&lt;/code&gt; v tabuľke &lt;code&gt;\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}&lt;/code&gt; na súčet hodnôt &lt;code&gt;[t.a]&lt;/code&gt;, minimum a maximum hodnôt &lt;code&gt;[t.b]&lt;/code&gt; a počet hodnôt v časti &lt;code&gt;[t.a]&lt;/code&gt;.
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
