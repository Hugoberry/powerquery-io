---
title: Table.Combine
---

# Table.Combine


## Description

Trả về một bảng là kết quả hợp nhất một danh sách các bảng.


## Syntax

```powerquery
Table.Combine(
    tables as list,
    optional columns as any
) as table
```


## Details

Trả về một bảng là kết quả hợp nhất một danh sách các bảng, <code>tables</code>. Bảng kết quả sẽ có cấu trúc loại hàng được xác định bởi <code>columns</code> hoặc tập hợp các loại đầu vào nếu <code>columns</code> không được chỉ định.


## Examples

### Example #1 
Hợp nhất ba bảng với nhau.
```powerquery
Table.Combine({
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    Table.FromRecords({[CustomerID = 2, Name = "Jim", Phone = "987-6543"]}),
    Table.FromRecords({[CustomerID = 3, Name = "Paul", Phone = "543-7890"]})
})
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
Hợp nhất ba bảng có cấu trúc khác nhau.
```powerquery
Table.Combine({
    Table.FromRecords({[Name = "Bob", Phone = "123-4567"]}),
    Table.FromRecords({[Fax = "987-6543", Phone = "838-7171"]}),
    Table.FromRecords({[Cell = "543-7890"]})
})
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob", Phone = "123-4567", Fax = null, Cell = null],
    [Name = null, Phone = "838-7171", Fax = "987-6543", Cell = null],
    [Name = null, Phone = null, Fax = null, Cell = "543-7890"]
})
```


### Example #3 
Hợp nhất hai bảng và tham chiếu đến loại đã cho.
```powerquery
Table.Combine(
    {
        Table.FromRecords({[Name = "Bob", Phone = "123-4567"]}),
        Table.FromRecords({[Fax = "987-6543", Phone = "838-7171"]}),
        Table.FromRecords({[Cell = "543-7890"]})
    },
    {"CustomerID", "Name"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = null, Name = "Bob"],
    [CustomerID = null, Name = null],
    [CustomerID = null, Name = null]
})
```




## Category
Table.Row operations
