---
title: Table.NestedJoin
---

# Table.NestedJoin


Thực hiện nối các bảng trên các cột được cung cấp và cho ra kết quả nối trong một cột mới.


## Syntax

```powerquery
Table.NestedJoin(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional keyEqualityComparers as list
) as table
```


## Remarks

Nối các hàng `table1` với các hàng `table2` dựa trên các giá trị bằng nhau trong các cột khóa được chọn bởi `key1` (cho `table1`) và `key2` (cho `table2`). Các kết quả được nhập vào cột có tên là `newColumnName`.

`joinKind` tùy chọn chỉ định loại nối cần thực hiện. Theo mặc định, loại nối ngoài bên trái sẽ được thực hiện nếu bạn không chỉ định `joinKind`.

Có thể bao gồm tập hợp `keyEqualityComparers` tùy chọn để chỉ định cách so sánh các cột khóa. Tính năng này hiện chỉ dành để sử dụng nội bộ.


## Examples

### Example #1
Kết hợp hai bảng bằng một cột khóa duy nhất.
```powerquery
Table.NestedJoin(
    Table.FromRecords({
        [CustomerToCall = 1],
        [CustomerToCall = 3]
    }),
    {"CustomerToCall"},
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"CustomerID"},
    "CustomerDetails"
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerToCall = 1, CustomerDetails = Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})],
    [CustomerToCall = 3, CustomerDetails = Table.FromRecords({[CustomerID = 3, Name = "Paul", Phone = "543-7890"]})]
})
```




## Category
Table.Transformation
