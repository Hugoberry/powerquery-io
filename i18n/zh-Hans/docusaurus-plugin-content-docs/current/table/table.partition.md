---
title: Table.Partition
---

# Table.Partition


根据指定的组和列的数目，将表分区为一系列表。


## Syntax

```powerquery
Table.Partition(
    table as table,
    column as text,
    groups as number,
    hash as function
) as list
```


## Remarks

根据 `column` 和 `hash` 函数的值，将 `table` 分区为一组 `groups` 个表。 `hash` 函数应用于 `column` 行的值，以获取该行的哈希值。哈希值模数 `groups` 确定要将该行放入所返回的哪个表中。

-   `table`: 要分区的表。
-   `column`: 要执行哈希运算以确定该行位于返回的哪个表中的列。
-   `groups`: 要对输入表进行分区的表数。
-   `hash`: 应用以获取哈希值的函数。


## Examples

### Example #1
使用列的值作为哈希函数，基于列 \[a\] 将表 `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` 分区为 2 个表。
```powerquery
Table.Partition(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    "a",
    2,
    each _
)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 2, b = 4]
    }),
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 1, b = 4]
    })
}
```




## Category
Table.Row operations
