---
title: Table.PositionOf
---

# Table.PositionOf


테이블 내의 행 위치를 반환합니다.


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

지정된 `row`에서 `table`이(가) 처음 발생하는 행 위치를 반환합니다. 발생 항목이 없으면 -1을 반환합니다.

-   `table`: 입력 테이블입니다.
-   `row`: 위치를 찾을 테이블의 행입니다.
-   `occurrence`: *(선택 사항)* 반환할 행의 발생을 지정합니다.
-   `equationCriteria`: *(선택 사항)* 테이블 행 간의 비교를 제어합니다.


## Examples

### Example #1
`({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` 테이블에서 \[a = 2, b = 4\]의 첫 번째 발생 위치를 찾습니다.
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
`({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` 테이블에서 \[a = 2, b = 4\]의 두 번째 발생 위치를 찾습니다.
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
`({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` 테이블에서 \[a = 2, b = 4\]의 모든 발생 위치를 찾습니다.
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
