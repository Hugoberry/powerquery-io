---
title: List.Generate
---

# List.Generate


## Description

Tạo danh sách giá trị.


## Syntax

```powerquery
List.Generate(
    initial as function,
    condition as function,
    next as function,
    optional selector as function
) as list
```


## Details

Tạo một danh sách giá trị bằng các hàm được cung cấp. Hàm <code>initial</code> tạo giá trị ứng viên ban đầu mà sau đó được kiểm tra dựa trên <code>condition</code>.    Nếu giá trị ứng viên được chấp nhận thì giá trị đó sẽ trở về trong danh sách kết quả và giá trị ứng viên tiếp theo sẽ được tạo bằng cách chuyển giá trị mới chấp nhận sang <code>next</code>.    Sau khi một giá trị ứng viên không khớp với <code>condition</code>, quy trình tạo danh sách sẽ dừng.    Một tham số tùy chọn, <code>selector</code>, có thể được cung cấp để chuyển đổi các mục trong danh sách kết quả.


## Examples

### Example #1 
Tạo một danh sách bằng cách bắt đầu từ 10, giảm liên tục 1 mục và đảm bảo mỗi mục lớn hơn 0.
```powerquery
List.Generate(() => 10, each _ > 0, each _ - 1)
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```


### Example #2 
Tạo một danh sách bản ghi chứa x và y, trong đó x là giá trị và y là danh sách. x phải nhỏ hơn 10 và biểu thị số lượng mục trong danh sách y. Sau khi danh sách được tạo, chỉ trả về các giá trị x.
```powerquery
List.Generate(
    () => [x = 1, y = {}],
    each [x] < 10,
    each [x = List.Count([y]), y = [y] & {x}],
    each [x]
)
```

Result: 
```powerquery
{1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
```




## Category
List.Generators
