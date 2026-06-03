---
title: Date.FromText
---

# Date.FromText


Tạo Date từ dạng thức Date cục bộ, phổ quát và tùy chỉnh.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

Tạo một giá trị ngày từ biểu diễn văn bản.

-   `text`: Giá trị văn bản cần chuyển đổi thành ngày.
-   `options`: Có thể cung cấp `record` tùy chọn để chỉ định các thuộc tính bổ sung. `record` có thể chứa các trường sau:
    -   `Format`: Giá trị `text` cho biết định dạng sẽ sử dụng. Để biết thêm chi tiết, hãy truy cập https://go.microsoft.com/fwlink/?linkid=2180104 và https://go.microsoft.com/fwlink/?linkid=2180105. Việc bỏ trống trường này hoặc cung cấp `null` sẽ dẫn đến việc phân tích ngày bằng nỗ lực tốt nhất.
    -   `Culture`: Khi `Format` không phải là null, `Culture` sẽ kiểm soát một số bộ xác định định dạng. Ví dụ: trong `"en-US"` `"MMM"` là `"Jan", "Feb", "Mar", ...`, trong khi trong `"ru-RU"` `"MMM"` là `"янв", "фев", "мар", ...`. Khi `Format` là `null` thì `Culture` sẽ kiểm soát định dạng mặc định cần sử dụng. Khi `Culture` là `null` hoặc bị bỏ qua thì `Culture.Current` được sử dụng.

Để hỗ trợ quy trình làm việc cũ, `options` cũng có thể là giá trị văn bản. Giá trị này có hành vi giống như khi `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Chuyển đổi `2010-12-31` thành giá trị `date`.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2
Chuyển đổi bằng cách sử dụng dạng thức tùy chỉnh và văn hóa Đức.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3
Tìm ngày trong lịch Dương tương ứng với đầu năm 1400 trong lịch Hijri.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```


### Example #4
Chuyển đổi ngày bằng văn bản tiếng Ý có tháng viết tắt trong cột Ngày đăng thành giá trị ngày.
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = text, Sales = number],
    {
        {"US-2004", "20 gen. 2023", 580},
        {"CA-8843", "18 lug. 2024", 280},
        {"PA-1274", "12 gen. 2023", 90},
        {"PA-4323", "14 apr. 2023", 187},
        {"US-1200", "14 dic. 2023", 350},
        {"PTY-507", "4 giu. 2024", 110}
    }),
    #"Converted Date" = Table.TransformColumns(
        Source,
        {"Posted Date", each Date.FromText(_, [Culture = "it-IT"]), type date}
    )
in
    #"Converted Date"
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"US-2004", #date(2023, 1, 20), 580},
    {"CA-8843", #date(2024, 7, 18), 280},
    {"PA-1274", #date(2023, 1, 12), 90},
    {"PA-4323", #date(2023, 4, 14), 187},
    {"US-1200", #date(2023, 12, 14), 350},
    {"PTY-507", #date(2024, 6, 4), 110}
})
```




## Category
Date
