---
title: Decimal.From
---

# Decimal.From


Tạo số Thập phân từ giá trị cho trước.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Trả về giá trị <code>number</code> Thập phân từ <code>value</code> cho sẵn. Nếu <code>value</code> cho sẵn là <code>null</code>, <code>Decimal.From</code> sẽ trả về <code>null</code>. Nếu <code>value</code> cho sẵn là <code>number</code> nằm trong phạm vi Thập phân thì sẽ trả về <code>value</code>, nếu không sẽ trả về một lỗi. Nếu <code>value</code> thuộc bất kỳ loại nào khác, trước tiên, giá trị này sẽ được chuyển đổi thành <code>number</code> bằng <code>Number.FromText</code>. Một <code>culture</code> tùy chọn cũng có thể được cung cấp (ví dụ: "en-US").


## Examples

### Example #1 
Lấy giá trị &lt;code&gt;số&lt;/code&gt; Thập phân của &lt;code&gt;&#34;4,5&#34;&lt;/code&gt;.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
