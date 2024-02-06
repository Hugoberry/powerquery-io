---
title: Duration.From
---

# Duration.From


Tạo một khoảng thời gian từ giá trị cho sẵn.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

Trả về giá trị <code>duration</code> từ <code>value</code> cho sẵn. Nếu <code>value</code> cho sẵn là <code>null</code> thì <code>Duration.From</code> trả về <code>null</code>.  Nếu <code>value</code> cho sẵn là <code>duration</code> thì <code>value</code> được trả về. Giá trị của các loại sau đây có thể được chuyển đổi thành giá trị <code>duration</code>:      <ul>        <li><code>text</code>: Giá trị <code>duration</code> từ dạng thời gian đã trôi qua ở dạng thức văn bản (d.h:m:s). Tham khảo <code>Duration.FromText</code> để biết chi tiết.</li>        <li><code>number</code>: Một <code>duration</code> tương đương với số ngày ở dạng số nguyên hoặc phân số được biểu thị bởi <code>value</code>.</li>      </ul>Nếu <code>value</code> thuộc một loại khác thì một lỗi được trả về.


## Examples

### Example #1 
Chuyển đổi &lt;code&gt;2.525&lt;/code&gt; thành giá trị &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration
