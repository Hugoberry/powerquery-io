---
title: Text.Contains
---

# Text.Contains


Trả về kết quả văn bản có chứa chuỗi con hay không.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Phát hiện xem `text` có chứa giá trị `substring` không. Trả về true nếu tìm thấy giá trị. Hàm này không hỗ trợ ký tự đại diện hoặc biểu thức thông thường.  
  
Có thể sử dụng đối số tùy chọn `comparer` để chỉ định so sánh không phân biệt chữ hoa chữ thường hoặc có nhận biết ngôn ngữ và thiết đặt bản địa. Các trình so sánh tích hợp sau đây có sẵn trong ngôn ngữ công thức:

-   `Comparer.Ordinal`: Được sử dụng để thực hiện so sánh thứ tự phân biệt chữ hoa/thường
-   `Comparer.OrdinalIgnoreCase`: Được sử dụng để thực hiện so sánh thứ tự không phân biệt chữ hoa chữ thường
-   `Comparer.FromCulture`: Dùng để thực hiện so sánh nhận biết ngôn ngữ

Nếu đối số đầu tiên là null, hàm này sẽ trả về null.  
  
Tất cả ký tự đều được xử lý theo nghĩa đen. Ví dụ: "DR", " DR", "DR ", và " DR " không được coi là bằng nhau.


## Examples

### Example #1
Tìm xem văn bản "Hello World" có chứa "Hello" hay không.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2
Tìm xem văn bản "Hello World" có chứa "hello" hay không.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3
Tìm xem văn bản "Hello World" có chứa "hello" không bằng trình so sánh không phân biệt chữ hoa/thường.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Tìm các hàng trong bảng có chứa "A-" hoặc "7" trong mã tài khoản.
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = date, Sales = number],
    {
        {"US-2004", #date(2023,1,20), 580},
        {"CA-8843", #date(2023,7,18), 280},
        {"PA-1274", #date(2022,1,12), 90},
        {"PA-4323", #date(2023,4,14), 187},
        {"US-1200", #date(2022,12,14), 350},
        {"PTY-507", #date(2023,6,4), 110}
    }),
    #"Filtered rows" = Table.SelectRows(
        Source,
        each Text.Contains([Account Code], "A-") or
            Text.Contains([Account Code], "7"))
in
    #"Filtered rows"
    
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"CA-8843", #date(2023,7,18), 280},
    {"PA-1274", #date(2022,1,12), 90},
    {"PA-4323", #date(2023,4,14), 187},
    {"PTY-507", #date(2023,6,4), 110}
})
    
```




## Category
Text.Membership
