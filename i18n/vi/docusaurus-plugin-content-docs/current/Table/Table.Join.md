---
title: Table.Join
---

# Table.Join


## Description

Nối các hàng từ hai bảng khớp nhau dựa trên các khóa cho sẵn.


## Syntax

```powerquery
Table.Join(
    table1 as table,
    key1 as any,
    table2 as table,
    key2 as any,
    optional joinKind as JoinKind.Type,
    optional joinAlgorithm as JoinAlgorithm.Type,
    optional keyEqualityComparers as list
) as table
```


## Details

Nối các hàng <code>table1</code> với các hàng <code>table2</code> dựa trên các giá trị bằng nhau trong các cột khóa được chọn bởi <code>key1</code> (cho <code>table1</code>) và <code>key2</code> (cho <code>table2</code>).<br />Theo mặc định, loại nối trong sẽ được thực hiện, tuy nhiên, có thể bao gồm <code>joinKind</code> tùy chọn để chỉ định loại nối. Các tùy chọn gồm có:    <ul><li><code>JoinKind.Inner</code></li>
<li><code>JoinKind.LeftOuter</code></li>
<li><code>JoinKind.RightOuter</code></li>
<li><code>JoinKind.FullOuter</code></li>
<li><code>JoinKind.LeftAnti</code></li>
<li><code>JoinKind.RightAnti</code></li>
</ul><br />Có thể bao gồm tập hợp <code>keyEqualityComparers</code> tùy chọn để chỉ định cách so sánh các cột khóa. Tham số này hiện chỉ dành để sử dụng nội bộ.<br />


## Examples

### Example #1 
Kết hợp hai bảng bằng một cột khóa duy nhất.
```powerquery
Table.Join(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "CustomerID",
    Table.FromRecords({
        [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0],
        [OrderID = 2, CustomerID = 1, Item = "1 lb. worms", Price = 5.0],
        [OrderID = 3, CustomerID = 2, Item = "Fishing net", Price = 25.0],
        [OrderID = 4, CustomerID = 3, Item = "Fish tazer", Price = 200.0],
        [OrderID = 5, CustomerID = 3, Item = "Bandaids", Price = 2.0],
        [OrderID = 6, CustomerID = 1, Item = "Tackle box", Price = 20.0],
        [OrderID = 7, CustomerID = 5, Item = "Bait", Price = 3.25]
    }),
    "CustomerID"
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567", OrderID = 1, Item = "Fishing rod", Price = 100],
    [CustomerID = 1, Name = "Bob", Phone = "123-4567", OrderID = 2, Item = "1 lb. worms", Price = 5],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543", OrderID = 3, Item = "Fishing net", Price = 25],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890", OrderID = 4, Item = "Fish tazer", Price = 200],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890", OrderID = 5, Item = "Bandaids", Price = 2],
    [CustomerID = 1, Name = "Bob", Phone = "123-4567", OrderID = 6, Item = "Tackle box", Price = 20]
})
```


### Example #2 
Nối hai bảng có tên cột xung đột, sử dụng nhiều cột khóa.
```powerquery
let
    customers = Table.FromRecords({
        [TenantID = 1, CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [TenantID = 1, CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    }),
    orders = Table.FromRecords({
        [TenantID = 1, OrderID = 1, CustomerID = 1, Name = "Fishing rod", Price = 100.0],
        [TenantID = 1, OrderID = 2, CustomerID = 1, Name = "1 lb. worms", Price = 5.0],
        [TenantID = 1, OrderID = 3, CustomerID = 2, Name = "Fishing net", Price = 25.0]
    })
in
    Table.Join(
        customers,
        {"TenantID", "CustomerID"},
        Table.PrefixColumns(orders, "Order"),
        {"Order.TenantID", "Order.CustomerID"}
    )
```

Result: 
```powerquery
Table.FromRecords({
    [TenantID = 1, CustomerID = 1, Name = "Bob", Phone = "123-4567", Order.TenantID = 1, Order.OrderID = 1, Order.CustomerID = 1, Order.Name = "Fishing rod", Order.Price = 100],
    [TenantID = 1, CustomerID = 1, Name = "Bob", Phone = "123-4567", Order.TenantID = 1, Order.OrderID = 2, Order.CustomerID = 1, Order.Name = "1 lb. worms", Order.Price = 5],
    [TenantID = 1, CustomerID = 2, Name = "Jim", Phone = "987-6543", Order.TenantID = 1, Order.OrderID = 3, Order.CustomerID = 2, Order.Name = "Fishing net", Order.Price = 25]
})
```




## Category
Table.Transformation
