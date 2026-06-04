---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


Koostaa taulukoiden sarakkeen sisältävän taulukon useisiin sarakkeisiin.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Remarks

Koostaa kohteen `table`\[`column`\] taulukot useisiin sarakkeisiin, jotka sisältävät koostearvoja taulukoille. Kohdetta `aggregations` käytetään määrittämään sarakkeet, jotka sisältävät kostettavat taulukot, taulukoille niiden arvojen muodostamista varten käytettävät koostefunktiot ja luotavien koostesarakkeiden nimet.


## Examples

### Example #1
Koosta taulukkosarakkeet kohteessa `[t]` taulukossa `{[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}` summaan `[t.a]`, vähimmäis- ja enimmäisarvoihin kohteelle `[t.b]` ja kohteen `[t.a]` arvojen määrään.
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
