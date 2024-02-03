---
title: Table.AlternateRows
---

# Table.AlternateRows


## Description

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


## Details

Giữ phần bù ban đầu rồi luân phiên lấy và bỏ qua các hàng theo sau.    <ul>       <li><code>table</code>: Bảng đầu vào.</li>       <li><code>offset</code>: Số lượng hàng sẽ giữ trước khi bắt đầu các lần lặp.</li>       <li><code>skip</code>: Số lượng hàng sẽ loại bỏ trong mỗi lần lặp.</li>       <li><code>take</code>: Số lượng hàng sẽ giữ trong mỗi lần lặp.</li>    </ul>    


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
