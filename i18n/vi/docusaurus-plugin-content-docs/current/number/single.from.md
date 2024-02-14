---
title: Single.From
---

# Single.From


Tạo số có độ chính xác Đơn từ giá trị cho trước.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Trả về giá trị <code>number</code> Đơn từ <code>value</code> cho sẵn. Nếu <code>value</code> cho sẵn là <code>null</code>, <code>Single.From</code> sẽ trả về <code>null</code>. Nếu <code>value</code> cho sẵn là <code>number</code> nằm trong phạm vi Đơn thì sẽ trả về <code>value</code>, nếu không sẽ trả về một lỗi. Nếu <code>value</code> thuộc bất kỳ loại nào khác, trước tiên, giá trị này sẽ được chuyển đổi thành <code>number</code> bằng <code>Number.FromText</code>. Một <code>culture</code> tùy chọn cũng có thể được cung cấp (ví dụ: "en-US").


## Examples

### Example #1 
Lấy giá trị &lt;code&gt;số&lt;/code&gt; có độ chính xác Đơn của &lt;code&gt;&#34;1,5&#34;&lt;/code&gt;.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
