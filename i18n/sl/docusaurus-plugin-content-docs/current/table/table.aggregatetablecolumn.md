---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


Združi stolpec tabel v več stolpcev v vsebovalni tabeli.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Remarks

Združi tabele v `table`\[`column`\] v več stolpcev, ki vsebujejo združene vrednosti za tabele. `aggregations` se uporablja za določanje stolpcev s tabelami, ki bodo združene, združevalnih funkcij, s katerimi bodo ustvarjene vrednosti tabel, in imen združenih stolpcev, ki bodo ustvarjeni.


## Examples

### Example #1
Združite stolpce tabele v `[t]` v tabeli `{[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}` v vsoto vrednosti `[t.a]`, najmanjše in največje vrednosti `[t.b]` in števila vrednosti v `[t.a]`.
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
