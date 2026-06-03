---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


Cho biết có hàng nào trong bảng đáp ứng điều kiện cho sẵn hay không.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Cho biết có hàng nào trong `table` khớp với `condition` cho sẵn hay không. Trả về `true` nếu có hàng khớp, `false` nếu ngược lại.


## Examples

### Example #1
Xác định có giá trị hàng nào trong cột \[a\] của bảng `({[a = 2, b = 4], [a = 6, b = 8]})` là chẵn hay không.
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 3, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
false
```


### Example #2
Xác định nếu có giá trị hàng nào trong bảng `({[a = 1, b = 2], [a = 3, b = 4]})` là \[a = 1, b = 2\].
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
true
```




## Category
Table.Row operations
