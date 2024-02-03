---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


## Description

Aggrega una colonna di tabelle in più colonne nella tabella che la contiene.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Details

Aggrega le tabelle in <code>table</code>[<code>column</code>] in più colonne contenenti i valori di aggregazione per le tabelle. <code>aggregations</code> viene utilizzato per specificare le colonne contenenti le tabelle da aggregare, le funzioni di aggregazione da applicare alle tabelle per generare i relativi valori e i nomi delle colonne aggregate da creare.


## Examples

### Example #1 
Aggregare le colonne di tabella in &lt;code&gt;[t]&lt;/code&gt; nella tabella &lt;code&gt;\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}&lt;/code&gt; nella somma di &lt;code&gt;[t.a]&lt;/code&gt;, il valore minimo e massimo di &lt;code&gt;[t.b]&lt;/code&gt; e il conteggio dei valori in &lt;code&gt;[t.a]&lt;/code&gt;.
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
