---
title: List.Mode
---

# List.Mode


Trả về giá trị xuất hiện thường xuyên nhất trong danh sách.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

Trả về mục xuất hiện thường xuyên nhất trong `list`. Nếu danh sách trống thì sẽ có lỗi xuất hiện. Nếu nhiều mục có cùng tần suất xuất hiện tối đa, hệ thống sẽ chọn mục cuối cùng. Có thể chỉ định một giá trị tiêu chí so sánh tùy chọn, `equationCriteria`, để kiểm soát việc kiểm tra đẳng thức.


## Examples

### Example #1
Tìm mục xuất hiện thường xuyên nhất trong danh sách `{"A", 1, 2, 3, 3, 4, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2
Tìm mục xuất hiện thường xuyên nhất trong danh sách `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
