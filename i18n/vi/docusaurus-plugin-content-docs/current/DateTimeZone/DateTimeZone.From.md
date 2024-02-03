---
title: DateTimeZone.From
---

# DateTimeZone.From


## Description

Tạo một datetimezone từ giá trị cho sẵn.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Details

Trả về giá trị <code>datetimezone</code> từ <code>value</code> cho sẵn. <code>culture</code> tùy chọn cũng có thể được cung cấp (ví dụ: "en-US").Nếu <code>value</code> cho sẵn là <code>null</code>, <code>DateTimeZone.From</code> sẽ trả về <code>null</code>. Nếu <code>value</code> cho sẵn là <code>datetimezone</code> thì sẽ trả về <code>value</code>. Có thể chuyển đổi giá trị của các loại sau đây thành giá trị <code>datetimezone</code>:      <ul>        <li><code>text</code>: Giá trị <code>datetimezone</code> từ dạng thức biểu diễn dạng văn bản. Tham khảo <code>DateTimeZone.FromText</code> để biết chi tiết.</li>        <li><code>date</code>: Giá trị <code>datetimezone</code> có <code>value</code> dưới dạng cấu phần ngày, <code>12:00:00 AM</code> dưới dạng cấu phần thời gian và mức chênh lệch tương ứng với múi giờ địa phương.</li>        <li><code>datetime</code>: Giá trị <code>datetimezone</code> có <code>value</code> dưới dạng ngày giờ và mức chênh lệch tương ứng với múi giờ địa phương.</li>        <li><code>time</code>: Giá trị <code>datetimezone</code> có ngày tương đương với Ngày tự động OLE của <code>0</code> dưới dạng cấu phần ngày, <code>value</code> dưới dạng cấu phần thời gian và mức chênh lệch tương ứng với múi giờ địa phương.</li>        <li><code>number</code>: Giá trị <code>datetimezone</code> có ngày giờ tương đương với Ngày tự động OLE thể hiện bởi <code>value</code> và mức chênh lệch tương ứng với múi giờ địa phương.</li>      </ul>Nếu <code>value</code> thuộc bất kỳ loại nào khác, thì sẽ trả về lỗi.


## Examples

### Example #1 
Chuyển đổi &lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt; thành giá trị &lt;code&gt;datetimezone&lt;/code&gt;.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone
