---
title: Record.ToTable
---

# Record.ToTable


## Description

각 행이 입력 레코드의 필드 이름 및 값이 되는 테이블을 반환합니다.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Details

<code>Name</code> 및 <code>Value</code> 열과 <code>record</code>의 각 필드에 대한 행을 하나씩 포함하는 테이블을 반환합니다.


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
