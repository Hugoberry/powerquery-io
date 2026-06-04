---
title: Table.Repeat
---

# Table.Repeat


Mengulangi baris jadual untuk bilangan kali yang ditentukan.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Remarks

Mengembalikan jadual dengan baris daripada input `table` diulangi bilangan kali `count` yang ditentukan.


## Examples

### Example #1
Ulang baris dalam jadual dua kali.
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
