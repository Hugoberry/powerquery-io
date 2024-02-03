---
title: Table.Split
---

# Table.Split


## Description

지정한 페이지 크기를 사용하여 지정한 테이블을 테이블의 목록으로 분할합니다.


## Syntax

```powerquery
Table.Split(
    table as table,
    pageSize as number
) as list
```


## Details

목록의 첫 번째 요소가 원본 테이블의 처음 <code>pageSize</code>개 행이 포함된 테이블, 목록의 그 다음 요소가 원본 테이블의    다음 <code>pageSize</code>개 요소가 행이 포함된 테이블과 같은 테이블의 목록으로 <code>table</code>을(를) 분할합니다.


## Examples

### Example #1 
5개의 레코드로 구성된 테이블을 각각 레코드가 2개씩인 테이블로 분할합니다.
```powerquery
let
    Customers = Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"],
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
in
    Table.Split(Customers, 2)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    }),
    Table.FromRecords({
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"]
    }),
    Table.FromRecords({
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
}
```




## Category
Table.Transformation
