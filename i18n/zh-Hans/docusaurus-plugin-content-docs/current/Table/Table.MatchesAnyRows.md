---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


指示是否表中的任何行都满足给定的条件。


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Remarks

指示是否 `table` 中的任何行都满足给定的 `condition`。如果任何行都匹配，则返回 `true`；否则返回 `false`。


## Examples

### Example #1
确定列 \[a\] 中的任何行值是否在表 `({[a = 2, b = 4], [a = 6, b = 8]})` 中。
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 3, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
false
```


### Example #2
确定表 `({[a = 1, b = 2], [a = 3, b = 4]})` 中任何行值是否均为 \[a = 1, b = 2\]。
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
true
```




## Category
Table.Row operations
