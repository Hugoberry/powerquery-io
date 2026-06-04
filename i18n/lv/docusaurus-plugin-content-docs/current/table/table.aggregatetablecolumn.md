---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


Tabulu kolonna tiek apkopota vairākās ietverošās tabulas kolonnās.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Remarks

Kolonnā `table`\[`column`\] ietvertās tabulas tiek apkopotas vairākās kolonnās, kurās ir ietvertas tabulu apkopojuma vērtības. Parametrs `aggregations` tiek izmantots, lai norādītu kolonnas, kurās ir ietvertas apkopojamās tabulas, apkopošanas funkcijas, kas ir jālieto tabulām, lai ģenerētu to vērtības, un izveidojamo apkopojuma kolonnu nosaukumus.


## Examples

### Example #1
Apkopojiet tabulas `{[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}` kolonnā `[t]` norādītās tabulu kolonnas, lai iegūtu `[t.a]` summu, `[t.b]` minimālo un maksimālo vērtību un `[t.a]` vērtību skaitu.
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
