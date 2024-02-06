---
title: Duration.ToText
---

# Duration.ToText


Trả về văn bản có dạng &#34;d.h:m:s&#34;.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Trả về một dạng thức biểu diễn bằng văn bản có dạng "day.hour:mins:sec" cho giá trị khoảng thời gian cụ thể, <code>duration</code>. <ul>        <li><code>duration</code>: Một <code>khoảng thời gian</code> được dùng làm căn cứ để tính dạng thức biểu diễn đó.</li>  <li><code>format</code>: <i>[Tùy chọn]</i> Không dùng nữa, sẽ trả về lỗi nếu không phải giá trị rỗng</li>      </ul>


## Examples

### Example #1 
Chuyển đổi &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; thành giá trị văn bản.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
