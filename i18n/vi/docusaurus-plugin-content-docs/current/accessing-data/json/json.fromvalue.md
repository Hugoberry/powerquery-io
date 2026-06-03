---
title: Json.FromValue
---

# Json.FromValue


Tạo ra phép biểu diễn JSON cho một giá trị nhất định.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Remarks

Tạo biểu diễn JSON của một giá trị nhất định `value` bằng mã hóa văn bản được `encoding` chỉ định. Nếu `encoding` bị bỏ qua thì UTF8 sẽ được sử dụng. Các giá trị được biểu diễn như sau:

-   Các giá trị rỗng, văn bản và logic được biểu diễn thành các loại JSON tương ứng
-   Số được biểu diễn ở dạng số trong JSON, trừ khi `#infinity`, `-#infinity` và `#nan` được chuyển đổi thành rỗng
-   Các danh sách được biểu diễn ở dạng mảng JSON
-   Các bản ghi được biểu diễn ở dạng đối tượng JSON
-   Các bảng được biểu diễn ở dạng mảng đối tượng
-   Ngày, giờ, ngày giờ, múi giờ và khoảng thời gian được biểu diễn ở dạng văn bản ISO-8601
-   Giá trị nhị phân được biểu diễn dưới dạng văn bản mã hóa base-64
-   Các kiểu và hàm tạo ra lỗi


## Examples

### Example #1
Chuyển đổi một giá trị phức hợp sang JSON.
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
