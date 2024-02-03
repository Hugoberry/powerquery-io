---
title: Table.Repeat
---

# Table.Repeat


## Description

Repeteix les files de les taules un nombre de vegades especificat.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Details

Retorna una taula amb les files a partir de l'entrada <code>table</code> repetides el <code>count</code> de vegades especificat.


## Examples

### Example #1 
Repeteix les files a la taula dues vegades.
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
