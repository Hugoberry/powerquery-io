---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


Trả về một biểu diễn văn bản chứa giá trị datetimezone.


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Trả về dạng biểu diễn văn bản của `dateTimeZone`. Một tham số `record` tùy chọn là `options` có thể được cung cấp để chỉ định các thuộc tính bổ sung. `culture` chỉ được dùng cho quy trình làm việc cũ. `record` có thể chứa các trường sau:

-   `Format`: Giá trị `text` cho biết định dạng sẽ sử dụng. Để biết thêm chi tiết, hãy truy cập https://go.microsoft.com/fwlink/?linkid=2180104 và https://go.microsoft.com/fwlink/?linkid=2180105. Việc bỏ qua trường này hoặc cung cấp giá trị `null` sẽ dẫn đến định dạng ngày bằng giá trị mặc định do `Culture` xác định.
-   `Culture`: Khi `Format` không phải là null, `Culture` sẽ kiểm soát một số bộ xác định định dạng. Ví dụ: trong `"en-US"` `"MMM"` là `"Jan", "Feb", "Mar", ...`, trong khi trong `"ru-RU"` `"MMM"` là `"янв", "фев", "мар", ...`. Khi `Format` là `null` thì `Culture` sẽ kiểm soát định dạng mặc định cần sử dụng. Khi `Culture` là `null` hoặc bị bỏ qua, `Culture.Current` sẽ được sử dụng.

Để hỗ trợ các quy trình làm việc cũ, `options` và `culture` cũng có thể là giá trị văn bản. Giá trị này có hành vi giống như khi `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Chuyển đổi `#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)` thành giá trị `text`. *Đầu ra kết quả có thể khác nhau tùy thuộc vào văn hóa hiện tại.*
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2
Chuyển đổi bằng cách sử dụng dạng thức tùy chỉnh và văn hóa Đức.
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3
Chuyển đổi bằng mẫu hình ISO 8601.
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone
