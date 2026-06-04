---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


테이블의 모든 행이 지정된 조건을 충족하는지 여부를 나타냅니다.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Remarks

`table`의 모든 행이 지정된 `condition`과(와) 일치하는지 여부를 나타냅니다. 모든 행이 일치하면 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다.


## Examples

### Example #1
테이블에서 \[a\] 열의 행 값이 모두 짝수인지 여부를 확인합니다.
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
`({[a = 1, b = 2], [a = 3, b = 4]})` 테이블에서 모든 행 값이 \[a = 1, b = 2\]인지 여부를 확인합니다.
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
