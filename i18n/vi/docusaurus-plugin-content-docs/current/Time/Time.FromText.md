---
title: Time.FromText
---

# Time.FromText


Tạo Time từ dạng thức Time địa phương, tùy chỉnh và quốc tế.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Tạo giá trị <code>time</code> từ dạng biểu diễn văn bản, <code>text</code>. Một tham số <code>record</code> tùy chọn, <code>options</code>, có thể được cung cấp để chỉ định các thuộc tính bổ sung. <code>record</code> có thể chứa các trường sau:<ul>   <li><code>Format</code>: Giá trị <code>text</code> cho biết định dạng cần sử dụng. Để biết thêm chi tiết, hãy truy nhập https://go.microsoft.com/fwlink/?linkid=2180104 và https://go.microsoft.com/fwlink/?linkid=2180105. Việc bỏ qua trường này hoặc cung cấp giá trị <code>null</code> sẽ dẫn đến phân tích thời gian bằng phương án hiệu quả nhất.</li>   <li><code>Culture</code>: Khi <code>Format</code> không phải là null, <code>Culture</code> sẽ kiểm soát một số bộ xác định định dạng. Ví dụ, trong <code>"en-US"</code> <code>"tt"</code> là <code>"AM" hoặc "PM"</code> còn trong <code>"ar-EG"</code> <code>"tt"</code> là <code>"ص" hoặc "م"</code>. Khi <code>Format</code> là <code>null</code>, <code>Culture</code> sẽ kiểm soát định dạng mặc định cần sử dụng. Khi <code>Culture</code> là <code>null</code> hoặc bị bỏ qua, <code>Culture.Current</code> sẽ được sử dụng.</li></ul>Để hỗ trợ các quy trình làm việc cũ, <code>options</code> cũng có thể là giá trị văn bản. Giá trị này có cùng hành vi giống như <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Chuyển đổi &lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt; thành giá trị Thời gian.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
Chuyển &lt;code&gt;&#34;1012&#34;&lt;/code&gt; thành giá trị Thời gian.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
Chuyển &lt;code&gt;&#34;10&#34;&lt;/code&gt; thành giá trị Thời gian.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
