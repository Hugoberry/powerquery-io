---
title: Logical.From
---

# Logical.From


Tạo một lôgic từ giá trị cho sẵn.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Trả về giá trị <code>logical</code> từ <code>value</code> cho sẵn. Nếu <code>value</code> cho sẵn là <code>null</code> thì <code>Logical.From</code> trả về <code>null</code>.  Nếu <code>value</code> cho sẵn là <code>logical</code> thì <code>value</code> được trả về. Giá trị của các loại sau đây có thể được chuyển đổi thành giá trị <code>logical</code>:      <ul>        <li><code>text</code>: Một giá trị <code>logical</code> từ giá trị văn bản, <code>"true"</code> hoặc <code>"false"</code>. Tham khảo <code>Logical.FromText</code> để biết chi tiết.</li>        <li><code>number</code>: <code>false</code> nếu <code>value</code> bằng <code>0</code>, <code>true</code> nếu ngược lại.</li>      </ul>Nếu <code>value</code> thuộc một loại khác thì một lỗi được trả về.


## Examples

### Example #1 
Chuyển đổi &lt;code&gt;2&lt;/code&gt; thành giá trị &lt;code&gt;logical&lt;/code&gt;.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
