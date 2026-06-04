---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


Agregă o coloană de tabele în mai multe coloane în tabelul inclus.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Remarks

Agregă tabele în `table`\[`column`\] în mai multe coloane ce conţin valori de agregat pentru tabele. Se utilizează `aggregations` pentru a specifica coloanele ce conţin tabelele de agregat, funcţiile de agregare de aplicat la tabele pentru a genera valorile acestora şi numele coloanelor de agregat de creat.


## Examples

### Example #1
Agregaţi coloanele din tabel în `[t]` din tabelul `{[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}` în suma `[t.a]`, valoarea min. şi max. a `[t.b]` şi numărul valorilor din `[t.a]`.
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
