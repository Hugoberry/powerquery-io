---
title: List.Sort
---

# List.Sort


Lọc ra một danh sách dữ liệu theo tiêu chỉ được chỉ định.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Remarks

Sắp xếp danh sách dữ liệu `list` theo tiêu chí tùy chọn được chỉ định. Một tham số `comparisonCriteria` tùy chọn có thể được chỉ định làm tiêu chí so sánh. Tham số này có thể nhận các giá trị sau:

-   Để kiểm soát thứ tự, tiêu chí so sánh có thể là một giá trị Thứ tự đếm được. (`Order.Descending`, `Order.Ascending`).
-   Để tính toán một khóa dùng để sắp xếp, bạn có thể sử dụng một hàm gồm 1 đối số.
-   Để chọn cả khóa và thứ tự kiểm soát, tiêu chí so sánh có thể là một danh sách chứa khóa và thứ tự (`{each 1 / _, Order.Descending}`).
-   Để kiểm soát hoàn toàn phép so sánh, có thể dùng hàm 2 đối số (chẳng hạn như Value.Compare). Hàm này sẽ được truyền qua hai mục trong danh sách (hai mục bất kỳ, ở thứ tự bất kỳ). Hàm sẽ trả về một trong các giá trị sau:
    -   `-1`: Mục đầu tiên nhỏ hơn mục thứ hai.
    -   `0`: Các mục bằng nhau.
    -   `1`: Mục đầu tiên lớn hơn mục thứ hai.


## Examples

### Example #1
Sắp xếp danh sách \{2, 3, 1\}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Sắp xếp danh sách \{2, 3, 1\} theo thứ tự giảm dần.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3
Sắp xếp danh sách \{2, 3, 1\} theo thứ tự giảm dần bằng phương thức Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
