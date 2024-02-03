---
title: Table.TransformRows
---

# Table.TransformRows


## Description

지정한 변환 함수를 사용하여 테이블의 행을 변환합니다.


## Syntax

```powerquery
Table.TransformRows(
    table as table,
    transform as function
) as list
```


## Details

<code>transform</code>의 각 행에 <code>table</code> 작업을 적용하여 <code>목록</code> 만듭니다.


## Examples

### Example #1 
테이블의 행을 숫자 목록으로 변환합니다.
```powerquery
Table.TransformRows(
    Table.FromRecords({
        [a = 1],
        [a = 2],
        [a = 3],
        [a = 4],
        [a = 5]
    }),
    each [a]
)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```


### Example #2 
숫자 테이블의 행을 텍스트 레코드로 변환합니다.
```powerquery
Table.TransformRows(
    Table.FromRecords({
        [a = 1],
        [a = 2],
        [a = 3],
        [a = 4],
        [a = 5]
    }),
    (row) as record => [B = Number.ToText(row[a])]
)
```

Result: 
```powerquery
{
    [B = "1"],
    [B = "2"],
    [B = "3"],
    [B = "4"],
    [B = "5"]
}
```




## Category
Table.Transformation
