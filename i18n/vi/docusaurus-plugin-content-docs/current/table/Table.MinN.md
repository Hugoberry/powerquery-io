---
title: Table.MinN
---

# Table.MinN


Trả về (các) hàng nhỏ nhất sử dụng tiêu chí cho sẵn.


## Syntax

```powerquery
Table.MinN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Remarks

Trả về (các) hàng nhỏ nhất trong <code>table</code>, khi được cho sẵn <code>comparisonCriteria</code>. Sau khi sắp xếp các hàng, phải chỉ định tham số <code>countOrCondition</code> để lọc thêm kết quả. Lưu ý: thuật toán sắp xếp không thể đảm bảo kết quả sắp xếp cố định. Tham số <code>countOrCondition</code> có thể có nhiều dạng:    <ul>        <li> Nếu một số được chỉ định, một danh sách tối đa <code>countOrCondition</code> mục theo thứ tự tăng dần được trả về. </li>        <li> Nếu một điều kiện được chỉ định, một danh sách các mục đáp ứng điều kiện được trả về. Khi một mục không đáp ứng điều kiện, không có mục nào khác được xem xét. </li> </ul>


## Examples

### Example #1 
Tìm hàng có giá trị nhỏ nhất trong cột [a] với điều kiện [a] &lt; 3 trong bảng. Hàng được phân loại trước khi áp dụng bộ lọc.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 4]
    }),
    "a",
    each [a] < 3
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 0, b = 0],
    [a = 2, b = 4]
})
```


### Example #2 
Tìm hàng có giá trị nhỏ nhất trong cột [a] với điều kiện [b] &lt; 0 trong bảng. Hàng được phân loại trước khi áp dụng bộ lọc.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] < 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
