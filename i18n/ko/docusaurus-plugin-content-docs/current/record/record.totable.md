---
title: Record.ToTable
---

# Record.ToTable


각 행이 입력 레코드의 필드 이름 및 값이 되는 테이블을 반환합니다.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Remarks

`Name` 및 `Value` 열과 `record`의 각 필드에 대한 행을 하나씩 포함하는 테이블을 반환합니다.


## Examples

### Example #1
레코드에서 테이블을 반환합니다.
```powerquery
Record.ToTable([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "OrderID", Value = 1],
    [Name = "CustomerID", Value = 1],
    [Name = "Item", Value = "Fishing rod"],
    [Name = "Price", Value = 100]
})
```




## Category
Record.Serialization
