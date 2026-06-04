---
title: Table.Max
---

# Table.Max


지정된 조건을 사용하여 가장 큰 행이나 기본값을 반환합니다.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

`comparisonCriteria`이(가) 지정된 경우 `table`의 가장 큰 행을 반환합니다. 테이블이 비어 있으면 선택적 `default` 값이 반환됩니다.


## Examples

### Example #1
`({[a = 2, b = 4], [a = 6, b = 8]})` 테이블에서 \[a\] 열의 값이 가장 큰 행을 찾습니다.
```powerquery
Table.Max(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 6, b = 8]
```


### Example #2
`({})` 테이블에서 \[a\] 열의 값이 가장 큰 행을 찾습니다. 테이블이 비어 있으면 -1을 반환합니다.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
