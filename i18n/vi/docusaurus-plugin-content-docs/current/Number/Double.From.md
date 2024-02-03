---
title: Double.From
---

# Double.From


## Description

Tạo số có độ chính xác Đôi từ giá trị cho trước.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Details

Trả về giá trị Gấp đôi <code>number</code> từ <code>value</code> cho sẵn. Nếu <code>value</code> cho sẵn là <code>null</code>, <code>Double.From</code> sẽ trả về <code>null</code>. Nếu <code>value</code> cho sẵn là <code>number</code> nằm trong phạm vi Gấp đôi thì sẽ trả về <code>value</code>, nếu không sẽ trả về một lỗi. Nếu <code>value</code> thuộc bất kỳ loại nào khác, trước tiên, giá trị này sẽ được chuyển đổi thành <code>number</code> bằng <code>Number.FromText</code>. Một <code>culture</code> tùy chọn cũng có thể được cung cấp (ví dụ: "en-US").


## Examples

### Example #1 
Lấy giá trị &lt;code&gt;số&lt;/code&gt; có độ chính xác Đôi của &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
