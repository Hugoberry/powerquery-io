---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


Prikuplja kolonu sa tabelama u više kolona u okviru tabele koja ih sadrži.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Remarks

Prikuplja tabele iz `table`\[`column`\] u više kolona koje sadrže agregatne vrednosti za tabele. `aggregations` se koristi za navođenje kolona koje sadrže tabele za agregaciju, agregatnih funkcija koje se primenjuju na tabele radi generisanja njihovih vrednosti, kao i imena agregatnih kolona koje treba kreirati.


## Examples

### Example #1
Prikupljanje kolona tabele u `[t]` u okviru tabele `{[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}` u zbir `[t.a]`, minimum i maksimum `[t.b]`, kao i broj vrednosti u `[t.a]`.
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
