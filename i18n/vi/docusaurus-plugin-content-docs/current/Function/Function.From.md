---
title: Function.From
---

# Function.From


Tạo hàm bằng một chữ ký tham số cụ thể ở đầu hàm sử dụng đối số danh sách đơn


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Remarks

Lấy một hàm đơn phân <code>function</code> rồi tạo hàm mới bằng loại <code>functionType</code> xây dựng danh sách bao gồm các đối số của loại này rồi chuyển đến <code>function</code>.


## Examples

### Example #1 
Chuyển đổi List.Sum thành hàm hai đối số, hai đối số đó được thêm vào cùng nhau
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2 
Chuyển đổi hàm sử dụng danh sách thành hàm hai đối số
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
