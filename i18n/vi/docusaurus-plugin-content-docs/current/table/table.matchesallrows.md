---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


Cho biết tất cả các hàng trong bảng có đáp ứng điều kiện cho sẵn hay không.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Cho biết tất cả các hàng trong `table` có khớp với `condition` cho sẵn hay không. Trả về `true` nếu tất cả các hàng đều khớp, `false` nếu ngược lại.


## Examples

### Example #1
Xác định tất cả các giá trị hàng trong cột \[a\] trong bảng có chẵn hay không.
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
true
```


### Example #2
Tìm xem tất cả giá trị hàng trong bảng `({[a = 1, b = 2], [a = 3, b = 4]})` có phải là \[a = 1, b = 2\] hay không.
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
false
```




## Category
Table.Row operations
