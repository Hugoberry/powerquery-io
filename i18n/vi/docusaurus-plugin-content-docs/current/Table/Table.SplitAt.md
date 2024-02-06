---
title: Table.SplitAt
---

# Table.SplitAt


Trả về danh sách chứa các hàng đếm đầu tiên được chỉ định và các hàng còn lại.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Remarks

Trả về danh sách chứa hai bảng: một bảng có N hàng <code>table</code> đầu tiên (như được <code>count</code> chỉ định) và một bảng chứa các hàng <code>table</code> còn lại.Nếu các bảng trong danh sách trả về được liệt kê chính xác một lần và theo thứ tự, hàm sẽ chỉ liệt kê <code>table</code> một lần.


## Examples

### Example #1 
Trả về 2 hàng đầu tiên của bảng và các hàng còn lại trong bảng.
```powerquery
Table.SplitAt(#table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}), 2)
```

Result: 
```powerquery
{
    #table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}}),
    #table({"a", "b", "c"}, {{7, 8, 9}})
}
```




## Category
Table.Row operations
