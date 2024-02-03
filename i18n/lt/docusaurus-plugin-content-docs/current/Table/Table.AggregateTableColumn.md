---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


## Description

Agreguoja lentelių stulpelį į kelis stulpelius esančioje lentelėje.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Details

Agreguoja lenteles, esančias <code>table</code> [<code>column</code>], į kelis stulpelius, kuriuose yra agreguotos lentelių reikšmės. <code>aggregations</code> naudojama norint nurodyti stulpelius, kuriuose yra agreguotinos lentelės, agregavimo funkcijas, kurios taikomos lentelėms norint generuoti jų reikšmes, ir kurtini agreguotų stulpelių pavadinimai.


## Examples

### Example #1 
Agreguokite lentelių stulpelius, esančius &lt;code&gt;[t]&lt;/code&gt; lentelėje &lt;code&gt;\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}&lt;/code&gt;, į &lt;code&gt;[t.a]&lt;/code&gt; sumą, min. ir maks. &lt;code&gt;[t.b]&lt;/code&gt; ir &lt;code&gt;[t.a]&lt;/code&gt; reikšmių skaičių.
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
