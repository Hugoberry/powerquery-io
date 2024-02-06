---
title: Table.Max
---

# Table.Max


Trả về hàng lớn nhất hoặc một giá trị mặc định sử dụng tiêu chí cho sẵn.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Trả về hàng lớn nhất trong <code>table</code> khi được cho sẵn <code>comparisonCriteria</code>. Nếu bảng trống thì giá trị <code>default</code> tùy chọn được trả về. 


## Examples

### Example #1 
Tìm hàng có giá trị lớn nhất trong cột [a] trong bảng &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;.
```powerquery
Table.Max(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 6, b = 8]
```


### Example #2 
Tìm hàng có giá trị lớn nhất trong cột [a] trong bảng &lt;code&gt;(\{})&lt;/code&gt;. Trả về -1 nếu trống.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
