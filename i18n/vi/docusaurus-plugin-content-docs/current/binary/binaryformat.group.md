---
title: BinaryFormat.Group
---

# BinaryFormat.Group


Trả về một định dạng nhị phân đọc một nhóm mục.


## Syntax

```powerquery
BinaryFormat.Group(
    binaryFormat as function,
    group as list,
    optional extra as function,
    optional lastKey as any
) as function
```


## Remarks

Các tham số như sau:

-   Tham số `binaryFormat` chỉ định định dạng nhị phân của giá trị khóa.
-   Tham số `group` cung cấp thông tin về nhóm mục đã biết.
-   Tham số `extra` tùy chọn có thể dùng để chỉ định một hàm sẽ trả về một giá trị định dạng nhị phân cho giá trị theo sau bất kỳ khóa nào ngoài dự kiến. Nếu tham số `extra` không được chỉ định thì lỗi sẽ được thông báo nếu có các giá trị khóa ngoài dự kiến.

Tham số `group` chỉ định danh sách định nghĩa mục. Mỗi định nghĩa mục là một danh sách chứa 3-5 giá trị như sau:

-   Giá trị khóa. Giá trị của khóa tương ứng với mục. Giá trị này phải là duy nhất trong tập hợp mục.
-   Định dạng mục. Định dạng nhị phân tương ứng với giá trị của mục. Giá trị này cho phép mỗi mục có một định dạng khác nhau.
-   Lần xuất hiện mục. Giá trị `BinaryOccurrence.Type` cho số lần một mục được dự kiến sẽ xuất hiện trong nhóm. Nếu không có các mục bắt buộc thì sẽ xảy ra lỗi. Các mục trùng lặp bắt buộc hoặc tùy chọn được xử lý như các giá trị khóa ngoài dự kiến.
-   Giá trị mục mặc định (tùy chọn). Nếu giá trị mục mặc định xuất hiện trong danh sách định nghĩa mục và không phải là giá trị rỗng thì giá trị đó sẽ được sử dụng thay cho giá trị mặc định. Nếu giá trị mặc định cho mục lặp hoặc tùy chọn là giá trị rỗng thì giá trị mặc định cho giá trị lặp là danh sách trống \{ \}.
-   Chuyển đổi giá trị mục (tùy chọn). Nếu hàm chuyển đổi giá trị mục xuất hiện trong danh sách định nghĩa mục và không phải là giá trị rỗng thì hàm đó sẽ được gọi để chuyển đổi giá trị mục trước khi giá trị đó được trả về. Hàm chuyển đổi chỉ được gọi nếu mục xuất hiện trong đầu vào (hàm này sẽ không bao giờ được gọi bằng giá trị mặc định).


## Examples

### Example #1
Các trường hợp sau đây giả định là một giá trị khóa có một byte đơn với 4 mục dự kiến trong nhóm, tất cả các mục này đều có một byte dữ liệu theo sau khóa. Các mục này xuất hiện trong đầu vào như sau:

-   Khóa 1 là bắt buộc và xuất hiện với giá trị 11.
-   Khóa 2 lặp lại và xuất hiện hai lần với giá trị 22, cho kết quả là một giá trị \{ 22, 22 \}.
-   Khóa 3 là tùy chọn và không xuất hiện, cho kết quả là một giá trị rỗng.
-   Khóa 4 lặp lại nhưng không xuất hiện, cho kết quả là một giá trị \{ \}.
-   Khóa 5 không thuộc nhóm nhưng xuất hiện một lần với giá trị 55. Hàm bổ sung được gọi bằng giá trị khóa 5 và trả về định dạng tương ứng với giá trị đó (BinaryFormat.Byte). Giá trị 55 được đọc và bị bỏ.
```powerquery
let
    b = #binary({
        1, 11,
        2, 22,
        2, 22,
        5, 55,
        1, 11
    }),
    f = BinaryFormat.Group(
        BinaryFormat.Byte,
        {
            {1, BinaryFormat.Byte, BinaryOccurrence.Required},
            {2, BinaryFormat.Byte, BinaryOccurrence.Repeating},
            {3, BinaryFormat.Byte, BinaryOccurrence.Optional},
            {4, BinaryFormat.Byte, BinaryOccurrence.Repeating}
        },
        (extra) => BinaryFormat.Byte
    )
in
    f(b)
```

Result: 
```powerquery
{11, {22, 22}, null, {}}
```


### Example #2
Ví dụ sau đây minh họa chuyển đổi giá trị mục và giá trị mục mặc định. Mục lặp có khóa 1 tính tổng của danh sách giá trị được đọc bằng hàm List.Sum. Mục tùy chọn có khóa 2 có giá trị mặc định là 123 thay vì giá trị rỗng.
```powerquery
let
    b = #binary({
        1, 101,
        1, 102
    }),
    f = BinaryFormat.Group(
        BinaryFormat.Byte,
        {
            {1, BinaryFormat.Byte, BinaryOccurrence.Repeating,
              0, (list) => List.Sum(list)},
            {2, BinaryFormat.Byte, BinaryOccurrence.Optional, 123}
        }
    )
in
    f(b)
```

Result: 
```powerquery
{203, 123}
```




## Category
Binary Formats.Reading a group of items
