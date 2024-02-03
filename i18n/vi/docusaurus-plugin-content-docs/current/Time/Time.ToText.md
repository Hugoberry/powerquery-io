---
title: Time.ToText
---

# Time.ToText


## Description

Trả về một cách biểu diễn văn bản của giá trị thời gian.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Details

Trả về dạng biểu diễn văn bản của <code>time</code>. Một tham số <code>record</code> tùy chọn, <code>options</code>, có thể được cung cấp để chỉ định các thuộc tính bổ sung. <code>culture</code> chỉ được sử dụng cho quy trình làm việc cũ. <code>record</code> có thể chứa các trường sau:<ul>   <li><code>Format</code>: Giá trị <code>text</code> cho biết định dạng cần sử dụng. Để biết thêm chi tiết, hãy truy nhập https://go.microsoft.com/fwlink/?linkid=2180104 và https://go.microsoft.com/fwlink/?linkid=2180105. Việc bỏ qua trường này hoặc cung cấp giá trị <code>null</code> sẽ dẫn đến định dạng ngày bằng giá trị mặc định do <code>Culture</code> xác định.</li>   <li><code>Culture</code>: Khi <code>Format</code> không phải là null, <code>Culture</code> sẽ kiểm soát một số bộ xác định định dạng. Ví dụ, trong <code>"en-US"</code> <code>"tt"</code> là <code>"AM" hoặc "PM"</code> còn trong <code>"ar-EG"</code> <code>"tt"</code> là <code>"ص" hoặc "م"</code>. Khi <code>Format</code> là <code>null</code>, <code>Culture</code> sẽ kiểm soát định dạng mặc định cần sử dụng. Khi <code>Culture</code> là <code>null</code> hoặc bị bỏ qua, <code>Culture.Current</code> sẽ được sử dụng.</li></ul>Để hỗ trợ các quy trình làm việc cũ, <code>options</code> và <code>culture</code> cũng có thể là giá trị văn bản. Giá trị này có cùng hành vi giống như <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Chuyển đổi &lt;code&gt;#time(01, 30, 25)&lt;/code&gt; thành giá trị &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;Đầu ra kết quả có thể khác nhau tùy thuộc vào văn hóa hiện tại.&lt;/i&gt;
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2 
Chuyển đổi bằng cách sử dụng dạng thức tùy chỉnh và văn hóa Đức.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3 
Chuyển đổi bằng dạng thức thời gian chuẩn.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
