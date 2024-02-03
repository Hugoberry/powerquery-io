---
title: Table.DemoteHeaders
---

# Table.DemoteHeaders


## Description

열 머리글을 첫 번째 값 행으로 수준을 내립니다.


## Syntax

```powerquery
Table.DemoteHeaders(
    table as table
) as table
```


## Details

열 머리글(예: 열 이름)을 첫 번째 값 행으로 수준을 내립니다. 기본 열 이름은 "Column1", "Column2" 등입니다.


## Examples

### Example #1 
테이블에 있는 첫 번째 값 행의 수준을 내립니다.
```powerquery
Table.DemoteHeaders(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "CustomerID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Table.Column operations
