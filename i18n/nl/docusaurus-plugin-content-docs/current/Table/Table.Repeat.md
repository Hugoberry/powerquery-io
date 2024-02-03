---
title: Table.Repeat
---

# Table.Repeat


## Description

Herhaalt de rijen van de tabel het opgeven aantal malen.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Details

Retourneert een tabel met de rijen vanuit de invoer <code>table</code> de opgegeven <code>count</code> keer.


## Examples

### Example #1 
De rijen in de tabel twee keer herhalen.
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
