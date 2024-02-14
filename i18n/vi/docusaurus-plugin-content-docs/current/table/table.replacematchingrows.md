---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


Thay thế tất cả các hàng được chỉ định bằng (các) hàng được cung cấp.


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Remarks

Thay thế tất cả các hàng được chỉ định trong <code>table</code> bằng (các) hàng được cung cấp. Các hàng sẽ thay thế và các thay thế được chỉ định trong <code>replacements</code>, sử dụng định dạng \{old, new}.    Có thể chỉ định tham số <code>equationCriteria</code> tùy chọn để kiểm soát phép so sánh giữa các hàng của bảng.


## Examples

### Example #1 
Thay thế các hàng [a = 1, b = 2] và [a = 2, b = 3] bằng [a = -1, b = -2],[a = -2, b = -3] trong bảng.
```powerquery
Table.ReplaceMatchingRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 2, b = 3],
        [a = 3, b = 4],
        [a = 1, b = 2]
    }),
    {
        {[a = 1, b = 2], [a = -1, b = -2]},
        {[a = 2, b = 3], [a = -2, b = -3]}
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = -1, b = -2],
    [a = -2, b = -3],
    [a = 3, b = 4],
    [a = -1, b = -2]
})
```




## Category
Table.Membership
