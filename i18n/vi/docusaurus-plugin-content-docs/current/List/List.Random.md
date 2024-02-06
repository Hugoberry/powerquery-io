---
title: List.Random
---

# List.Random


Trả về danh sách số ngẫu nhiên.


## Syntax

```powerquery
List.Random(
    count as number,
    optional seed as number
) as list
```


## Remarks

Trả về một danh sách số ngẫu nhiên nằm trong khoảng từ 0 đến 1 khi được cho sẵn số lượng các giá trị sẽ tạo và một giá trị dữ liệu nền tùy chọn.<ul>   <li><code>count</code>: Số lượng giá trị ngẫu nhiên để tạo.</li>   <li><code>seed</code>:  <i>[Tùy chọn]</i> Một giá trị số dùng để tạo trình tạo số ngẫu nhiên.  Nếu bị bỏ qua thì một danh sách duy nhất bao gồm các số ngẫu nhiên sẽ được tạo mỗi lần bạn gọi hàm.  Nếu bạn chỉ định giá trị dữ liệu nền bằng một số thì mọi lệnh gọi tới hàm sẽ tạo ra danh sách số ngẫu nhiên tương tự.</li></ul>


## Examples

### Example #1 
Tạo một danh sách chứa 3 số ngẫu nhiên.
```powerquery
List.Random(3)
```

Result: 
```powerquery
{0.992332, 0.132334, 0.023592}
```


### Example #2 
Tạo một danh sách chứa 3 số ngẫu nhiên, chỉ định giá trị dữ liệu nền.
```powerquery
List.Random(3, 2)
```

Result: 
```powerquery
{0.883002, 0.245344, 0.723212}
```




## Category
List.Generators
