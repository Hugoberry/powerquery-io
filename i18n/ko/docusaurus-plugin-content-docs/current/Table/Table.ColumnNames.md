---
title: Table.ColumnNames
---

# Table.ColumnNames


## Description

열 이름을 목록으로 반환합니다.


## Syntax

```powerquery
Table.ColumnNames(
    table as table
) as list
```


## Details

<code>table</code> 테이블의 열 이름을 텍스트 목록으로 반환합니다.


## Examples

### Example #1 
테이블의 열 이름을 확인합니다.
```powerquery
Table.ColumnNames(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
{"CustomerID", "Name", "Phone"}
```




## Category
Table.Column operations