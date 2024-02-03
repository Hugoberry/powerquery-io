---
title: Table.Repeat
---

# Table.Repeat


## Description

Toistaa taulukoiden rivit määritetyn määrän kertoja.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Details

Palauttaa taulukon, joka sisältää määritetyn <code>count</code> kertaa toistetut syötteen <code>table</code> rivit.


## Examples

### Example #1 
Toista taulukon rivit kahdesti.
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
