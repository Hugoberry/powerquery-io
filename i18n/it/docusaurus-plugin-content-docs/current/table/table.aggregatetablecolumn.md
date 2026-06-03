---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


Aggrega una colonna di tabelle in più colonne nella tabella che la contiene.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Remarks

Aggrega le tabelle in `table`\[`column`\] in più colonne contenenti i valori di aggregazione per le tabelle. `aggregations` viene utilizzato per specificare le colonne contenenti le tabelle da aggregare, le funzioni di aggregazione da applicare alle tabelle per generare i relativi valori e i nomi delle colonne aggregate da creare.


## Examples

### Example #1
Aggregare le colonne di tabella in `[t]` nella tabella `{[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}` nella somma di `[t.a]`, il valore minimo e massimo di `[t.b]` e il conteggio dei valori in `[t.a]`.
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
