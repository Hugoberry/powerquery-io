---
title: Number.From
---

# Number.From


Tạo một số từ giá trị cho sẵn.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Trả về giá trị <code>number</code> từ <code>value</code> cho sẵn. <code>culture</code> tùy chọn cũng có thể được cung cấp (ví dụ: "en-US").Nếu <code>value</code> cho sẵn là <code>null</code> thì <code>Number.From</code> sẽ trả về <code>null</code>. Nếu <code>value</code> cho sẵn là <code>number</code> thì sẽ trả về <code>value</code>. Giá trị của các loại sau đây có thể được chuyển đổi thành giá trị <code>number</code>:      <ul>        <li><code>text</code>: Một giá trị <code>number</code> từ dạng thức biểu diễn bằng văn bản. Xử lý các định dạng văn bản thông thường ("15", "3,423.10", "5.0E-10"). Tham khảo <code>Number.FromText</code> để biết chi tiết.</li>        <li><code>logical</code>: 1 cho <code>true</code>, 0 cho <code>false</code>.</li>        <li><code>datetime</code>: Số dấu chấm động có độ chính xác gấp đôi chứa ngày Tự động OLE tương đương.</li>        <li><code>datetimezone</code>: Số dấu chấm động có độ chính xác kép chứa ngày Tự động OLE tương đương với ngày và giờ địa phương là <code>value</code>.</li>        <li><code>date</code>: Số dấu chấm động có độ chính xác kép chứa ngày Tự động OLE tương đương.</li>        <li><code>time</code>:  Được biểu thị bằng ngày có dạng phân số.</li>        <li><code>duration</code>: Được biểu thị bằng ngày có dạng số nguyên và phân số.</li>      </ul>Nếu <code>value</code> thuộc một loại khác thì sẽ trả về một lỗi.


## Examples

### Example #1 
Nhận giá trị &lt;code&gt;number&lt;/code&gt; của &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Nhận giá trị &lt;code&gt;number&lt;/code&gt; của &lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt;.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
Tải giá trị &lt;code&gt;số&lt;/code&gt; &lt;code&gt;&#34;12,3%&#34;&lt;/code&gt;.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
