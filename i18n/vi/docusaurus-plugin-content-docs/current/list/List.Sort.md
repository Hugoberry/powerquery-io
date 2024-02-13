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

Sắp xếp danh sách dữ liệu, <code>list</code>, theo tiêu chí tùy chọn được chỉ định.    Một tham số tùy chọn, <code>comparisonCriteria</code>, có thể được chỉ định làm tiêu chí so sánh. Tham số này có thể nhận các giá trị sau:    <ul>    <li> Để kiểm soát thứ tự, tiêu chí so sánh có thể là một giá trị Thứ tự đếm được. (<code>Order.Descending</code>, <code>Order.Ascending</code>). </li>    <li> Để tính toán một khóa dùng để sắp xếp, bạn có thể sử dụng một hàm gồm 1 đối số. </li>    <li> Để chọn cả khóa và thứ tự kiểm soát, tiêu chí so sánh có thể là một danh sách chứa khóa và thứ tự (<code>\{each 1 / _, Order.Descending}</code>). </li>    <li> Để hoàn toàn kiểm soát phép so sánh, bạn có thể sử dụng một hàm gồm 2 đối số. Hàm này sẽ được truyền qua hai mục trong danh sách (hai mục bất kỳ, ở thứ tự bất kỳ). Hàm sẽ trả về một trong các giá trị sau:        <ul>            <li> <code>-1</code>: Mục đầu tiên nhỏ hơn mục thứ hai.</li>            <li> <code>0</code>: Các mục bằng nhau.</li>            <li> <code>1</code>: Mục đầu tiên lớn hơn mục thứ hai.</li>        </ul>        Value.Compare là phương pháp có thể được sử dụng để đại diện cho logic này. </li>    </ul>


## Examples

### Example #1 
Sắp xếp danh sách \{2, 3, 1}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
Sắp xếp danh sách \{2, 3, 1} theo thứ tự giảm dần.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3 
Sắp xếp danh sách \{2, 3, 1} theo thứ tự giảm dần bằng phương thức Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
