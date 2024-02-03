---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


## Description

Agregă o coloană de tabele în mai multe coloane în tabelul inclus.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Details

Agregă tabele în <code>table</code>[<code>column</code>] în mai multe coloane ce conţin valori de agregat pentru tabele. Se utilizează <code>aggregations</code> pentru a specifica coloanele ce conţin tabelele de agregat, funcţiile de agregare de aplicat la tabele pentru a genera valorile acestora şi numele coloanelor de agregat de creat.


## Examples

### Example #1 
Agregaţi coloanele din tabel în &lt;code&gt;[t]&lt;/code&gt; din tabelul &lt;code&gt;\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}&lt;/code&gt; în suma &lt;code&gt;[t.a]&lt;/code&gt;, valoarea min. şi max. a &lt;code&gt;[t.b]&lt;/code&gt; şi numărul valorilor din &lt;code&gt;[t.a]&lt;/code&gt;.
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
