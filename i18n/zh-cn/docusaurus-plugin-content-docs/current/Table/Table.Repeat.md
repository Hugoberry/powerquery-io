---
title: Table.Repeat
---

# Table.Repeat


## Description

对表行重复指定的次数。


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Details

从输入 <code>table</code> 返回一个表，其中的列重复了指定的 <code>count</code> 次。


## Examples

### Example #1 
对表中的行重复两次。
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
