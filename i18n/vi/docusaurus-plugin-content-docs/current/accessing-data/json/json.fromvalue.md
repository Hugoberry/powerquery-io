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

Tạo biểu diễn JSON của một giá trị cho sẵn <code>value</code> bằng mã hóa văn bản được <code>encoding</code> chỉ định. Nếu <code>encoding</code> bị bỏ qua thì UTF8 sẽ được sử dụng. Các giá trị được biểu diễn như sau:<br /> <ul>        <li>Các giá trị rỗng, văn bản và logic được biểu diễn thành các loại JSON tương ứng</li>        <li>Số được biểu diễn ở dạng số trong JSON, trừ khi <code>#infinity</code>, <code>-#infinity</code> và <code>#nan</code> được chuyển đổi thành rỗng</li>        <li>Các danh sách được biểu diễn ở dạng mảng JSON</li>        <li>Các bản ghi được biểu diễn ở dạng đối tượng JSON </li>        <li>Các bảng được biểu diễn ở dạng mảng đối tượng</li>        <li>Ngày, giờ, ngày giờ, múi giờ và khoảng thời gian được biểu diễn ở dạng văn bản ISO-8601</li>        <li>Các giá trị nhị nhân được biểu diễn ở dạng văn bản mã hóa cơ sở 64</li>        <li>Các loại và hàm tạo ra lỗi</li> </ul>    


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
