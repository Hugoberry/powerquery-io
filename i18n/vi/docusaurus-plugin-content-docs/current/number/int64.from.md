---
title: Int64.From
---

# Int64.From


Tạo số nguyên 64 bit từ giá trị cho trước.


## Syntax

```powerquery
Int64.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Trả về giá trị <code>number</code> 64 bit từ <code>value</code> đã cho. Nếu <code>value</code> đã cho là <code>null</code>, <code>Int64.From</code> sẽ trả về <code>null</code>. Nếu <code>value</code> là <code>number</code> trong khoảng một số nguyên 64 bit không có phần thập phân, thì <code>value</code> sẽ được trả về. Nếu số nguyên có phần thập phân, thì số sẽ được làm tròn bằng chế độ làm tròn được chỉ định. Chế độ làm tròn mặc định là <code>RoundingMode.ToEven</code>. Nếu <code>value</code> là bất kỳ loại nào khác, trước tiên, giá trị này sẽ được chuyển đổi thành <code>number</code> bằng <code>Number.FromText</code>. Tham khảo <code>Number.Round</code> để biết các chế độ làm tròn sẵn dùng. Một <code>culture</code> tùy chọn cũng có thể được cung cấp (ví dụ: "en-US").


## Examples

### Example #1 
Nhận giá trị &lt;code&gt;số&lt;/code&gt; nguyên 64 bit là &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Tải giá trị số nguyên 64 bit &lt;code&gt;number&lt;/code&gt; là &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; bằng &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Int64.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
