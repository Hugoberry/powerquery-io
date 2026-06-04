---
title: Table.ReplaceRows
---

# Table.ReplaceRows


使用提供的行替换指定范围内的行。


## Syntax

```powerquery
Table.ReplaceRows(
    table as table,
    offset as number,
    count as number,
    rows as list
) as table
```


## Remarks

在输入 `table` 中使用指定的 `rows`，从 `offset` 之后开始替换指定的行数 `count`。`rows` 参数是记录列表。

-   `table`: 要在其中执行替换的表。
-   `offset`: 在进行替换之前要跳过的行数。
-   `count`: 要替换的行数。
-   `rows`: 要在由 `offset` 指定的位置插入到 `table` 中的行记录的列表。


## Examples

### Example #1
从位置 1 开始，替换 3 行。
```powerquery
Table.ReplaceRows(
    Table.FromRecords({
        [Column1 = 1],
        [Column1 = 2],
        [Column1 = 3],
        [Column1 = 4],
        [Column1 = 5]
    }),
    1,
    3,
    {[Column1 = 6], [Column1 = 7]}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1],
    [Column1 = 6],
    [Column1 = 7],
    [Column1 = 5]
})
```




## Category
Table.Row operations
