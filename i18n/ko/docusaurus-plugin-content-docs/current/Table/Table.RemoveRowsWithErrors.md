---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


## Description

적어도 하나의 셀에 오류가 있어 입력 테이블에서 제거된 행이 포함된 테이블을 반환합니다. 열 목록이 지정된 경우 지정한 열의 셀에서만 오류를 검사합니다.


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

적어도 하나의 셀에 오류가 있어 입력 테이블에서 제거된 행이 포함된 테이블을 반환합니다. 열 목록이 지정된 경우 지정한 열의 셀에서만 오류를 검사합니다.


## Examples

### Example #1 
첫 번째 행에서 오류 값을 제거합니다.
```powerquery
Table.RemoveRowsWithErrors(
    Table.FromRecords({
        [Column1 = ...],
        [Column1 = 2],
        [Column1 = 3]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 2],
    [Column1 = 3]
})
```




## Category
Table.Row operations
