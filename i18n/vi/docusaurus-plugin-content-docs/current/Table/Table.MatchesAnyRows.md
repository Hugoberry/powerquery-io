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

Cho biết có hàng nào trong <code>table</code> khớp với <code>condition</code> cho sẵn hay không. Trả về <code>true</code> nếu có hàng khớp, <code>false</code> nếu ngược lại.


## Examples

### Example #1 
Xác định có giá trị hàng nào trong cột [a] của bảng &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt; là chẵn hay không.
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
Xác định nếu có giá trị hàng nào trong bảng &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; là [a = 1, b = 2].
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
