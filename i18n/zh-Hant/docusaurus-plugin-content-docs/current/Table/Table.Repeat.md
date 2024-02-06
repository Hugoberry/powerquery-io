---
title: Table.Repeat
---

# Table.Repeat


將資料表的資料列重複指定的次數。


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Remarks

傳回資料表，其中來自輸入 <code>table</code> 的資料列會重複指定 <code>count</code> 次。


## Examples

### Example #1 
將資料表中的資料列重複兩次。
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
