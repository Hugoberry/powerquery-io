---
title: Table.ContainsAny
---

# Table.ContainsAny


Cho biết có bản ghi được chỉ định nào xuất hiện ở dạng hàng trong bảng hay không.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Cho biết có bản ghi được chỉ định nào trong danh sách bản ghi `rows` xuất hiện ở dạng hàng trong `table` hay không. Có thể chỉ định tham số tùy chọn `equationCriteria` để kiểm soát phép so sánh giữa các hàng của bảng.


## Examples

### Example #1
Xác định bảng `({[a = 1, b = 2], [a = 3, b = 4]})` chứa hay không chứa các hàng `[a = 1, b = 2]` hoặc `[a = 3, b = 5]`.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 2],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
true
```


### Example #2
Xác định bảng `({[a = 1, b = 2], [a = 3, b = 4]})` chứa hay không chứa các hàng `[a = 1, b = 3]` hoặc `[a = 3, b = 5]`.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
false
```


### Example #3
Xác định bảng `(Table.FromRecords({[a = 1, b = 2], [a = 3, b = 4]}))` chứa hay không chứa các hàng `[a = 1, b = 3]` hoặc `[a = 3, b = 5]` khi chỉ so sánh cột \[a\].
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    },
    "a"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership
