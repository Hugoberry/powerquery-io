---
title: Table.PositionOfAny
---

# Table.PositionOfAny


테이블 내에서 지정된 행이 있는 위치를 반환합니다.


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Remarks

`rows` 목록에서 처음 발생하는 `table`부터 행 위치를 반환합니다. 발생 항목이 없으면 -1을 반환합니다.

-   `table`: 입력 테이블입니다.
-   `rows`: 위치를 찾을 테이블의 행 목록입니다.
-   `occurrence`: *(선택 사항)* 반환할 행의 발생을 지정합니다.
-   `equationCriteria`: *(선택 사항)* 테이블 행 간의 비교를 제어합니다.


## Examples

### Example #1
`({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` 테이블에서 \[a = 2, b = 4\] 또는 \[a = 6, b = 8\]의 첫 번째 발생 위치를 찾습니다.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    }
)
```

Result: 
```powerquery
0
```


### Example #2
`({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}` 테이블에서 \[a = 2, b = 4\] 또는 \[a = 6, b = 8\]의 모든 발생 위치를 찾습니다.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    },
    Occurrence.All
)
```

Result: 
```powerquery
{0, 1, 2}
```




## Category
Table.Membership
