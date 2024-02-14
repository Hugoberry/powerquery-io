---
title: Table.Min
---

# Table.Min


Trả về hàng nhỏ nhất hoặc một giá trị mặc định sử dụng tiêu chí cho sẵn.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Trả về hàng nhỏ nhất trong <code>table</code> khi được cho sẵn <code>comparisonCriteria</code>. Nếu bảng trống thì giá trị <code>default</code> tùy chọn được trả về.


## Examples

### Example #1 
Tìm hàng có giá trị nhỏ nhất trong cột [a] trong bảng.
```powerquery
Table.Min(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 2, b = 4]
```


### Example #2 
Tìm hàng có giá trị nhỏ nhất trong cột [a] trong bảng. Trả về -1 nếu trống.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
