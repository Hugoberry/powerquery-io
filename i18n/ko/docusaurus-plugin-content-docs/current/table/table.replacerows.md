---
title: Table.ReplaceRows
---

# Table.ReplaceRows


지정한 범위의 행을 제공된 행으로 바꿉니다.


## Syntax

```powerquery
Table.ReplaceRows(
    table as table,
    offset as number,
    count as number,
    rows as list
) as table
```


## Remarks

`offset` 뒤부터 시작하여 `table` 입력에서 지정한 개수의 행 `count`을(를) 지정한 `rows`(으)로 바꿉니다. `rows` 매개 변수는 레코드 목록입니다.

-   `table`: 바꾸기를 수행할 테이블입니다.
-   `offset`: 바꾸기 전에 건너뛸 행 수입니다.
-   `count`: 바꿀 행 수입니다.
-   `rows`: `table`에서 `offset`(으)로 지정된 위치에 삽입할 행 레코드 목록입니다.


## Examples

### Example #1
테이블에서 위치 1부터 시작하여 3개의 행을 바꿉니다.
```powerquery
Table.ReplaceRows(
    Table.FromRecords({
        [Column1 = 1],
        [Column1 = 2],
        [Column1 = 3],
        [Column1 = 4],
        [Column1 = 5]
    }),
    1,
    3,
    {[Column1 = 6], [Column1 = 7]}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1],
    [Column1 = 6],
    [Column1 = 7],
    [Column1 = 5]
})
```




## Category
Table.Row operations
