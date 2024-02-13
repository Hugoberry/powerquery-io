---
title: Binary.From
---

# Binary.From


Tạo một nhị phân từ giá trị cho sẵn


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Trả về giá trị <code>binary</code> từ <code>value</code> đã cho. Nếu <code>value</code> đã cho là <code>null</code>, thì <code>Binary.From</code> sẽ trả về <code>null</code>. Nếu <code>value</code> đã cho là <code>binary</code>, thì <code>value</code> sẽ được trả về. Giá trị của các loại sau có thể được chuyển đổi thành giá trị <code>binary</code>:      <ul>        <li><code>text</code>: Giá trị <code>binary</code> từ dạng biểu diễn văn bản. Tham khảo <code>Binary.FromText</code> để biết chi tiết.</li>      </ul>Nếu <code>value</code> thuộc bất kỳ loại nào khác, thì lỗi sẽ được trả về.


## Examples

### Example #1 
Nhận giá trị &lt;code&gt;binary&lt;/code&gt; của &lt;code&gt;&#34;1011&#34;&lt;/code&gt;.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
