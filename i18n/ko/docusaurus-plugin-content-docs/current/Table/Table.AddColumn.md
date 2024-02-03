---
title: Table.AddColumn
---

# Table.AddColumn


## Description

지정된 이름의 열을 추가합니다. 값은 각 행이 입력으로 사용되는 지정된 선택 함수를 사용하여 계산됩니다.


## Syntax

```powerquery
Table.AddColumn(
    table as table,
    newColumnName as text,
    columnGenerator as function,
    optional columnType as type
) as table
```


## Details

테이블 <code>table</code>에 이름이 <code>newColumnName</code>인 열을 추가합니다. 열의 값은 각 행이 입력으로 사용되는 지정된 선택 함수 <code>columnGenerator</code>을(를) 사용하여 계산됩니다.


## Examples

### Example #1 
테이블에 각 값이 [Price] 열과 [Shipping] 열의 합계가 되는 &#34;TotalPrice&#34;라는 숫자 열을 추가합니다.
```powerquery
Table.AddColumn(
    Table.FromRecords({
        [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0, Shipping = 10.00],
        [OrderID = 2, CustomerID = 1, Item = "1 lb. worms", Price = 5.0, Shipping = 15.00],
        [OrderID = 3, CustomerID = 2, Item = "Fishing net", Price = 25.0, Shipping = 10.00]
    }),
    "TotalPrice",
    each [Price] + [Shipping],
    type number
)
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100, Shipping = 10, TotalPrice = 110],
    [OrderID = 2, CustomerID = 1, Item = "1 lb. worms", Price = 5, Shipping = 15, TotalPrice = 20],
    [OrderID = 3, CustomerID = 2, Item = "Fishing net", Price = 25, Shipping = 10, TotalPrice = 35]
})
```




## Category
Table.Transformation
