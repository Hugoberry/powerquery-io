---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


## Description

Thực hiện nối các bảng trên các cột được cung cấp và cho ra kết quả nối trong một cột mới.


## Syntax

```powerquery
Table.AddJoinColumn(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text
) as table
```


## Details

Nối các hàng của <code>table1</code> với các hàng của <code>table2</code> dựa trên đẳng thức của các giá trị của các cột khóa được chọn bởi <code>key1</code> (cho <code>table1</code>) và <code>key2</code> (cho <code>table2</code>). Kết quả được nhập vào cột có tên <code>newColumnName</code>.Hàm này hoạt động tương tự như Table.Join với JoinKind là LeftOuter ngoại trừ kết quả nối được trình bày theo kiểu lồng nhau chứ không phải kiểu làm phẳng.


## Examples

### Example #1 
Thêm một cột nối vào (\{[saleID = 1, item = &#34;Shirt&#34;], [saleID = 2, item = &#34;Hat&#34;]}) có tên &#34;giá/mặt hàng&#34; từ bảng (\{[saleID = 1, price = 20], [saleID = 2, price = 10]}) được nối trên [saleID].
```powerquery
Table.AddJoinColumn(
    Table.FromRecords({
        [saleID = 1, item = "Shirt"],
        [saleID = 2, item = "Hat"]
    }),
    "saleID",
    () => Table.FromRecords({
        [saleID = 1, price = 20, stock = 1234],
        [saleID = 2, price = 10, stock = 5643]
    }),
    "saleID",
    "price"
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        saleID = 1,
        item = "Shirt",
        price = Table.FromRecords({[saleID = 1, price = 20, stock = 1234]})
    ],
    [
        saleID = 2,
        item = "Hat",
        price = Table.FromRecords({[saleID = 2, price = 10, stock = 5643]})
    ]
})
```




## Category
Table.Transformation
