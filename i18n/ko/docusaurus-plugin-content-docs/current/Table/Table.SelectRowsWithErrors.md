---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


## Description

적어도 하나의 셀에 오류가 있는 입력 테이블의 행만 포함된 테이블을 반환합니다. 열 목록이 지정된 경우 지정한 열의 셀에서만 오류를 검사합니다.


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

적어도 하나의 셀에 오류가 있는 입력 테이블의 행만 포함된 테이블을 반환합니다. 열 목록이 지정된 경우 지정한 열의 셀에서만 오류를 검사합니다.


## Examples

### Example #1 
행에 오류가 있는 고객의 이름을 선택합니다.
```powerquery
Table.SelectRowsWithErrors(
    Table.FromRecords({
        [CustomerID = ..., Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)[Name]
```

Result: 
```powerquery
{"Bob"}
```




## Category
Table.Row operations
