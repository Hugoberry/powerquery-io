---
title: List.Max
---

# List.Max


Trả về giá trị cực đại hoặc giá trị mặc định cho một danh sách trống.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

Trả về mục có giá trị cực đại trong danh sách <code>list</code> hoặc giá trị mặc định tùy chọn <code>default</code> nếu danh sách trống.    Có thể chỉ định một giá trị comparisonCriteria tùy chọn là <code>comparisonCriteria</code> để xác định cách so sánh các mục trong danh sách. Nếu tham số này là null thì trình so sánh mặc định được sử dụng.


## Examples

### Example #1 
Tìm giá trị cực đại trong danh sách \{1, 4, 7, 3, -2, 5}.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2 
Tìm giá trị cực đại trong danh sách \{} hoặc trả về -1 nếu danh sách trống. 
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
