---
title: Table.Last
---

# Table.Last


Trả về hàng cuối cùng hoặc một giá trị mặc định được chỉ định.


## Syntax

```powerquery
Table.Last(
    table as table,
    optional default as any
) as any
```


## Remarks

Trả về hàng cuối cùng của <code>table</code> hoặc giá trị mặc định tùy chọn <code>default</code> nếu bảng trống.


## Examples

### Example #1 
Tìm hàng cuối cùng của bảng.
```powerquery
Table.Last(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
[CustomerID = 3, Name = "Paul", Phone = "543-7890"]
```


### Example #2 
Tìm hàng cuối cùng của bảng &lt;code&gt;(\{})&lt;/code&gt; hoặc trả về [a = 0, b = 0] nếu trống.
```powerquery
Table.Last(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
