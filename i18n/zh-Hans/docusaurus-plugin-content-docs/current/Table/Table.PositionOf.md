---
title: Table.PositionOf
---

# Table.PositionOf


返回行在表中的一个或多个位置。


## Syntax

```powerquery
Table.PositionOf(
    table as table,
    row as record,
    optional occurrence as any,
    optional equationCriteria as any
) as any
```


## Remarks

返回在指定的 `table` 中第一次出现 `row` 的行位置。如果找不到该值，则返回 -1。

-   `table`: 输入表。
-   `row`: 表中要查找其位置的行。
-   `occurrence`: *(可选)*指定要返回的行的出现次数。
-   `equationCriteria`: *(可选)*控制表行之间的比较。


## Examples

### Example #1
查找 \[a = 2, b = 4\] 在表 `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` 中第一次出现的位置。
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4]
)
```

Result: 
```powerquery
0
```


### Example #2
查找 \[a = 2, b = 4\] 在表 `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` 中第二次出现的位置。
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    1
)
```

Result: 
```powerquery
2
```


### Example #3
查找 \[a = 2, b = 4\] 在表 `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` 中所有出现的位置。
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    Occurrence.All
)
```

Result: 
```powerquery
{0, 2}
```




## Category
Table.Membership
