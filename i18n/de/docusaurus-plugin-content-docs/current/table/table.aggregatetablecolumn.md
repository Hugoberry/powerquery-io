---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


Aggregiert eine Spalte mit Tabellen zu mehreren Spalten in der enthaltenden Tabelle.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Remarks

Aggregiert Tabellen in "`table`\[`column`\]" zu mehreren Spalten mit Aggregatwerten für die Tabellen. "`aggregations`" dient zum Angeben der Spalten mit den zu aggregierenden Tabellen, der Aggregationsfunktionen, die zum Generieren der Werte auf die Tabellen angewendet werden sollen, sowie der Namen der zu erstellenden Aggregationsspalten.


## Examples

### Example #1
Aggregiert Tabellenspalten in `[t]` in der Tabelle `{[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}` zur Summe von `[t.a]`, zu den Mindest- und Höchstwerten von `[t.b]` sowie zur Werteanzahl in`[t.a]`.
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
