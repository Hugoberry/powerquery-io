---
title: List.Modes
---

# List.Modes


Trả về một danh sách chứa các giá trị xuất hiện thường xuyên nhất trong danh sách.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Trả về các mục xuất hiện thường xuyên nhất trong `list`. Nếu danh sách trống thì sẽ có lỗi xuất hiện. Nếu nhiều mục có cùng tần suất tối đa xuất hiện, hệ thống sẽ trả về tất cả các mục đó. Có thể chỉ định một giá trị tiêu chí so sánh tùy chọn, `equationCriteria`, để kiểm soát việc kiểm tra đẳng thức.


## Examples

### Example #1
Tìm các mục xuất hiện thường xuyên nhất trong danh sách `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
