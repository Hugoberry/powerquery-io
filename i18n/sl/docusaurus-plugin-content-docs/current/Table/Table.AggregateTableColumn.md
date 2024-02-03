---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


## Description

Združi stolpec tabel v več stolpcev v vsebovalni tabeli.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Details

Združi tabele v <code>table</code>[<code>column</code>] v več stolpcev, ki vsebujejo združene vrednosti za tabele. <code>aggregations</code> se uporablja za določanje stolpcev s tabelami, ki bodo združene, združevalnih funkcij, s katerimi bodo ustvarjene vrednosti tabel, in imen združenih stolpcev, ki bodo ustvarjeni.


## Examples

### Example #1 
Združite stolpce tabele v &lt;code&gt;[t]&lt;/code&gt; v tabeli &lt;code&gt;\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}&lt;/code&gt; v vsoto vrednosti &lt;code&gt;[t.a]&lt;/code&gt;, najmanjše in največje vrednosti &lt;code&gt;[t.b]&lt;/code&gt; in števila vrednosti v &lt;code&gt;[t.a]&lt;/code&gt;.
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
