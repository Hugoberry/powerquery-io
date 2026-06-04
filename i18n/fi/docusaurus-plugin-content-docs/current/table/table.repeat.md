---
title: Table.Repeat
---

# Table.Repeat


Toistaa taulukoiden rivit määritetyn määrän kertoja.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Remarks

Palauttaa taulukon, joka sisältää määritetyn `count` kertaa toistetut syötteen `table` rivit.


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
