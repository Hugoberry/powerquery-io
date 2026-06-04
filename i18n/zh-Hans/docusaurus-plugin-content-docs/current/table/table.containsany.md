---
title: Table.ContainsAny
---

# Table.ContainsAny


指示任何指定的记录是否显示为表中的各行。


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

指示记录列表 `rows` 中任何指定的记录是否显示为 `table` 中的各行。 可以指定一个可选参数 `equationCriteria`，以控制表各行之间的比较。


## Examples

### Example #1
确定表 `({[a = 1, b = 2], [a = 3, b = 4]})` 是否包含行 `[a = 1, b = 2]` 或 `[a = 3, b = 5]`。
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 2],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
true
```


### Example #2
确定表 `({[a = 1, b = 2], [a = 3, b = 4]})` 是否包含行 `[a = 1, b = 3]` 或 `[a = 3, b = 5]`。
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
false
```


### Example #3
确定表 `(Table.FromRecords({[a = 1, b = 2], [a = 3, b = 4]}))` 是否包含只比较列 \[a\] 的行 `[a = 1, b = 3]` 或 `[a = 3, b = 5]`。
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    },
    "a"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership
