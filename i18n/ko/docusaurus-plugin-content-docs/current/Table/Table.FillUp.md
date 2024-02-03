---
title: Table.FillUp
---

# Table.FillUp


## Description

셀의 값을 해당 열의 위쪽에 있는 Null 값 셀로 전파합니다.


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Details

지정된 <code>table</code>에서 다음 셀의 값이 지정된 <code>columns</code>의 위쪽에 있는 Null 값 셀로 전파된 테이블을 반환합니다.


## Examples

### Example #1 
테이블에서 [Column2] 열의 Null 값이 해당 열 아래의 값으로 채워진 테이블을 반환합니다.
```powerquery
Table.FillUp(
    Table.FromRecords({
        [Column1 = 1, Column2 = 2],
        [Column1 = 3, Column2 = null],
        [Column1 = 5, Column2 = 3]
    }),
    {"Column2"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2],
    [Column1 = 3, Column2 = 3],
    [Column1 = 5, Column2 = 3]
})
```




## Category
Table.Transformation
