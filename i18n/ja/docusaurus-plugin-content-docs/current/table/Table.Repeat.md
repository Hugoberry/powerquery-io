---
title: Table.Repeat
---

# Table.Repeat


テーブルの行を指定回数だけ繰り返します。


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Remarks

<code>count</code> 回繰り返された行を含むテーブルを、入力 <code>table</code> から返します。


## Examples

### Example #1 
テーブルの行を 2 回繰り返します。
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
