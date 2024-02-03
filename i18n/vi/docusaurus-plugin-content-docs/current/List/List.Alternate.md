---
title: List.Alternate
---

# List.Alternate


## Description

Trả về một danh sách bao gồm tất cả các phần tử phần bù được đánh số lẻ trong danh sách.


## Syntax

```powerquery
List.Alternate(
    list as list,
    count as number,
    optional repeatInterval as number,
    optional offset as number
) as list
```


## Details

Trả về một danh sách bao gồm tất cả các phần tử phần bù được đánh số lẻ trong danh sách. Chuyển đổi giữa lấy và bỏ qua giá trị trong danh sách <code>list</code> tùy theo tham số.    <ul>    <li><code>count</code>: Chỉ định số lượng giá trị được bỏ qua mỗi lần.</li>    <li><code>repeatInterval</code>: Một quãng cách lặp tùy chọn để cho biết số lượng giá trị được thêm vào giữa các giá trị bị bỏ qua.</li>    <li><code>offset</code>: Một tham số phần bù tùy chọn để bắt đầu bỏ qua các giá trị tại phần bù ban đầu.</li>    </ul>


## Examples

### Example #1 
Tạo danh sách từ \{1..10} bỏ qua số đầu tiên.
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2 
Tạo danh sách từ \{1..10} bỏ qua mọi số khác.
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3 
Tạo danh sách từ \{1..10} bắt đầu tại 1 và bỏ qua mọi số khác.
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4 
Tạo một danh sách từ \{1..10} bắt đầu bằng 1, bỏ qua một giá trị, giữ hai giá trị, v.v.
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection
