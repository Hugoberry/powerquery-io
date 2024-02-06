---
title: Percentage.From
---

# Percentage.From


Trả về giá trị phần trăm từ giá trị đã cho.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Trả về giá trị <code>percentage</code> từ <code>value</code> cho sẵn. Nếu <code>value</code> cho sẵn là <code>null</code>, <code>Percentage.From</code> sẽ trả về <code>null</code>. Nếu <code>value</code> cho sẵn là <code>text</code> có biểu tượng dấu phần trăm theo sau, thì sẽ trả về số thập phân được chuyển đổi. Nếu không, giá trị sẽ được chuyển đổi thành <code>number</code> bằng <code>Number.From</code>. Một <code>culture</code> tùy chọn cũng có thể được cung cấp (ví dụ: "en-US").


## Examples

### Example #1 
Tải giá trị &lt;code&gt;phần trăm&lt;/code&gt; &lt;code&gt;&#34;12,3%&#34;&lt;/code&gt;.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
