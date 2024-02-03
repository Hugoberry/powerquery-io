---
title: Table.Column
---

# Table.Column


## Description

테이블의 지정된 데이터 열을 목록으로 반환합니다.


## Syntax

```powerquery
Table.Column(
    table as table,
    column as text
) as list
```


## Details

<code>table</code> 테이블에서 <code>column</code>(으)로 지정된 데이터 열을 목록으로 반환합니다.


## Examples

### Example #1 
테이블에서 [Name] 열의 값을 반환합니다.
```powerquery
Table.Column(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
{"Bob", "Jim", "Paul", "Ringo"}
```




## Category
Table.Column operations
