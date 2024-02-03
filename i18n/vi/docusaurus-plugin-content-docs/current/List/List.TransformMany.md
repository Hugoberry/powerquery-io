---
title: List.TransformMany
---

# List.TransformMany


## Description

Trả về một danh sách có các phần tử được chuyển đổi từ danh sách đầu vào bằng hàm được chỉ định.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Details

Trả về một danh sách có các phần tử được chiếu từ danh sách đầu vào.<br />    <br />    Hàm <code>collectionTransform</code> chuyển đổi từng phần tử thành một danh sách trung gian và hàm <code>resultTransform</code> nhận phần tử gốc cũng như mục từ danh sách trung gian để xây dựng kết quả cuối cùng.<br />    <br />    Hàm <code>collectionTransform</code> có chữ ký <code>(x bất kỳ) dưới dạng danh sách => ...</code>,  trong đó <code>x</code> là một phần tử trong <code>list</code>.    Hàm <code>resultTransform</code> chiếu hình dạng của kết quả và có chữ ký <code>(x bất kỳ, y bất kỳ) dưới dạng bất kỳ => ...</code>, trong đó <code>x</code> là phần tử trong <code>list</code> và <code>y</code> là phần tử từ danh sách được tạo bằng cách chuyển <code>x</code> đến <code>collectionTransform</code>.


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
