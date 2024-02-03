---
title: Table.FillDown
---

# Table.FillDown


## Description

이전 셀의 값을 해당 열의 아래쪽에 있는 Null 값 셀로 전파합니다.


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Details

지정된 <code>table</code>에서 이전 셀의 값이 지정된 <code>columns</code>의 아래쪽에 있는 Null 값 셀로 전파된 테이블을 반환합니다.


## Examples

### Example #1 
테이블에서 [Place] 열의 Null 값이 해당 열 위의 값으로 채워진 테이블을 반환합니다.
```powerquery
Table.FillDown(
    Table.FromRecords({
        [Place = 1, Name = "Bob"],
        [Place = null, Name = "John"],
        [Place = 2, Name = "Brad"],
        [Place = 3, Name = "Mark"],
        [Place = null, Name = "Tom"],
        [Place = null, Name = "Adam"]
    }),
    {"Place"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Place = 1, Name = "Bob"],
    [Place = 1, Name = "John"],
    [Place = 2, Name = "Brad"],
    [Place = 3, Name = "Mark"],
    [Place = 3, Name = "Tom"],
    [Place = 3, Name = "Adam"]
})
```




## Category
Table.Transformation
