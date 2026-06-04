---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


指示是否表中的所有行都满足给定的条件。


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Remarks

指示是否 `table` 中的所有行都满足给定的 `condition`。如果所有行都匹配，则返回 `true`；否则返回 `false`。


## Examples

### Example #1
确定列 \[a\] 中的所有行值是否在表中。
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
true
```


### Example #2
查找在表 `({[a = 1, b = 2], [a = 3, b = 4]})` 中，是否所有行值均为 \[a = 1, b = 2\]。
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
false
```




## Category
Table.Row operations
