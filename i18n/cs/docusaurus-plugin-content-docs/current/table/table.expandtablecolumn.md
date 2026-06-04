---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


Rozšíří sloupec záznamů nebo sloupec tabulek na více sloupců v obsahující tabulce.


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

Rozšíří sloupec tabulky `table`\[`column`\] na více řádků a sloupců. `columnNames` slouží k výběru sloupců z vnitřní tabulky, které mají být rozšířeny. Určením parametru `newColumnNames` se vyhnete konfliktům mezi stávajícími a novými sloupci.


## Examples

### Example #1
Rozšíří sloupce tabulky v `[a]` v tabulce `({[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})` na tři sloupce `[t.a]`, `[t.b]` a `[t.c]`.
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
