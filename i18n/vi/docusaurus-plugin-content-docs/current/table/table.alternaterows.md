---
title: Table.AlternateRows
---

# Table.AlternateRows


Giữ phần bù ban đầu rồi luân phiên lấy và bỏ qua các hàng theo sau.


## Syntax

```powerquery
Table.AlternateRows(
    table as table,
    offset as number,
    skip as number,
    take as number
) as table
```


## Remarks

Giữ phần bù ban đầu rồi luân phiên lấy và bỏ qua các hàng theo sau.

-   `table`: Bảng đầu vào.
-   `offset`: Số lượng hàng sẽ giữ trước khi bắt đầu các lần lặp.
-   `skip`: Số lượng hàng sẽ loại bỏ trong mỗi lần lặp.
-   `take`: Số lượng hàng sẽ giữ trong mỗi lần lặp.


## Examples

### Example #1
Trả về một bảng từ bảng mà bắt đầu tại hàng đầu tiên, bảng đó bỏ qua 1 giá trị rồi giữ 1 giá trị.
```powerquery
Table.AlternateRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    1,
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```




## Category
Table.Row operations
