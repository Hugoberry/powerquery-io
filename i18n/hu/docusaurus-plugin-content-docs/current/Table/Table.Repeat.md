---
title: Table.Repeat
---

# Table.Repeat


## Description

Megismétli a tábla sorait a megadott számú alkalommal.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Details

Táblát ad vissza a bemeneti <code>table</code> táblából, amely a megadott <code>count</code> alkalommal ismételve tartalmazza annak sorait.


## Examples

### Example #1 
Kétszer megismétli a sorokat a táblában.
```powerquery
Table.Repeat(
    Table.FromRecords({
        [a = 1, b = "hello"],
        [a = 3, b = "world"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = "hello"],
    [a = 3, b = "world"],
    [a = 1, b = "hello"],
    [a = 3, b = "world"]
})
```




## Category
Table.Row operations
