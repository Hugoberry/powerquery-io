---
title: Table.Repeat
---

# Table.Repeat


## Description

Tabulas rindas tiek atkārtotas norādīto reižu skaitu.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Details

Tiek atgriezta tabula ar rindām no ievades <code>table</code>, kas atkārtotas norādītās <code>count</code> reizes.


## Examples

### Example #1 
Atkārtojiet tabulā rindas divas reizes.
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
