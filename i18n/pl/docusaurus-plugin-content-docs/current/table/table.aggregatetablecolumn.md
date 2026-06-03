---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


Agreguje kolumnę tabel do wielu kolumn w tabeli zawierającej.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Remarks

Agreguje tabele w kolumnie `table`\[`column`\] do wielu kolumn zawierających zagregowane wartości dla tabel. Parametr `aggregations` służy do określania kolumn zawierających tabele do zagregowania, funkcje agregujące do zastosowania do tabel w celu wygenerowania wartości oraz nazwy kolumn agregacji do utworzenia.


## Examples

### Example #1
Zagreguj kolumny tabel z tabeli `[t]` w tabeli `{[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}` do sumy kolumny `[t.a]`, wartości minimalnej i maksymalnej kolumny `[t.b]` oraz liczby wartości w kolumnie `[t.a]`.
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
