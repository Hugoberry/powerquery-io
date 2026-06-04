---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


Laajentaa saraketaulukon saraketietueen useiksi sarakkeiksi sisältävässä taulukossa.


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

Laajentaa taulukot kohteessa `table`\[`column`\] useiksi riveiksi ja sarakkeiksi. Kohdetta `columnNames` käytetään valitsemaan sisemmästä taulukosta laajennettavat sarakkeet. Määritä `newColumnNames`, jotta voit välttää ristiriidat aiemmin luotujen sarakkeiden ja uusien sarakkeiden välillä.


## Examples

### Example #1
Laajenna taulukkosarakkeet kohteessa `[a]` taulukossa `({[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})` kolmeksi sarakkeeksi, jotka ovat `[t.a]`, `[t.b]` ja `[t.c]`.
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
