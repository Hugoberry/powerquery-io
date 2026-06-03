---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


テーブル内のすべての行が指定された条件を満たしているかどうかを示します。


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Remarks

`table` 内のすべての行が指定された `condition` と一致しているかどうかを示します。すべての行が一致する場合は `true`、それ以外の場合は `false` を返します。


## Examples

### Example #1
テーブルの列 \[a\] のすべての行の値が偶数かどうかを調べます。
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
テーブル `({[a = 1, b = 2], [a = 3, b = 4]})` 内のすべての行の値が \[a = 1, b = 2\] かどうかを調べます。
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
