---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


Maakt een aggregatie van een kolom met tabellen in meerdere kolommen in de tabel die optreedt als container.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Remarks

Maakt een aggregatie van tabellen in `table`\[`column`\] in meerdere kolommen waarin aggregatiewaarden voor de tabellen staan. `aggregations` wordt gebruikt voor het opgeven van de kolommen die de te aggregeren tabellen bevatten, de aggregatiefuncties die moeten worden toegepast op de tabellen om de waarden voor die tabellen te generen, en de namen van de aggregatietabellen die moeten worden gemaakt.


## Examples

### Example #1
De tabelkolommen aggregeren in `[t]` in de tabel `{[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}` in de som van `[t.a]`, het minimum en maximum van `[t.b]` en het aantal waarden in `[t.a]`.
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
