---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


Ierakstu kolonna vai tabulu kolonna tiek izvērsta vairākās kolonnās ietverošajā tabulā.


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

`table`\[`column`\] tabulas tiek izvērstas vairākās rindās un kolonnās. `columnNames` tiek lietots, lai atlasītu no iekšējās tabulas izvēršamās kolonnas. Norādiet `newColumnNames`, lai nerastos konflikti starp esošajām un jaunajām kolonnām.


## Examples

### Example #1
`[a]` tabulas kolonnas tabulā `({[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})` izvērsiet 3 kolonnās: `[t.a]`, `[t.b]` un `[t.c]`.
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
