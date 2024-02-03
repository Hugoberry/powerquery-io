---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


## Description

Agreguje sloupec tabulek do více sloupců v obsahující tabulce.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Details

Agreguje tabulky v databázi <code>table</code>[<code>column</code>] do více sloupců obsahujících agregované hodnoty tabulek. Hodnota <code>aggregations</code> se používá k určení sloupců obsahujících tabulky k agregaci, agregačních funkcí, které se použijí s tabulkami k vygenerování jejich hodnot, a názvů agregovaných sloupců k vytvoření.


## Examples

### Example #1 
Agreguje sloupce tabulky v &lt;code&gt;[t]&lt;/code&gt; v tabulce &lt;code&gt;\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}&lt;/code&gt; na součet &lt;code&gt;[t.a]&lt;/code&gt;, minimální a maximální hodnotu &lt;code&gt;[t.b]&lt;/code&gt; a počet hodnot v &lt;code&gt;[t.a]&lt;/code&gt;.
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
