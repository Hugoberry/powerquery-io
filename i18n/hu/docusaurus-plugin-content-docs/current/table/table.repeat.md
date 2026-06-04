---
title: Table.Repeat
---

# Table.Repeat


Megismétli a tábla sorait a megadott számú alkalommal.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Remarks

Táblát ad vissza a bemeneti `table` táblából, amely a megadott `count` alkalommal ismételve tartalmazza annak sorait.


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
