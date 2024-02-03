---
title: Table.Repeat
---

# Table.Repeat


## Description

Lặp lại các hàng của các bảng với số lần được chỉ định.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Details

Trả về một bảng có các hàng từ đầu vào <code>table</code> lặp lại số lần <code>count</code> được chỉ định.


## Examples

### Example #1 
Lặp lại các hàng trong bảng hai lần.
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
