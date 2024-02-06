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

Tạo giá trị <code>date</code> từ dạng biểu diễn văn bản, <code>text</code>. Một tham số <code>record</code> tùy chọn, <code>options</code>, có thể được cung cấp để chỉ định các thuộc tính bổ sung. <code>record</code> có thể chứa các trường sau:<ul>   <li><code>Format</code>: Giá trị <code>text</code> cho biết định dạng cần sử dụng. Để biết thêm chi tiết, hãy truy nhập https://go.microsoft.com/fwlink/?linkid=2180104 và https://go.microsoft.com/fwlink/?linkid=2180105. Việc bỏ qua trường này hoặc cung cấp giá trị <code>null</code> sẽ dẫn đến phân tích ngày bằng phương án hiệu quả nhất.</li>   <li><code>Culture</code>: Khi<code>Format</code> không phải là null, <code>Culture</code> sẽ kiểm soát một số bộ xác định định dạng. Ví dụ, trong <code>"en-US"</code> <code>"MMM"</code> là <code>"Jan", "Feb", "Mar", ...</code> còn trong <code>"ru-RU"</code> <code>"MMM"</code> là <code>"янв", "фев", "мар", ...</code>. Khi <code>Format</code> là <code>null</code>, <code>Culture</code> sẽ kiểm soát định dạng cần sử dụng. Khi <code>Culture</code> là <code>null</code> hoặc bị bỏ qua, <code>Culture.Current</code> sẽ được sử dụng.</li></ul>Để hỗ trợ các quy trình làm việc cũ, <code>options</code> cũng có thể là giá trị văn bản. Giá trị này có cùng hành vi giống như <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Chuyển đổi &lt;code&gt;2010-12-31&lt;/code&gt; thành giá trị &lt;code&gt;date&lt;/code&gt;.
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




## Category
Date
