---
title: Time.From
---

# Time.From


## Description

Tạo thời gian từ giá trị cho sẵn.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Details

Trả về giá trị <code>time</code> từ <code>value</code> cho sẵn. <code>culture</code> tùy chọn cũng có thể được cung cấp (ví dụ: "en-US").Nếu <code>value</code> cho sẵn là <code>null</code>, <code>Time.From</code> sẽ trả về <code>null</code>. Nếu <code>value</code> cho sẵn là <code>time</code> thì sẽ trả về <code>value</code>. Giá trị của các loại sau đây có thể được chuyển đổi thành giá trị <code>time</code>:      <ul>        <li><code>text</code>: Giá trị <code>time</code> từ dạng thức biểu diễn bằng văn bản. Tham khảo <code>Time.FromText</code> để biết chi tiết.</li>        <li><code>datetime</code>: Cấu phần thời gian của <code>value</code>.</li>        <li><code>datetimezone</code>: Cấu phần thời gian của ngày giờ địa phương tương đương với <code>value</code>.</li>        <li><code>number</code>: Giá trị <code>time</code> tương đương với số ngày ở dạng phân số hoặc phân số được biểu thị bởi <code>value</code>. Nếu <code>value</code> âm hay lớn hơn hoặc bằng 1 thì sẽ trả về một lỗi.</li>      </ul>Nếu <code>value</code> thuộc một loại khác thì sẽ trả về một lỗi.


## Examples

### Example #1 
Chuyển đổi &lt;code&gt;0.7575&lt;/code&gt; thành giá trị &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
Chuyển đổi &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; thành giá trị &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
