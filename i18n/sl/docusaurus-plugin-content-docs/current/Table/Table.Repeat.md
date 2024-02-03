---
title: Table.Repeat
---

# Table.Repeat


## Description

Ponovi vrstice tabele tolikokrat, kot je navedeno.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Details

Vrne tabelo, v kateri se vrstice iz vnosa <code>table</code> ponovijo <code>count</code>-krat, kot je navedeno.


## Examples

### Example #1 
Dvakrat ponovite vrstice v tabeli.
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
