---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


Extinde o coloană de înregistrări sau o coloană de tabele în mai multe coloane în tabelul inclus.


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

Extinde tabelele din `table`\[`column`\] în mai multe rânduri şi coloane. Se utilizează `columnNames` pentru a selecta coloanele de extins din tabelul intern. Specificaţi `newColumnNames` pentru a evita conflictele dintre coloanele existente şi noile coloane.


## Examples

### Example #1
Extindeţi coloanele de tabel din `[a]` din tabelul `({[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})` în 3 coloane `[t.a]`, `[t.b]` şi `[t.c]`.
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
