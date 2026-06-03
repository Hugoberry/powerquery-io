---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


Breidt een kolom met records of een kolom met tabellen uit naar meerdere kolommen in de tabel die als een container fungeert.


## Syntax

```powerquery
Table.ExpandTableColumn(
    table as table,
    column as text,
    columnNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

Breidt tabellen in `table`\[`column`\] naar meerdere rijen en kolommen uit. `columnNames` wordt gebruikt voor het selecteren van de kolommen die vanuit de interne tabel worden uitgebreid. Geef `newColumnNames` op om conflicten tussen bestaande en nieuwe kolommen te voorkomen.


## Examples

### Example #1
Tabelkolommen in `[a]` in de tabel `({[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})` uitbreiden naar drie kolommen `[t.a]`, `[t.b]` en `[t.c]`.
```powerquery
Table.ExpandTableColumn(
    Table.FromRecords({
        [
            t = Table.FromRecords({
                [a = 1, b = 2, c = 3],
                [a = 2, b = 4, c = 6]
            }),
            b = 2
        ]
    }),
    "t",
    {"a", "b", "c"},
    {"t.a", "t.b", "t.c"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [t.a = 1, t.b = 2, t.c = 3, b = 2],
    [t.a = 2, t.b = 4, t.c = 6, b = 2]
})
```




## Category
Table.Transformation
