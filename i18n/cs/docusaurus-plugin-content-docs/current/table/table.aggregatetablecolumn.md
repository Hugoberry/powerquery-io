---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


Agreguje sloupec tabulek do více sloupců v obsahující tabulce.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Remarks

Agreguje tabulky v databázi `table`\[`column`\] do více sloupců obsahujících agregované hodnoty tabulek. Hodnota `aggregations` se používá k určení sloupců obsahujících tabulky k agregaci, agregačních funkcí, které se použijí s tabulkami k vygenerování jejich hodnot, a názvů agregovaných sloupců k vytvoření.


## Examples

### Example #1
Agreguje sloupce tabulky v `[t]` v tabulce `{[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}` na součet `[t.a]`, minimální a maximální hodnotu `[t.b]` a počet hodnot v `[t.a]`.
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
