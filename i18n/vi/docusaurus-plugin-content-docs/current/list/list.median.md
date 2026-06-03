---
title: List.Median
---

# List.Median


Trả về giá trị trung bình trong danh sách.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Remarks

Trả về mục có giá trị trung bình trong danh sách `list`. Hàm này sẽ trả về `null` nếu danh sách chứa các giá trị không phải `null`. Nếu có số lượng mục chẵn thì hàm sẽ chọn mục có giá trị nhỏ hơn giữa hai mục có giá trị trung bình trừ khi danh sách bao gồm toàn bộ ngày giờ, khoảng thời gian, số lượng hoặc giờ, trong trường hợp này hàm sẽ trả về giá trị trung bình của hai mục.


## Examples

### Example #1
Tìm giá trị trung bình trong danh sách `{5, 3, 1, 7, 9}`.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
