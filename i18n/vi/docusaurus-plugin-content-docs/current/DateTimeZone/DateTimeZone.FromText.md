---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


## Description

Tạo một datetimezone từ các dạng thức datetimezone địa phương, phổ quát và tùy chỉnh.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Details

Tạo giá trị <code>datetimezone</code> từ dạng biểu diễn văn bản, <code>text</code>. Một tham số <code>record</code> tùy chọn, <code>options</code> có thể được cung cấp để chỉ định các thuộc tính bổ sung. <code>record</code> có thể chứa các trường sau:<ul>   <li><code>Format</code>: Giá trị <code>text</code> cho biết định dạng cần sử dụng. Để biết thêm chi tiết, hãy truy nhập https://go.microsoft.com/fwlink/?linkid=2180104 và https://go.microsoft.com/fwlink/?linkid=2180105. Việc bỏ qua trường này hoặc cung cấp giá trị <code>null</code> sẽ dẫn đến phân tích ngày bằng phương án hiệu quả nhất.</li>   <li><code>Culture</code>: Khi<code>Format</code> không phải là null, <code>Culture</code> sẽ kiểm soát một số bộ xác định định dạng. Ví dụ, trong <code>"en-US"</code> <code>"MMM"</code> là <code>"Jan", "Feb", "Mar", ...</code> còn trong <code>"ru-RU"</code> <code>"MMM"</code> là <code>"янв", "фев", "мар", ...</code>. Khi <code>Format</code> là <code>null</code>, <code>Culture</code> sẽ kiểm soát định dạng cần sử dụng. Khi <code>Culture</code> là <code>null</code> hoặc bị bỏ qua, <code>Culture.Current</code> sẽ được sử dụng.</li></ul>Để hỗ trợ các quy trình làm việc cũ, <code>options</code> cũng có thể là giá trị văn bản. Giá trị này có cùng hành vi giống như <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Chuyển đổi &lt;code&gt;&#34;2010-12-31T01:30:00-08:00&#34;&lt;/code&gt; thành giá trị &lt;code&gt;datetimezone&lt;/code&gt;.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2 
Chuyển đổi bằng cách sử dụng dạng thức tùy chỉnh và văn hóa Đức.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3 
Chuyển đổi bằng ISO 8601.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
