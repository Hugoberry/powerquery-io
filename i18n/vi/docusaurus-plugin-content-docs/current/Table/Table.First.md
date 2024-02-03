---
title: Table.First
---

# Table.First


## Description

Trả về hàng đầu tiên hoặc một giá trị mặc định được chỉ định.


## Syntax

```powerquery
Table.First(
    table as table,
    optional default as any
) as any
```


## Details

Trả về hàng đầu tiên của <code>table</code> hoặc giá trị mặc định tùy chọn <code>default</code> nếu bảng trống.


## Examples

### Example #1 
Tìm hàng đầu tiên của bảng.
```powerquery
Table.First(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
Tìm hàng đầu tiên của bảng &lt;code&gt;(\{})&lt;/code&gt; hoặc trả về [a = 0, b = 0] nếu trống.
```powerquery
Table.First(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
