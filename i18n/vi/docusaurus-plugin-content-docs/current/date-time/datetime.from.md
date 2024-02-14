---
title: DateTime.From
---

# DateTime.From


Tạo một datetime từ giá trị cho sẵn.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Trả về giá trị <code>datetime</code> từ <code>value</code> cho sẵn. <code>culture</code> tùy chọn cũng có thể được cung cấp (ví dụ: "en-US").Nếu <code>value</code> cho sẵn là <code>null</code>, <code>DateTime.From</code> thì sẽ trả về <code>null</code>. Nếu <code>value</code> cho sẵn là <code>datetime</code> thì sẽ trả về <code>value</code>. Có thể chuyển đổi giá trị của các loại sau thành giá trị <code>datetime</code>:      <ul>        <li><code>text</code>: Giá trị <code>datetime</code> từ dạng thức biểu diễn bằng văn bản. Tham khảo <code>DateTime.FromText</code> để biết chi tiết.</li>        <li><code>date</code>: Giá trị <code>datetime</code> có <code>value</code> dưới dạng cấu phần ngày và <code>12:00:00 AM</code> dưới dạng cấu phần thời gian.</li>        <li><code>datetimezone</code>: Giá trị <code>datetime</code> địa phương tương ứng với <code>value</code>.</li>        <li><code>time</code>: Giá trị <code>datetime</code> có ngày tương ứng của Ngày tự động OLE của <code>0</code> dưới dạng cấu phần ngày và <code>value</code> dưới dạng cấu phần thời gian.</li>        <li><code>number</code>: Giá trị <code>datetime</code> tương ứng với Ngày tự động OLE được biểu diễn bằng <code>value</code>. </li>      </ul>Nếu <code>value</code> thuộc bất kỳ loại nào khác, thì sẽ trả về lỗi.


## Examples

### Example #1 
Chuyển đổi &lt;code&gt;#time(06, 45, 12)&lt;/code&gt; thành giá trị &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
Chuyển đổi &lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; thành giá trị &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
