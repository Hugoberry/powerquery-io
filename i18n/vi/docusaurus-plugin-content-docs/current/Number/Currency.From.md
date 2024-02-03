---
title: Currency.From
---

# Currency.From


## Description

Trả về giá trị tiền tệ từ giá trị đã cho.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Trả về giá trị <code>currency</code> từ <code>value</code> đã cho. Nếu <code>value</code> đã cho là <code>null</code>, <code>Currency.From</code> sẽ trả về <code>null</code>. Nếu <code>value</code> đã cho là <code>number</code> trong phạm vi tiền tệ, phần thập phân của <code>value</code> sẽ được làm tròn tới 4 chữ số thập phân và được trả về. Nếu <code>value</code> đã cho thuộc bất kỳ loại nào khác, trước tiên, giá trị này sẽ được chuyển đổi thành <code>number</code> bằng <code>Number.FromText</code>. Khoảng hợp lệ của tiền tệ là <code>-922,337,203,685,477.5808</code> đến <code>922,337,203,685,477.5807</code>. Tham khảo <code>Number.Round</code> để biết các chế độ làm tròn sẵn dùng. Chế độ mặc định là <code>RoundingMode.ToEven</code>. Một <code>culture</code> tùy chọn cũng có thể được cung cấp (ví dụ: "en-US").


## Examples

### Example #1 
Nhận giá trị &lt;code&gt;currency&lt;/code&gt; của &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt;.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
Tải giá trị &lt;code&gt;currency&lt;/code&gt; của &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; bằng&lt;code&gt;RoundingMode.Down&lt;/code&gt;.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
