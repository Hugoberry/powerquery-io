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

Nối các hàng <code>table1</code> với các hàng <code>table2</code> dựa trên các giá trị bằng nhau trong các cột khóa được chọn bởi <code>key1</code> (cho <code>table1</code>) và <code>key2</code> (cho <code>table2</code>). Các kết quả được nhập vào cột có tên là <code>newColumnName</code>.<br /><code>joinKind</code> tùy chọn chỉ định loại nối cần thực hiện. Theo mặc định, loại nối ngoài bên trái sẽ được thực hiện nếu bạn không chỉ định <code>joinKind</code>.<br />Có thể bao gồm tập hợp <code>keyEqualityComparers</code> tùy chọn để chỉ định cách so sánh các cột khóa. Tính năng này hiện chỉ dành để sử dụng nội bộ.<br />  


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
