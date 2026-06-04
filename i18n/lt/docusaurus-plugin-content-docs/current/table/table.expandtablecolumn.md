---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


Įrašų stulpelis arba lentelių stulpelis išplečiamas į kelis stulpelius esančioje lentelėje.


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

`table`\[`column`\] lentelės išplečiamos į kelias eilutes ir stulpelius. `columnNames` naudojamas norint pasirinkti iš vidinės lentelės norimus išplėsti stulpelius. Nurodykite `newColumnNames`, jei norite išvengti esamų ir naujų stulpelių nesuderinamumo.


## Examples

### Example #1
Išplėskite `[a]` lentelės stulpelius lentelėje `({[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})` į 3 stulpelius `[t.a]`, `[t.b]` ir `[t.c]`.
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
