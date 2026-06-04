---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


Rozbalí stĺpec záznamov alebo stĺpec tabuliek do viacerých stĺpcov v obsahujúcej tabuľke.


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

Rozbalí tabuľky v časti `table`\[`column`\] do viacerých riadkov a stĺpcov. `columnNames` sa používa na výber stĺpcov, ktoré sa majú rozbaliť z vnútornej tabuľky. Zadajte parameter `newColumnNames`, aby ste sa vyhli konfliktom medzi existujúcimi stĺpcami a novými stĺpcami.


## Examples

### Example #1
Rozbaľte stĺpce tabuľky v časti `[a]` v tabuľke `({[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})` do 3 stĺpcov `[t.a]`, `[t.b]` a `[t.c]`.
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
