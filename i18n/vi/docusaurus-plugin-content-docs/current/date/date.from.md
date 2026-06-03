---
title: Date.From
---

# Date.From


Tạo ngày từ giá trị cho sẵn.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

Trả về giá trị ngày từ giá trị cho sẵn.

-   `value`: Giá trị cần chuyển đổi sang ngày. Nếu giá trị cho sẵn là `null` thì hàm này sẽ trả về `null`. Nếu giá trị cho sẵn là `date` thì hàm này sẽ trả về `value`. Giá trị của các loại sau có thể được chuyển đổi thành giá trị `date`:
    -   `text`: Giá trị `date` từ dạng biểu diễn văn bản. Tham khảo `Date.FromText` để biết chi tiết.
    -   `datetime`: Thành phần ngày của `value`.
    -   `datetimezone`: Thành phần ngày của ngày giờ địa phương tương đương với `value`.
    -   `number`: Thành phần ngày của ngày giờ tương đương với số dấu phẩy động có thành phần tích phân là số ngày trước hoặc sau nửa đêm, ngày 30 tháng 12 năm 1899 và có thành phần phân số biểu diễn thời gian trong ngày đó chia cho 24. Ví dụ: nửa đêm, ngày 31 tháng 12 năm 1899 được biểu diễn bằng 1,0; 6 giờ sáng, ngày 1 tháng 1 năm 1900 được biểu diễn bằng 2,25; nửa đêm, ngày 29 tháng 12 năm 1899 được biểu diễn bằng -1,0; và 6 giờ sáng, ngày 29 tháng 12 năm 1899 được biểu diễn bằng -1,25. Giá trị cơ sở là nửa đêm, ngày 30 tháng 12 năm 1899. Giá trị tối thiểu là nửa đêm, ngày 1 tháng 1 năm 0100. Giá trị tối đa là thời điểm cuối cùng của ngày 31 tháng 12 năm 9999.
    -   Nếu `value` thuộc bất kỳ loại nào khác, hệ thống sẽ trả về lỗi.
-   `culture`: Ngôn ngữ của giá trị cho sẵn (ví dụ: "en-US").


## Examples

### Example #1
Chuyển đổi ngày giờ được chỉ định thành giá trị ngày.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```


### Example #2
Chuyển đổi số được chỉ định thành giá trị ngày.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #3
Chuyển đổi ngày tháng bằng văn bản tiếng Đức trong cột Ngày đăng sang giá trị ngày.
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = text, Sales = number],
    {
        {"US-2004", "20 Januar 2023", 580},
        {"CA-8843", "18 Juli, 2023", 280},
        {"PA-1274", "12 Januar, 2022", 90},
        {"PA-4323", "14 April 2023", 187},
        {"US-1200", "14 Dezember, 2022", 350},
        {"PTY-507", "4 Juni, 2023", 110}
    }),
    #"Filtered rows" = Table.TransformColumns(
        Source,
        {"Posted Date", each Date.From(_, "de-DE"), type date}
    )
in
    #"Filtered rows"
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"US-2004", #date(2023, 1, 20), 580},
    {"CA-8843", #date(2023, 7, 18), 280},
    {"PA-1274", #date(2022, 1, 12), 90},
    {"PA-4323", #date(2023, 4, 14), 187},
    {"US-1200", #date(2022, 12, 14), 350},
    {"PTY-507", #date(2023, 6, 4), 110}
})
```




## Category
Date
