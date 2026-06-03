---
title: List.TransformMany
---

# List.TransformMany


Trả về một danh sách có các phần tử được chuyển đổi từ danh sách đầu vào bằng hàm được chỉ định.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

Trả về một danh sách có các phần tử được chiếu từ danh sách đầu vào.  
  
Hàm `collectionTransform` chuyển đổi từng phần tử thành một danh sách trung gian và hàm `resultTransform` nhận phần tử gốc cũng như mục từ danh sách trung gian để xây dựng kết quả cuối cùng.  
  
Hàm `collectionTransform` có chữ ký `(x bất kỳ) dưới dạng danh sách => ...`, trong đó `x` là một phần tử trong `list`. Hàm `resultTransform` chiếu hình dạng của kết quả và có chữ ký `(x bất kỳ, y bất kỳ) dưới dạng bất kỳ => ...`, trong đó `x` là phần tử trong `list` và `y` là phần tử từ danh sách được tạo bằng cách chuyển `x` đến `collectionTransform`.


## Examples

### Example #1
Làm phẳng danh sách người và thú cưng của họ.
```powerquery
List.TransformMany(
    {
        [Name = "Alice", Pets = {"Scruffy", "Sam"}],
        [Name = "Bob", Pets = {"Walker"}]
    },
    each [Pets],
    (person, pet) => [Name = person[Name], Pet = pet]
)
```

Result: 
```powerquery
{
    [Name = "Alice", Pet = "Scruffy"],
    [Name = "Alice", Pet = "Sam"],
    [Name = "Bob", Pet = "Walker"]
}
```




## Category
List.Transformation functions
